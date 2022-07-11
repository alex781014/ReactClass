// import { data } from './data/student'
// 直接導入json檔，會自動轉為js的資料值
import data from './data/student.json'

function MapDemo() {
  return (
    <>
      <h1>Map展示</h1>

      {/* map方法 就要加key!一定要加 要在最近的標記裡面加 key不能重複 有id用id 沒有用外部函式庫ex:uuid或nanoid 完全不會再變動才能用索引值*/}
      {/* 後端拉資料過來也可以這樣呈現?? 可以改看看 */}
      {data.map((v, i) => {
        return (
          <div class="col" key={v.id}>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{v.name}</h5>
                <p class="card-text">{v.birth}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MapDemo
