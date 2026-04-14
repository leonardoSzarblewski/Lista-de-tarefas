import { NavLink } from 'react-router'
import './AppLayout.css'
import { useAuthContext } from '../contexts/AuthContext'

export function AppLayout({ children }: React.PropsWithChildren) {
    const { logout } = useAuthContext()

    return(
        <div className='layout-base'>
            <div className='layout-header'>
                <div className='nav-wrapper'>
                    <NavLink to='/'>
                        Página inicial
                    </NavLink>
                    <NavLink to='/sobre'>
                        Sobre
                    </NavLink>
                </div>

                <button className='btn-logout' onClick={ logout } >
                    Sair
                </button>
            </div>

            { children }
        </div>
    )
}