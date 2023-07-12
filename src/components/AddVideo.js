function AddVideo (){

 function inputField(e){
  console.log(e.target.name,e.target.value)
 }

 function onSubmit(){
   console.log('submit')
 }

 return (
   <>
     <input
       type='title'
       onChange={inputField}
       name='title'
       placeholder='title'
     />
     <input type='view' onChange={inputField} name='view' placeholder='views' />
     <button onClick={onSubmit}>Submit</button>
   </>
 );
}

export default AddVideo