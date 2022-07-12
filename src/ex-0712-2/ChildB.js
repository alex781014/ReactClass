import { useState } from 'react'

function ChildB(props) {
  const [cData, setCData] = useState('child B data')

  return (
    <>
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
