import { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/shared/Navbar'
import Title from '../components/shared/Title'

import EmotionCheckbox from '../components/write/EmotionCheckbox'
import TextArea from '../components/write/TextArea'
import SubmitButton from '../components/write/SubmitButton'
import getDateNow from '../utils/getDateNow'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

/**
 * TODO = form 다루는법
 */

/**
 * 1. state diary = (memo, emotion) 추가
 * 2. emotion checkbox update
 * 3. text memo update
 * 4. submit
 */
const WritePage = () => {
  /**
   * 새로운 일기를 추가하기 위한 값
   */
  const { nowDate } = getDateNow()

  const [diary, setDiary] = useState({
    id: Date.now(), // 지금 시간
    memo: '',
    emotion: '',
    createdAt: nowDate, // ex. 2022.1.23
  })

  // diary의 memo 값을 바꾼다.
  const handleDiaryMemo = (event) => {
    setDiary({
      ...diary,
      memo: event.target.value,
    })
  }

  const handleEmotionClick = (emotion) => {
    setDiary({
      ...diary,
      emotion, // emotion: emotion 같은 의미 (key === value)
    })
  }

  const handleSubmit = () => {
    // 1. 이전 데이터를 가져옴
    // 만약에 저장된 데이터가 없다면 빈배열을 쓴다.
    // getItem 은 string 을 리턴한다. 그렇기 때문에 json parse 를 이용하여 object 로 변환한다.
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )

    // 2. 새로운 데이터를 추가하여 저장
    const newDiaries = [...diaries, diary]
    window.localStorage.setItem('DIARIES_KEY', JSON.stringify(newDiaries))

    // 3. 저장후 뒤로가기
    window.history.back()
  }

  return (
    <Container>
      <Navbar />
      <Title
        title={`오늘은\n어떤 하루를 보내셨나요?`}
        subTitle="TODO 오늘날짜 해주기"
      />
      {/* 지금 선택된 emotion 타입만 이모지를 노출하도록 */}
      <EmotionCheckbox onClick={handleEmotionClick} />
      <TextArea label="기록" onChange={handleDiaryMemo} value={diary.memo} />
      {/* 이상한 데이터가 들어오지 못하도록 memo 나 emotion 선택되지않았다면 클릭 X */}
      <SubmitButton label="작성하기" onClick={handleSubmit} />
    </Container>
  )
}

export default WritePage
