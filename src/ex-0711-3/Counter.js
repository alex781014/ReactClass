import { useState } from 'react'

function Counter() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>{total}</h1>
      {/* total !== 0 是為了強制讓他變成布林值 */}
      {total !== 0 && <p>messae:目前total不是0</p>}
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}
export default Counter
