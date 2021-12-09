import { Token } from '@uniswap/sdk-core'
import { SOCKS_CONTROLLER_ADDRESSES } from 'constants/addresses'
import { SupportedChainId } from 'constants/chains'
import { useMemo } from 'react'
import { useTokenBalance } from 'state/wallet/hooks'

import { useActiveWeb3React } from './web3'

// technically a 721, not an ERC20, but suffices for our purposes
const SOCKS = new Token(SupportedChainId.WATERFALL, SOCKS_CONTROLLER_ADDRESSES[SupportedChainId.WATERFALL], 0)

export function useHasSocks(): boolean | undefined {
  const { account, chainId } = useActiveWeb3React()

  const balance = useTokenBalance(account ?? undefined, chainId === SupportedChainId.WATERFALL ? SOCKS : undefined)

  return useMemo(() => Boolean(balance?.greaterThan(0)), [balance])
}
