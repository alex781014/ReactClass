import PropTypes from 'prop-types'
function Child(props) {
  const { text, abc, foo } = props //其實解構也可以寫預設值
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
