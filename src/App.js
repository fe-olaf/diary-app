import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import BannerPage from './pages/Banner'
import DetailPage from './pages/Detail'
import ListPage from './pages/List'
import ModifyPage from './pages/Modify'
import WritePage from './pages/Write'

import ResetStyles from './components/shared/ResetStyles'

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`

// BrowserRouter = 브라우저 히스토리에 대한 관심사를 담고있는 박스
// Route = 특정 경로로 진입했을때 특정 컴포넌트를 노출
// Routes = Route 들을 감싸서 특정 경로에맞게 컴포넌트를 스위칭해줌

const App = () => {
  return (
    <Container>
      <ResetStyles />
      <BrowserRouter>
        {/* <div>나는 유지된다 ...</div> */}
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/write" element={<WritePage />} />
          {/* detail/123 => id = 123, detail/222 => id = 222 */}
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/modify" element={<ModifyPage />} />
          <Route path="/banner" element={<BannerPage />} />
          <Route
            path="*"
            element={
              <div>
                <h1>찾으시는 페이지가 없어요</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
