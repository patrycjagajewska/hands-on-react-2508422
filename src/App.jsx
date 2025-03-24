function App() {
  const name = "Star Gazers"
  return (
    <div>
      <article>
        <img src="/images/Star_Gazers.webp" width="700"></img>
        <hgroup>
          <h1>Meet the <i style={{color: "steelBlue"}}>{ name }</i></h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button style={{backgroundColor: "steelblue", color: "white"}} onClick={() => alert("HI!")}>Click me</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App
