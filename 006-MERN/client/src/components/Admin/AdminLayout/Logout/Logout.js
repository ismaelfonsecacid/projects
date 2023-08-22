import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../hooks/useAuth'

export default function Logout() {
    const { Logout } = useAuth();
    const navigate = useNavigate()

    const onLogout = () => {
        Logout();
        navigate('/admin')
    }
    return (
        <Button icon basic color='red' onClick={onLogout}>
            <Icon name='power off' />Cerrar sesion
        </Button>
    )
}
