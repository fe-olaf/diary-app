import styled from 'styled-components'

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

const BOX_INFOS = [
  {
    type: 'SAD',
    emoji: 'π­',
    backgroundColor: 'rgb(142, 196, 255)',
    label: 'μ‘°κΈ μ¬ν\nνλ£¨μμ΄μ',
  },
  {
    type: 'GOOD',
    emoji: 'π',
    backgroundColor: '#ffe69b',
    label: 'νλ³΅ν\nνλ£¨μμ΄μ',
  },
  {
    type: 'AWESOME',
    emoji: 'π₯°',
    backgroundColor: 'rgb(255, 128, 128)',
    label: 'μ΅κ³ μ\nνλ£¨μμ΄μ',
  },
]

/**
 * props λ ν°λμ λ«μ΄μ€λ€.
 */
const EmotionCheckbox = ({ onClick }) => {
  return (
    <Contaienr>
      {BOX_INFOS.map(({ type, emoji, backgroundColor, label }) => {
        return (
          <EmotionBox
            key={type}
            onClick={() => {
              onClick(type)
            }}
            backgroundColor={backgroundColor}
          >
            <ContentContainer>
              <Emoji>{emoji}</Emoji>
              <Label>{label}</Label>
            </ContentContainer>
          </EmotionBox>
        )
      })}
    </Contaienr>
  )
}

export default EmotionCheckbox
