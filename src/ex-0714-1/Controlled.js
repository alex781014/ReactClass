import { useState } from 'react'

function Controlled() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  //   都是用一群
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']
  //select
  const [car, setCar] = useState('')
  const carOptions = ['benz', 'BMW', 'Toyoto']
  // checkbox - single
  const [agree, setAgree] = useState(false)
  // checkbox-group
  const [likeList, setLikeList] = useState([])
  const fruitOptions = ['西瓜', '芒果', '蘋果']
  return (
    <>
      <section id="input-text">
        <h1>文字輸入框(input-text)</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h1>文字輸入框(textarea)</h1>
        <textarea
          type="text"
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value)
          }}
        />
      </section>
      <section id="radio-group">
        <h1>選項按鈕-群組(radio-group)</h1>
        {genderOptions.map((v, i) => {
          return (
            <div>
              <input
                type="radio"
                checked={gender === v}
                value={v}
                onChange={(e) => {
                  setGender(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
      <section id="select">
        <h1>下拉清單(select)</h1>
        <select
          value={car}
          onChange={(e) => {
            setCar(e.target.value)
          }}
        >
          <option value="請選擇">請選擇</option>
          {carOptions.map((v, i) => {
            return (
              <option value={v} key={i}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
      <section id="checkbox-single">
        <h1>核取方塊(單一)</h1>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label>我同意會員註冊條款</label>
      </section>
      <section id="checkbox-group">
        <h1>喜歡的水果</h1>
        {fruitOptions.map((v, i) => {
          return (
            <span key={i}>
              <input
                type="checkbox"
                checked={likeList.includes(v)}
                value={v}
                onChange={(e) => {
                  //判斷值有沒有在likeList狀態陣列中
                  if (likeList.includes(e.target.value)) {
                    //如果有 移出陣列
                    // 更改狀態三步驟原則
                    // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
                    // 2. 在新的變數值(陣列/物件)上作處理
                    const newLikeList = likeList.filter((v, i) => {
                      return v !== e.target.value
                    })
                    // 3. 設定回原本的狀態中
                    setLikeList(newLikeList)
                  } else {
                    // 如果沒有就加入
                    const newLikeList = [...likeList, e.target.value]
                    setLikeList(newLikeList)
                  }
                }}
              />
              <label>{v}</label>
            </span>
          )
        })}
      </section>
    </>
  )
}

export default Controlled
