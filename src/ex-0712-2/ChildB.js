import { useState } from 'react'

function ChildB(props) {
  const [cData, setCData] = useState('child B data')

  return (
    <>
      {/* 子女一定要觸發函式才能把資料回給父母 */}
      <h1>Child B</h1>
      <button
        onClick={() => {
          props.setDataFromChildB(cData)
        }}
      >
        送資料給子女A
      </button>
    </>
  )
}

export default ChildB
