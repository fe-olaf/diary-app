const WEEKS = ['일', '월', '화', '수', '목', '금', '토']

const getNowDate = () => {
  const date = new Date()

  return {
    formattedDate: `${date.getFullYear()}.${
      date.getMonth() + 1
    }.${date.getDate()}`,
    week: WEEKS[date.getDay()],
  }
}

export default getNowDate
