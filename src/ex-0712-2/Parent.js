import ChildA from './ChildA'
import ChildB from './ChildB'
import { useState } from 'react'
function Parent() {
  // const [pData, setPData] = useState('parent data')
  // 先宣告變數準備接住子女資料
  const [dataFromChildB, setDataFromChildB] = useState('')
  return (
    <>
      <h1>Parent</h1>
      <p>來自ChildB的資料:{dataFromChildB}</p>
      {/*父母傳資料給子女 宣告一個pData屬性值pData */}
      <ChildA dataFromChildB={dataFromChildB} />
      {/* 很多元件會有自己的狀態  */}
      {/* ↓父母傳一個函式給你，如果你要回送資料給我麻煩用這函式回給我 */}
      {/* ↓在ChildB裡面放set 是可以直接監控 ChildB檔案內如果被更改了會自己更動 */}
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}

export default Parent
