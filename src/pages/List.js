import styled from 'styled-components'
import { useState, useEffect, useMemo } from 'react'

import Title from '../components/shared/Title'

import WriteButton from '../components/list/WriteButton'
import FilterTab from '../components/list/FilterTab'
import MemoList from '../components/list/MemoList'
import { useFilterContext } from '../contexts/filter'

const TitleContainer = styled.div`
  position: relative;

  & > button {
    position: absolute;
    top: 28px;
    right: 24px;
  }
`

// class => componentDidMount (최초 렌더링 후 한번 호출되는 함수)
// function => 라이프 사이클 X = useEffect

const ListPage = () => {
  /**
   * TODO: 필터 변경에 따른 diaries 변경
   */
  // 일기에 대한 정보를 가지고 있는 리스트
  const [diaries, setDiaries] = useState([])

  const { filter, setFilter } = useFilterContext()

  useEffect(() => {
    // 최초에 한번만 동작하는 함수
    // 1. 데이터를 가지고 온다.
    // 지금은 로컬스토리지지만 -> 나중에는 서버에서 받아오는것으로 바꾸면 똑같이 동작한다.
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )

    // 2. 가져온 데이터를 state 에 저장한다.
    setDiaries(diaries)
  }, []) // 감시 대상을 주지 않는다.

  const handleFilterClick = (filterType) => {
    // 상자에 들어있는 필터 값을 바꾼다.
    setFilter(filterType)
  }

  /**
   * => 감시 대상이 바뀌지 않으면 콜백은 동작하지 않는다.
   *
   * useMemo(콜백, 감시대상)
   * useMemo(콜백, 필터) => 필터가 변경되었을 때 필터가 적용된 리스트를 얻는다.
   */
  const filteredDiaries = useMemo(() => {
    // ALL SAD GOOD AWESOME
    switch (filter) {
      case 'ALL': {
        return diaries
      }
      // filter
      case 'SAD': {
        return diaries.filter((diary) => {
          return diary.emotion === 'SAD'
        })
      }
      case 'GOOD': {
        return diaries.filter((diary) => {
          return diary.emotion === 'GOOD'
        })
      }
      case 'AWESOME': {
        return diaries.filter((diary) => {
          return diary.emotion === 'AWESOME'
        })
      }
      default: {
        return diaries
      }
    }
  }, [filter, diaries])

  return (
    <div>
      <TitleContainer>
        <Title
          title="나의 기록들"
          subTitle={`지난 ${diaries.length}개의 기록이 있습니다.`}
        />
        <WriteButton />
      </TitleContainer>
      <FilterTab selectedFilter={filter} onClick={handleFilterClick} />
      <MemoList items={filteredDiaries} />
    </div>
  )
}

export default ListPage
