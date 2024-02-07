import React from "react";
import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "./utils/constant";
import { GOOGLE_API_KEY } from "./utils/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideSidebarHandeler } from "./utils/appSlice";
import { useSelector } from "react-redux";
const VideoContainer = () => {
  const result = useSelector((store) => store.what.context);
  console.log(result);
  const dispatch = useDispatch();
  const hideSidebarHandelero = () => {
    dispatch(hideSidebarHandeler());
  };
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const response = await data.json();
    console.log(response.items);
    setVideos(response.items);
  };
  useEffect(() => {
    if (result) {
      getSearchedVideos();
    }
  }, [result]);

  const getSearchedVideos = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${result}&type=video&key=${GOOGLE_API_KEY}`
    );
    const response = await data.json();
    console.log(response.items);
    setVideos(response.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        let id = result.length > 0 ? video.id.videoId : video.id;
        
        return (
          <Link
            to={"/watch?v=" + id}
            key={id}
            onClick={hideSidebarHandelero}
          >
            <VideoCard  key={id} videos={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
