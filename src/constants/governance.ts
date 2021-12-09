import {
  GOVERNANCE_ALPHA_V0_ADDRESSES,
  GOVERNANCE_ALPHA_V1_ADDRESSES,
  TIMELOCK_ADDRESS,
  UNI_ADDRESS,
} from './addresses'
import { SupportedChainId } from './chains'

export const COMMON_CONTRACT_NAMES: Record<number, { [address: string]: string }> = {
  [SupportedChainId.WATERFALL]: {
    [UNI_ADDRESS[SupportedChainId.WATERFALL]]: 'UNI',
    [TIMELOCK_ADDRESS[SupportedChainId.WATERFALL]]: 'Timelock',
    [GOVERNANCE_ALPHA_V0_ADDRESSES[SupportedChainId.WATERFALL]]: 'Governance (V0)',
    [GOVERNANCE_ALPHA_V1_ADDRESSES[SupportedChainId.WATERFALL]]: 'Governance',
  },
}

export const DEFAULT_AVERAGE_BLOCK_TIME_IN_SECS = 13

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS: { [chainId: number]: number } = {
  1: DEFAULT_AVERAGE_BLOCK_TIME_IN_SECS,
}
