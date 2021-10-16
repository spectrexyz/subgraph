import { BigInt } from '@graphprotocol/graph-ts';
import { sERC20, Approval, Paused, RoleAdminChanged, RoleGranted, RoleRevoked, Snapshot, Transfer, Unpaused } from '../../generated/sERC20/sERC20';

export function handleApproval(event: Approval): void {}

export function handlePaused(event: Paused): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleSnapshot(event: Snapshot): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnpaused(event: Unpaused): void {}
