import { AbstractConnector } from '@web3-react/abstract-connector'

import Identicon from '../Identicon'

export default function StatusIcon({ connector }: { connector: AbstractConnector }) {
  return connector ? <Identicon /> : null
}
