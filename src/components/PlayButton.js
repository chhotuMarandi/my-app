function PlayButton({name,message,children}) {

function clickHandler(){
  console.log(message)
}

 return (
   <>
     <button onClick={clickHandler}>{children}</button>
   </>
 );
}

export default PlayButton