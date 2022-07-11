import { useState } from 'react'
import './Menu.css'
// 陣列索引抓值
function Menu() {
  const menuItems = ['首頁', '關於我們', '產品']
  const [activeIndex, setActiveIndex] = useState(-1)
  return (
    <ul>
      {menuItems.map((v, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              setActiveIndex(i)
            }}
          >
            <a href="#/" className={activeIndex === i ? 'active' : ''}>
              {v}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

// 寫法2 抓字串
// function Menu(){
//       const menuItems = ['首頁', '關於我們', '產品']
//   const [activeMenu, setActiveMenu] = useState('產品')

//   return (
//     <ul>
//       {menuItems.map((v, i) => {
//         return (
//           <li
//             key={i}
//             onClick={() => {
//               setActiveMenu(v)
//             }}
//           >
//             <a href="#/" className={activeMenu === v ? 'active' : ''}>
//               {v}
//             </a>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }
export default Menu
