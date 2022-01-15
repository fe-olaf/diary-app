import { useState } from 'react'

import Box from '../components/banner/Box'

const BannerPage = () => {
  // 넓이
  const [width, setWidth] = useState('')
  // 높이 값
  const [height, setHeight] = useState('')
  // 색상
  const [color, setColor] = useState('')
  // 텍스트
  const [text, setText] = useState('')

  return (
    <div>
      <div>
        <div>
          <label>넓이</label>
          <input
            placeholder="넓이"
            value={width}
            onChange={(e) => {
              setWidth(e.target.value)
            }}
          />
        </div>
        <div>
          <label>높이</label>
          <input
            placeholder="높이"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value)
            }}
          />
        </div>
        <div>
          <label>색상</label>
          <input
            placeholder="색상"
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
        </div>
        <div>
          <label>텍스트</label>
          <input
            placeholder="텍스트"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>
      </div>
      <Box width={width} height={height} color={color} text={text} />
    </div>
  )
}

export default BannerPage
