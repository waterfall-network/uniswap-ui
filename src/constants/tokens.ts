import { Ether, Token, WETH9 } from '@uniswap/sdk-core'

// import { UNI_ADDRESS } from './addresses'
import { SupportedChainId } from './chains'

export const UNI: { [chainId: number]: Token } = {
  // [SupportedChainId.WATERFALL]: new Token(SupportedChainId.WATERFALL, UNI_ADDRESS[0], 18, 'UNI', 'Uniswap'),
}

export const WETH9_EXTENDED: { [chainId: number]: Token } = {
  ...WETH9,
  [SupportedChainId.WATERFALL]: new Token(
    SupportedChainId.WATERFALL,
    '0x8277072D6598141F61895835707452726fcBDf85',
    18,
    'WETH',
    'Wrapped Ether'
  ),
}

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WETH9_EXTENDED) return WETH9_EXTENDED[this.chainId]
    throw new Error('Unsupported chain ID')
  }

  private static _cachedEther: { [chainId: number]: ExtendedEther } = {}

  public static onChain(chainId: number): ExtendedEther {
    return this._cachedEther[chainId] ?? (this._cachedEther[chainId] = new ExtendedEther(chainId))
  }
}
