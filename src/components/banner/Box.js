// styled = export default
// { css } = export
import styled, { css } from 'styled-components'

/**
 * styled.<태그>
 *
 * styled.div`
 *   color: red;
 * `
 *
 * red 라는 칼라를 가진 div 가 만들어짐
 */

// 공통 믹스인 = 태그를 가지지 않는다. 언제 어디서든 가져다 쓸 수 있음 !
const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
// 스타일을 가진 컴포넌트 만드는법
const Container = styled.div`
  ${centerFlex}

  font-weight: 600;
  color: #fff;

  ${({ width }) => {
    return width ? `width: ${width}px;` : ''
  }}

  ${({ height }) => {
    return height ? `height: ${height}px;` : ''
  }}

  ${({ color }) => {
    return color ? `background-color: ${color};` : ''
  }}
`
// 상속
// Container 의 스타일을 물려받은 Container2 (div)
const Container2 = styled(Container)`
  color: red;
`

const Box = ({ width, height, color, text }) => {
  return (
    <Container width={width} height={height} color={color}>
      {text}
    </Container>
  )
}

export default Box

/**
 * 
 * <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 600,
        color: '#fff',
        width: `${width}px`, // width: width
        height: `${height}px`, // height: height
        backgroundColor: color,
      }}
    >
      {text}
    </div>
 */

// 특정 컴포넌트가 컴포넌트에서 필요한 스타일을 가지도록 할 수 있다.

// Box -> 자기한테 필요한 스타일만 가질 수 있다.

// 1. 클래스 네이밍 고민 X
// 2. 우선순위 고려 X 컴포넌트 레벨의 스코프
// 3. 유지보수
