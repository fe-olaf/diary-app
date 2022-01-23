import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Title from '../shared/Title'
import Emotions from '../shared/Emotions'
import TextArea from '../shared/TextArea'
import SubmitButton from '../shared/SubmitButton'
import getNowDate from '../utils/getNowDate'
import Navbar from '../shared/Navbar'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const WritePage = () => {
  const { formattedDate, week } = getNowDate()
  const navigate = useNavigate()

  const [diary, setDiary] = useState({
    id: Date.now(),
    memo: '',
    emotion: '',
    created: formattedDate,
  })

  const handleEmotionClick = (type) => {
    setDiary({
      ...diary,
      emotion: type,
    })
  }

  const handleUpdateMemo = (memo) => {
    setDiary({
      ...diary,
      memo,
    })
  }

  const onSubmit = () => {
    const diaries = JSON.parse(localStorage.getItem('memos') || '[]')

    localStorage.setItem('memos', JSON.stringify([...diaries, diary]))

    navigate('/')
  }

  const isSubmittable = diary.memo && diary.emotion

  return (
    <Container>
      <Navbar />
      <Title
        title={`오늘은\n어떤 하루를 보내셨나요?`}
        subTitle={`${formattedDate} (${week})`}
      />
      <Emotions seletedEmotion={diary.emotion} onClick={handleEmotionClick} />
      <TextArea label="기록" value={diary.memo} onChange={handleUpdateMemo} />
      <SubmitButton
        disabled={!isSubmittable}
        label="작성하기"
        onClick={isSubmittable ? onSubmit : null}
      />
    </Container>
  )
}

export default WritePage
