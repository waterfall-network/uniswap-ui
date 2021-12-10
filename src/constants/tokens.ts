import { Currency, NativeCurrency, Token, WETH9 } from '@uniswap/sdk-core'

// import { UNI_ADDRESS } from './addresses'
import { SupportedChainId } from './chains'

export const UNI: { [chainId: number]: Token } = {
  // [SupportedChainId.WATERFALL]: new Token(SupportedChainId.WATERFALL, UNI_ADDRESS[0], 18, 'UNI', 'Uniswap'),
}

export const WETH9_EXTENDED: { [chainId: number]: Token } = {
  ...WETH9,
  [SupportedChainId.WATERFALL]: new Token(
    SupportedChainId.WATERFALL,
    '0x219ed1326b82c468f825cbD727dbaf66810a619C',
    18,
    'WETH',
    'Wrapped Ether'
  ),
}

export class ExtendedEther extends NativeCurrency {
  public get wrapped(): Token {
    if (this.chainId in WETH9_EXTENDED) return WETH9_EXTENDED[this.chainId]
    throw new Error('Unsupported chain ID')
  }
  protected constructor(chainId: number) {
    super(chainId, 18, 'WAT', 'Waterfall')
  }

  equals(other: Currency): boolean {
    return this.decimals === other.decimals
  }

  private static _cachedEther: { [chainId: number]: ExtendedEther } = {}

  public static onChain(chainId: number): ExtendedEther {
    return this._cachedEther[chainId] ?? (this._cachedEther[chainId] = new ExtendedEther(chainId))
  }
}

console.log(ExtendedEther.onChain(1))
