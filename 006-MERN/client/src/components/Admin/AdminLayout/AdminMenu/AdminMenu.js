import React from 'react';
import './AdminMenu.scss';
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function AdminMenu() {
    return (
        <Menu fluid vertical icon text className='admin-menu'>
            <Menu.Item as={Link} to='/admin/users'>
                <Icon name='user outline' />
                Usuario
            </Menu.Item>

            <Menu.Item as={Link} to='/admin/menu'>
                <Icon name='bars' />
                Menu
            </Menu.Item>
            <Menu.Item as={Link} to='/admin/courses'>
                <Icon name='computer' />
                Cursos
            </Menu.Item>
            <Menu.Item as={Link} to='/admin/newsletter'>
                <Icon name='mail' />
                Newsletter
            </Menu.Item>
            <Menu.Item as={Link} to='/admin/blog'>
                <Icon name='comment alternate outline' />
                Blog
            </Menu.Item>
        </Menu>
    )
}
