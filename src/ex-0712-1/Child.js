import PropTypes from 'prop-types'
function Child(props) {
  // pros是物件 先做物件解構賦值
  const { text, abc, foo } = props //其實解構也可以寫預設值

  // 解構指定值時也可以給預設值
  //或直接在傳入參數時給定預設值
  //參考:https://stackoverflow.com/questions/47774695/react-functional-component-default-props-vs-default-parameters

  console.log(props)

  return (
    <>
      <h1>{text}</h1>
      <p>{abc}</p>
      <button onClick={foo}>click me</button>
    </>
  )
}
Child.propTypes = {
  text: PropTypes.string.isRequired,
  abc: PropTypes.number.isRequired,
}
Child.defaultProps = {
  text: '沒給文字',
  abc: 0,
}

export default Child
