import products from './product.json'
import '../ProductsTable.css'
function Product() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>品名</th>
            <th>價格</th>
            <th>圖片</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.price}</td>
                <td>
                  <img src={v.picture} alt="" />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Product
