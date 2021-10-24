import { BigDecimal, BigInt, Address } from '@graphprotocol/graph-ts';
import { BVault as _BVault_, PoolBalanceChanged, Swap as SwapEvent } from '../../generated/BVault/BVault';
import { Pool as _Pool_ } from '../../generated/BVault/Pool';
import { Pool, Join, Swap, PoolState } from '../../generated/schema';

function createState<T>(id: string, pool: Pool, event: T): void {
  // AssemblyScript does not support union type.
  // Consequently, we need to use this generic type hack.
  if (event instanceof PoolBalanceChanged || event instanceof SwapEvent) {
    let _bVault_ = _BVault_.bind(event.address);
    let _pool_ = _Pool_.bind(Address.fromString(pool.address.toHexString()));
    let state = new PoolState(id);

    let tokens = _bVault_.getPoolTokens(event.params.poolId);
    let weights = _pool_.getNormalizedWeights();
    let sIndex = pool.sERC20IsToken0 ? 0 : 1;
    let eIndex = pool.sERC20IsToken0 ? 1 : 0;

    state.pool = pool.id;
    state.timestamp = event.block.timestamp;
    state.balances = [tokens.value1[sIndex], tokens.value1[eIndex]];
    state.weights = [weights[sIndex], weights[eIndex]];
    state.price = new BigDecimal(state.balances[eIndex])
      .times(new BigDecimal(state.weights[sIndex]))
      .div(new BigDecimal(state.balances[sIndex]).times(new BigDecimal(state.weights[eIndex])));

    state.save();
  }
}

export function handlePoolBalanceChanged(event: PoolBalanceChanged): void {
  let poolId = event.params.poolId.toHexString();
  let pool = Pool.load(poolId);

  // only fetch for pool that are tied to sERC20s
  if (pool) {
    let id = event.transaction.hash.toHex() + '#' + event.logIndex.toString();
    let join = new Join(id);

    join.pool = poolId;
    join.timestamp = event.block.timestamp;
    join.from = event.transaction.from;

    if (event.params.tokens[0] == Address.fromString(pool.sERC20)) {
      join.amounts = [event.params.deltas[0], event.params.deltas[1]];
    } else {
      join.amounts = [event.params.deltas[1], event.params.deltas[0]];
    }

    join.save();
    createState(id, pool, event);
  }
}

export function handleSwap(event: SwapEvent): void {
  let poolId = event.params.poolId.toHexString();
  let pool = Pool.load(poolId);

  // only fetch for pool that are tied to sERC20s
  if (pool) {
    let id = event.transaction.hash.toHex() + '#' + event.logIndex.toString();
    let swap = new Swap(id);

    swap.pool = poolId;
    swap.timestamp = event.block.timestamp;
    swap.from = event.transaction.from;

    if (event.params.tokenIn == Address.fromString(pool.sERC20)) {
      swap.amounts = [event.params.amountIn, BigInt.fromI32(0).minus(event.params.amountOut)];
    } else {
      swap.amounts = [BigInt.fromI32(0).minus(event.params.amountOut), event.params.amountIn];
    }

    swap.save();
    createState(id, pool, event);
  }
}
