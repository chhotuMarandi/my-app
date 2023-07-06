function Video({title,channel,time,views}){
 return (
   <>
     <div className='video-card'>
       <img
         src='https://loremflickr.com/320/240/random'
         className='thumbnail'
         alt=''
       />
       <section className='details-section'>
         <img
           src='https://loremflickr.com/40/40/people'
           className='profile'
           alt=''
         />

         <div className='details'>
           <p className='title'>{title} </p>
           <p className='channel'>{channel}</p>
           <div className='views-time'>
             <p className='views'>{views}</p>
             <p>•</p>
             <p className='time'>{time}</p>
           </div>
         </div>
       </section>
     </div>
   </>
 );
}

export default Video