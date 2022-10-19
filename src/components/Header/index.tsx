import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/Logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Timer" />
      <nav>
        <NavLink to="/" title="">
          <Timer size={24}/>
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
