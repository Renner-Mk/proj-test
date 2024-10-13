import { Outlet } from 'react-router-dom'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import { Container, FormContainer, Wrapper } from './style'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
      <FormContainer />
      <Footer />
    </>
  )
}
