import { useState } from "react";

function AddVideo({ addVideo }) {

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
    addVideo(video);
    setVideo(initialData);
  }

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
      <button onClick={onSubmit}>Add Video</button>
    </>
  );
}

export default AddVideo