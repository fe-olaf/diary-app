import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { EMOJI } from '../constants'

const Container = styled.ul`
  padding: 0 24px;
`

const MemoContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
`

const Emoji = styled.div`
  font-size: 34px;
`

const ContentContainer = styled.div`
  padding-left: 15px;
`

const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
  color: rgba(0, 12, 30, 0.8);
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const Date = styled.div`
  font-size: 13px;
  color: rgba(3, 24, 50, 0.46);
`

const Memo = ({ items }) => {
  return (
    <Container>
      {items.map(({ id, memo, emotion, created }) => {
        return (
          <MemoContainer key={id}>
            <Emoji>{EMOJI[emotion].icon}</Emoji>
            <Link to={`/detail/${id}`}>
              <ContentContainer>
                <Title>{memo}</Title>
                <Date>{created}</Date>
              </ContentContainer>
            </Link>
          </MemoContainer>
        )
      })}
    </Container>
  )
}

export default Memo
