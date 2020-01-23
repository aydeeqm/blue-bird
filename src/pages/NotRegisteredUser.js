import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activateAuth)
                    }

                    const errorMsg = error && 'El usuario ya existe o hay algún problema.'

                    return <UserForm onSubmit={onSubmit} title='Registrarse' error={errorMsg} disabled={loading} />
                  }
                }
              </RegisterMutation>
              <LoginMutation>
                {
                  (login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      login({ variables }).then(activateAuth)
                    }

                    const errorMsg = error && 'La contraseña es incorrecta o el usuario no existe.'

                    return <UserForm onSubmit={onSubmit} title='Iniciar sesión' error={errorMsg} disabled={loading} />
                  }
                }
              </LoginMutation>
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
