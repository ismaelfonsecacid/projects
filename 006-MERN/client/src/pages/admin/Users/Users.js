import React from 'react'
import { useState } from 'react';
import { Tab, Button } from 'semantic-ui-react'
import './Users.scss'
import { BasicModal } from '../../../components/Shared'
import { UserForm } from '../../../components/Admin'



export default function Users() {


  const [showModal, setShowModal] = useState(false)

  const onOpenCloseModal = () => {
    setShowModal((prevState) => !prevState)
  }

  const panes = [
    {
      menuItem: "Usuarios activos",
      render: () => (
        <Tab.Pane attached={false}>
          <h2>Usuarios activos</h2>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Usuarios inactivos",
      render: () => (
        <Tab.Pane attached={false}>
          <h2>Usuarios inactivos</h2>
        </Tab.Pane>
      )
    },
  ]





  return (
    <>
      <div className='users-page'>
        <Button className='users-page__add' primary onClick={onOpenCloseModal}>Nuevo Usuario</Button>
        <Tab menu={{ secondary: true }} panes={panes} />
      </div>

      <BasicModal show={showModal} title={'Crear nuevo usuario'} close={onOpenCloseModal}>
        <UserForm close={onOpenCloseModal} />
      </BasicModal>
    </>
  )
}
