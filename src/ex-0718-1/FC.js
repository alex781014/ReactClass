import { useState, useEffect } from 'react'

function FC() {
  const [total, setTotal] = useState(0)
  //   模擬componentDidMount + conponentDidUpdate
  useEffect(() => {
    //跟伺服器要任何資料都要寫在這裡面
    //useEffect 第一個參數是callBack 所以直接寫箭頭函式，第二參數寫陣列
    console.log('FC-模擬componentDidMount + conponentDidUpdate =', total)
  }, [total]) //相依陣列裡填入會觸發updating階段的state或props 範例等於 當total有改變時候執行這裡程式碼

  //   只模擬didUpdate，略過初始值
  useEffect(() => {
    if (total !== 0) {
      console.log('FC- 只模擬conponentDidUpdate ', total)
    }
  }, [total])

  // 成對的取消訂閱模式
  useEffect(() => {
    document.querySelector('test').addEventListener('click', function () {
      alert('hello')
    })
    //模擬willUnmount
    return () => {
      document.querySelector('test').removeEventListener('click')
      // console.log('FC-模擬copmonetWillUnmount')
    }
  }, [])
  return (
    <>
      <h1>FC</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC
