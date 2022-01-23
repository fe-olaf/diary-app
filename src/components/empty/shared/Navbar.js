import styled from 'styled-components'

const Container = styled.div`
  padding: 15px 16px;
`
const Icon = styled.img`
  width: 24px;
`

const Navbar = () => {
  const handleHistoryBack = () => {
    window.history.back()
  }

  return (
    <Container>
      <Icon src="/assets/images/icon-back.png" onClick={handleHistoryBack} />
    </Container>
  )
}

export default Navbar
