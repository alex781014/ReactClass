// import CC from './CC'
import FC from './FC'
import { useState } from 'react'
function Parent() {
  const [isShow, setIsshow] = useState(true)
  return (
    <>
      {isShow && <FC />}
      <button
        onClick={() => {
          setIsshow(!isShow)
        }}
      >
        {isShow ? '移除' : '呈現'}
      </button>
    </>
  )
}

export default Parent
