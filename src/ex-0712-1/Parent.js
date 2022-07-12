import Child from './Child'
function Parent() {
  return (
    <>
      <Child
        text="React您好"
        abc={123}
        isBook={true}
        foo={() => {
          alert('hello')
        }}
      />
      <Child />
      <Child text={999} abc={false} />
    </>
  )
}

export default Parent
