import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({videos}){
 return (
   <>
     {videos.map((video) => {
       return (
         <Video
           title={video.title}
           channel={video.channel}
           views={video.views}
           time={video.time}
           thumbnailImg={video.thumbnailImg}
           profileImg={video.profileImg}
           id={video.id}
           key={video.id}
           verified={video.verified}
         >
           <PlayButton
             onPlay={() => console.log('playing', video.title)}
             onPause={() => console.log('paused', video.title)}
           >
             {/* {video.title} */}
           </PlayButton>
         </Video>
       );
     })}
   </>
 );
}

export default VideoList