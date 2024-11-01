import styled from 'styled-components'

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  padding: 20px 35px;
  display:flex;
  justify-content:space-between;
`

export const Container = styled.div`
  width: 1250px;
  padding: 0 25px;
`

export const Button = styled.button`
  padding: 15px;
  background-color:${({theme}) => theme.colors.primary};
`
