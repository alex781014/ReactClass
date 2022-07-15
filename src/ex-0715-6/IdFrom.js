import React from 'react'

function IdFrom() {
  return (
    <>
      <h1>IdForm</h1>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.querySelector('#my-input').focus()
        }}
      >
        Focus
      </button>
      <button
        onClick={() => {
          document.querySelector('#my-input').Blur()
        }}
      >
        Blur
      </button>
      <button
        onClick={() => {
          alert(document.querySelector('#my-input').value)
        }}
      >
        Show value
      </button>
    </>
  )
}

export default IdFrom
