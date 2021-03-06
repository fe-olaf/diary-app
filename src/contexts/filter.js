import { createContext, useState, useContext } from 'react'

// 빈박스를 만든다
const Context = createContext()

// 제공자 = Provider
// children = 감싸져있는 자식들
export const FilterContextProvider = ({ children }) => {
  /**
   * 새로고침시에도 유지를 하고싶다면 로컬스토리지를 쓰면 된다.
   */
  const [filter, setFilter] = useState('ALL')

  // 박스에 감싸진 모든 요소는 filter 와 setFilter 에 접근이 가능하다.
  return (
    <Context.Provider value={{ filter, setFilter }}>
      {children}
    </Context.Provider>
  )
}

// 제공받는자 = Consumer
// 가져다 쓸 때 사용하는 함수
// 제공받는 컴포넌트들은 useFilterContext를 이용하여 값을 빼온다.
export const useFilterContext = () => {
  return useContext(Context)
}
