import React from 'react'
import { Form, Input, Title, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const hundleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form onSubmit={hundleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input placeholder='Email' {...email} disabled={disabled} />
        <Input type='password' placeholder='Password' {...password} disabled={disabled} />
        <SubmitButton type='submit'>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
