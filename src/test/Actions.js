
 const Actions = ({ handlePlusCount,handleMinusCount}) => {
    return(
        <div>
    <button onClick={handlePlusCount}>increment</button>
    <button onClick={handleMinusCount}>decrement</button>
       </div>
    )
}
export default Actions