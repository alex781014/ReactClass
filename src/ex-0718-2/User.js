import { useState, useEffect } from 'react'
import './User.css'
import axios from 'axios'

// User物件
// {
// "id": "107001",
// "name": "張佳蓉",
// "birth": "990101"
// }

function User() {
  // 如果跟伺服器要資料，要在React上處理 需要兩個狀態
  // 第一次紀錄伺服器的原始資料用
  const [userRaw, setUserRaw] = useState([])
  // 呈現資料用
  const [usersDisplay, setUsersDisplay] = useState([]) //第一次render是空陣列

  // 載入資料的狀態
  const [isLoading, setIsLoading] = useState(false)

  const [searchWord, setSearchWord] = useState('')

  const getUserData = async () => {
    const response = await axios.get(
      //axios會自動轉成 json
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )
    console.log(response)
    // 設定到state
    setUsersDisplay(response.data) //會統一放在data裡面
    setUserRaw(response.data) //第一次跟伺服器要資料 兩個狀態都一樣
  }
  //   didMount
  useEffect(() => {
    // 開啟載入指示動態
    setIsLoading(true)
    getUserData() //第一次 render完 執行這個didMount
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const spinner = (
    <>
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </>
  )

  const displayTable = (
    <table>
      <tbody>
        {usersDisplay.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.birth}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <>
      <h1>會員資料</h1>
      <input
        type="text"
        placeholder="輸入姓名"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value)
        }}
      />
      <button
        onClick={() => {
          if (searchWord !== '') {
            const newUsersDisplay = userRaw.filter((v, i) =>
              v.name.includes(searchWord)
            )
            setUsersDisplay(newUsersDisplay)
          } else {
            // 重設回去
            setUsersDisplay(userRaw)
          }
        }}
      >
        搜尋
      </button>
      {isLoading ? spinner : displayTable}
    </>
  )
}

export default User
