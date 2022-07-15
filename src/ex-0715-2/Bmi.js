import { useState } from 'react'
function Bmi() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const check = () => {
    // BMI = 體重(公斤) / 身高2(公尺平方)
    const bmi = weight / Math.pow(height / 100, 2)
    console.log(bmi)
    return bmi
  }
  return (
    <>
      <label>身高(公分)</label>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(+e.target.value)}
      />
      <label>體重(公斤)</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(+e.target.value)}
      />

      <p>BMI:{check()}</p>
    </>
  )
}

export default Bmi
