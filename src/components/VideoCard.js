import React from "react";
import { useSelector } from "react-redux";
const VideoCard = ({ videos,id }) => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const { statistics } = videos;
  const { thumbnails, title, channelTitle,publishedAt } = videos?.snippet;
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  
  const givenDate = new Date(publishedAt);
  const todaysDate = new Date();

  const diffInTime = todaysDate.getTime() - givenDate.getTime();
  const diffInDays = diffInTime / (1000 * 3600 * 24);
  const diffInDayss = diffInDays.toFixed();

  return (
    <div className={`mt-5  ml-5 w-30 p-5 ${isMenuOpen ? '' : 'scale-110'}`}>
    <img
        className="h-auto object-cover mb-5 rounded-lg"
        src={thumbnails?.medium?.url}
        alt=""
      />
      <h2 className="text-md font-bold mb-2 w-30 max-w-xs">
        {title}
      </h2>
      <h3 className="text-lg font-light mb-2">
        {channelTitle}
      </h3>
      <span className="text-base font-light mb-2">
        {kFormatter(statistics?.viewCount)}
      </span>
        &nbsp; .
        &nbsp; 
      <span className="text-sm font-light mb-2">{diffInDayss} days ago</span>
    </div>
  );
};

export default VideoCard;
