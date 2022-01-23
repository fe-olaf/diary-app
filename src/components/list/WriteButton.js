import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Button = styled.button`
  padding: 9px;
  border-radius: 5px;
  font-weight: 500;
`

const WriteButton = () => {
  // a 태그(Link) 를 이용해서 이동하는게 아니라
  // 함수 이벤트를 이용해서 페이지를 이동하는방법
  const navigate = useNavigate()

  const moveToWritePage = () => {
    // 글 작성 페이지로 이동
    navigate('/write')
  }

  return <Button onClick={moveToWritePage}>오늘을 기록하기</Button>
}

export default WriteButton
