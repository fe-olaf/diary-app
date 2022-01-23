import styled from 'styled-components'
import { EMOJI } from '../constants'

const Container = styled.ul`
  display: flex;
  padding: 10px 24px;
  border-bottom: 1px solid rgba(0, 12, 30, 0.1);
`

const Menu = styled.li`
  padding: 5px;
  color: rgba(3, 24, 50, 0.46);
  font-weight: bold;
  position: relative;

  ${({ active }) =>
    active &&
    `
    color: rgba(0, 12, 30, 0.8);

    &::after {
        content: '';
        left: 0;
        right: 0;
        position: absolute;
        height: 2px;
        bottom: -12px;
        background: rgba(0, 12, 30, 0.8);
      }
  `}
`

const TAB_MAPPER = {
  [EMOJI.SAD.label]: '슬픔',
  [EMOJI.GOOD.label]: '좋음',
  [EMOJI.AWESOME.label]: '매우 좋음',
}

const Tabs = ({ seletedTab, onClick }) => {
  const menus = Object.values(EMOJI).map(({ label }) => label)

  return (
    <Container>
      {['ALL', ...menus].map((label) => {
        return (
          <Menu
            active={seletedTab === label}
            key={label}
            onClick={() => {
              onClick(label)
            }}
          >
            {TAB_MAPPER[label] || '전체'}
          </Menu>
        )
      })}
    </Container>
  )
}

export default Tabs
