import styled from 'styled-components'

import { EMOJI } from '../constants'

const Contaienr = styled.div`
  padding: 10px 24px;
  display: flex;
  justify-content: space-between;
`

const EmotionBox = styled.div`
  border-radius: 20px;
  width: 32.3%;
  padding-bottom: 32.3%;
  position: relative;

  ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
`

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

const Emoji = styled.div`
  font-size: 24px;
  top: 15px;
  text-align: center;
  margin-bottom: 10px;
`

const Label = styled.div`
  font-size: 14px;
  color: rgba(0, 12, 30, 0.8);
  font-weight: bold;
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.15;
`

const EMOTION_INFOS = [
  {
    type: EMOJI.SAD.label,
    emoji: EMOJI.SAD.icon,
    label: '조금 슬픈\n하루였어요',
    backgroundColor: 'rgb(142, 196, 255)',
  },
  {
    type: EMOJI.GOOD.label,
    emoji: EMOJI.GOOD.icon,
    label: '행복한\n하루였어요',
    backgroundColor: '#ffe69b',
  },
  {
    type: EMOJI.AWESOME.label,
    emoji: EMOJI.AWESOME.icon,
    label: '최고의\n하루였어요',
    backgroundColor: 'rgb(255, 128, 128)',
  },
]

const Emotions = ({ onClick, seletedEmotion }) => {
  return (
    <Contaienr>
      {EMOTION_INFOS.map(({ type, emoji, label, backgroundColor }) => {
        return (
          <EmotionBox
            key={type}
            backgroundColor={backgroundColor}
            onClick={() => {
              onClick(type)
            }}
          >
            <ContentContainer>
              {seletedEmotion === type ? <Emoji>{emoji}</Emoji> : null}
              <Label>{label}</Label>
            </ContentContainer>
          </EmotionBox>
        )
      })}
    </Contaienr>
  )
}

export default Emotions
