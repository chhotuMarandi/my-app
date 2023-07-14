import { useState } from "react";

function AddVideo({ setVideos }) {
  const [video, setVideo] = useState({
    channel: 'Coding addict',
    time: '3 year ago',
    verified: true,
  });

  function inputField(e) {
    console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    setVideos(video);
  }

  return (
    <>
      <input
        type='title'
        onChange={inputField}
        name='title'
        placeholder='title'
      />
      <input
        type='view'
        onChange={inputField}
        name='view'
        placeholder='views'
      />
      <button onClick={onSubmit}>Add Video</button>
    </>
  );
}

export default AddVideo