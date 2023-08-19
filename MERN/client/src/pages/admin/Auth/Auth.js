import React from 'react'
import { Icon } from '../../../assets'
import './Auth.scss'
import { Tab } from 'semantic-ui-react'
import { useState } from 'react'
import { RegisterForm, LoginForm } from '../../../components/Admin'

export default function Auth() {
  const [activeIndex, setActiveIndex] = useState(1);

  const openLogin = () => setActiveIndex(0)

  const panes = [
    {
      menuItem: "Entrar",
      render: () => (
        <Tab.Pane>
          <LoginForm />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Nuevo usuario",
      render: () => (
        <Tab.Pane>
          <RegisterForm openLogin={openLogin} />
        </Tab.Pane>
      )
    },

  ];

  return (
    <div className='auth'>
      <Icon.LogoWhite className='logo' />
      <Tab panes={panes} className='auth__forms' activeIndex={activeIndex} onTabChange={(_, data) => setActiveIndex(data.activeIndex)} />
    </div>
  )
}
