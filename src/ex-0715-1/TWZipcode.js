import { useState } from 'react'
import { countries, townships, postcodes } from './data/townships'

function TWZipcode() {
  // 代表目前被選中的索引值
  const [countryIndex, setCountryindex] = useState(-1)
  const [townshipIndex, setTownsShipIndex] = useState(-1)

  return (
    <>
      <select
        value={countryIndex}
        onChange={(e) => {
          // 注意e.target.value為字串類型
          //   為了保持與state的資料類型相同要轉為數字
          setCountryindex(+e.target.value)
          //   重製townshipIndex 為-1
          setTownsShipIndex(-1)
        }}
      >
        <option value="-1">請選擇縣市</option>
        {countries.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          )
        })}
      </select>
      <select
        value={townshipIndex}
        onChange={(e) => {
          // 注意e.target.value為字串類型
          //   為了保持與state的資料類型相同要轉為數字
          setTownsShipIndex(+e.target.value)
        }}
      >
        <option value="-1">請選擇區域</option>
        {countryIndex > -1 &&
          townships[countryIndex].map((v, i) => {
            return (
              <option key={i} value={i}>
                {v}
              </option>
            )
          })}
      </select>
      <p>
        郵遞區號:
        {countryIndex > -1 &&
          townshipIndex > -1 &&
          postcodes[countryIndex][townshipIndex]}
      </p>
    </>
  )
}

export default TWZipcode
