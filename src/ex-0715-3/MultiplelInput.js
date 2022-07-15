import { useState } from 'react'

function MultiplelInput() {
  const [userData, setUserData] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: '',
    car: '',
    likeList: [],
  })
  const genderOptions = ['男', '女', '不提供']
  const carOptions = ['Benz', 'BMW', 'Toyota']
  const fruitOptions = ['西瓜', '芒果', '蘋果']
  // 共用
  const handleChange = (e) => {
    // 計算屬性名 [e.target.name]: e.target.value
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  return (
    <>
      {/* 三格欄位共用狀態 */}
      <label>姓名</label>
      <input
        type="text"
        name="fullName"
        value={userData.fullName}
        onChange={handleChange}
      />
      <br />
      <label>電話</label>
      <input
        type="phone"
        name="phone"
        value={userData.phone}
        onChange={handleChange}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <br />
      <label>性別</label>
      {genderOptions.map((v, i) => {
        return (
          <span key={i}>
            <input
              name="gender"
              type="radio"
              checked={userData.gender === v}
              value={v}
              onChange={handleChange}
            />
            <label>{v}</label>
          </span>
        )
      })}
      <br />
      <label>喜好車子品牌</label>
      <select name="car" value={userData.car} onChange={handleChange}>
        <option value="">請選擇</option>
        {carOptions.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      <br />
      <label htmlFor="">喜好水果</label>
      {fruitOptions.map((v, i) => {
        return (
          <span key={i}>
            <input
              type="checkbox"
              name="likeList"
              checked={userData.likeList.includes(v)}
              value={v}
              onChange={(e) => {
                //先判斷是否有在likeList狀態陣列中
                if (userData.likeList.includes(e.target.value)) {
                  // if有 -> 移出陣列
                  const newLikeList = userData.likeList.filter((v, i) => {
                    return v !== e.target.value
                  })
                  setUserData({ ...userData, likeList: newLikeList })
                } else {
                  // else -> 加入陣列
                  const newLikeList = [...userData.likeList, e.target.value]
                  setUserData({
                    ...userData,
                    likeList: newLikeList,
                  })
                }
              }}
            />
            <label>{v}</label>
          </span>
        )
      })}
    </>
  )
}

export default MultiplelInput
