export enum SupportedChainId {
  WATERFALL = 333777333,
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [SupportedChainId.WATERFALL]

export const L1_CHAIN_IDS = [SupportedChainId.WATERFALL] as const

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

export const L2_CHAIN_IDS = [] as const

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]

export interface L1ChainInfo {
  readonly blockWaitMsBeforeWarning?: number
  readonly docs: string
  readonly explorer: string
  readonly infoLink: string
  readonly label: string
  readonly logoUrl?: string
  readonly rpcUrls?: string[]
  readonly nativeCurrency: {
    name: string // 'Goerli ETH',
    symbol: string // 'gorETH',
    decimals: number //18,
  }
}
export interface L2ChainInfo extends L1ChainInfo {
  readonly bridge: string
  readonly logoUrl: string
  readonly statusPage?: string
  readonly defaultListUrl: string
}

export type ChainInfo = { readonly [chainId: number]: L1ChainInfo | L2ChainInfo } & {
  readonly [chainId in SupportedL2ChainId]: L2ChainInfo
} &
  { readonly [chainId in SupportedL1ChainId]: L1ChainInfo }

export const CHAIN_INFO: ChainInfo = {
  [SupportedChainId.WATERFALL]: {
    docs: 'https://waterfall.network/',
    explorer: 'https://explorer.waterfall.network',
    infoLink: 'https://waterfall.network/',
    label: 'Waterfall',
    logoUrl: 'https://explorer.waterfall.network/favicon-152-precomposed.png',
    rpcUrls: ['https://rpc.waterfall.network/rpc'],
    nativeCurrency: { name: 'WAT', symbol: 'WAT', decimals: 18 },
  },
}

// export const ARBITRUM_HELP_CENTER_LINK = 'https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum'
// export const OPTIMISM_HELP_CENTER_LINK =
//   'https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ'
