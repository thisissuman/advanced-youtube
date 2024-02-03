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
  const whatIsSearched = useSelector((store) => store.what.context);
  const lolo = whatIsSearched.whatsearched;
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

    setVideos(response.items);
  };
  useEffect(() => {
    getSearchedVideos();
  }, [lolo]);

  const getSearchedVideos = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${lolo}&type=video&key=${GOOGLE_API_KEY}`
    );
    const response = await data.json();

    setVideos(response.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link
            to={"/watch?v=" + video.id}
            key={video.id}
            onClick={hideSidebarHandelero}
          >
            <VideoCard videos={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
