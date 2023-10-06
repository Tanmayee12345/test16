import "./style.css";
function F1(){
  const mystyle={
    color:"blue",
    backgroundColor:"yellow"
  }
  return(
    <div>
      <h1 style={{color:"red"}}>Inline</h1>
      <h1 style={mystyle}>internal</h1>
      <h1 class="c1">External</h1>
      <h1 class="text-center text-danger bg-warning">Bootstrap</h1>
    </div>
  )
}
export default F1;