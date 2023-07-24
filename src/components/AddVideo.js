import { useEffect, useState } from "react";
import useVideoDispatch from "./hooks/VideoDispatchHooks";

function AddVideo({editVideos }) {

  const dispatch = useVideoDispatch();

  const initialData = {
    channel: 'Coding addict',
    time: '3 year ago',
    verified: true,
    title: '',
    views: '',
  };

  const [video, setVideo] = useState(initialData);

  function inputField(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    if(editVideos) {
      dispatch({ type: 'UPDATE', payload: video });
    } else {
     dispatch({ type: 'ADD', payload: video });
    }
   
  }

  useEffect(() => {
    if(editVideos){
      setVideo(editVideos);

    }
  }, [editVideos]);

  return (
    <>
      <input
        type='text'
        onChange={inputField}
        name='title'
        placeholder='title'
        value={video.title}
      />
      <input
        type='text'
        onChange={inputField}
        name='views'
        placeholder='views'
        value={video.views}
      />
      <button onClick={onSubmit}>{editVideos ? 'Update' : 'Add'} Video</button>
    </>
  );
}

export default AddVideo