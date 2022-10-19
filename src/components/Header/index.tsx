import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/Logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <a href="">Timer</a>
        <a href="">History</a>
      </nav>
    </HeaderContainer>
  )
}
