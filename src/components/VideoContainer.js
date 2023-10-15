import React from "react";
import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "./utils/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideSidebarHandeler } from "./utils/appSlice";
const VideoContainer = () => {
  const dispatch = useDispatch();
  const hideSidebarHandelero = () =>{
    dispatch(hideSidebarHandeler())
  }
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const response = await data.json();
    setVideos(response.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        
        return (
          <Link to={"/watch?v="+video.id} key={video.id} onClick={hideSidebarHandelero} >
            <VideoCard videos={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
