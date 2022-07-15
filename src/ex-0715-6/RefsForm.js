import React from 'react'
import { useRef } from 'react'

function RefsForm() {
  // 建議用null當初始值
  const inputRef = useRef(null)
  return (
    <>
      <h1>RefsForm</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        Focus
      </button>
      <button
        onClick={() => {
          inputRef.current.Blur()
        }}
      >
        Blur
      </button>
      <button
        onClick={() => {
          alert(inputRef.current.value)
        }}
      >
        Show value
      </button>
    </>
  )
}

export default RefsForm
