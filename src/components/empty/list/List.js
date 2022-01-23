import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Title from '../shared/Title'
import Memo from './Memo'
import Button from './Button'
import Tabs from './Tabs'

const TitleContainer = styled.div`
  position: relative;

  & > button {
    position: absolute;
    top: 28px;
    right: 24px;
  }
`

const ListPage = () => {
  const navigate = useNavigate()
  const [memos, setMemos] = useState([])
  const [seletedTab, setSeletedTab] = useState('SAD')

  useEffect(() => {
    // fetch
    setMemos(JSON.parse(localStorage.getItem('memos') || '[]'))
  }, [])

  const moveToWritePage = () => {
    navigate('/write')
  }

  const handleFilter = (type) => {
    setSeletedTab(type)
  }

  return (
    <div>
      <TitleContainer>
        <Button onClick={moveToWritePage}>오늘을 기록하기</Button>
        <Title
          title="나의 기록들"
          subTitle={`${memos.length}개의 지난 기록이 있어요`}
        ></Title>
      </TitleContainer>
      <Tabs seletedTab={seletedTab} onClick={handleFilter} />
      <Memo items={memos} />
    </div>
  )
}

export default ListPage
