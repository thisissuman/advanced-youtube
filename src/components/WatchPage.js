import React from "react";
import { useSearchParams } from "react-router-dom";
import ButtonList from "./ButtonList";
import { useEffect, useState } from "react";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { hideSidebarHandeler } from "./utils/appSlice";

const WatchPage = () => {
  const [serarch] = useSearchParams();
  const searchedParam = serarch.get("v");
  const [desc, setDesc] = useState([]);
  /* const { localized, channelTitle } = desc?.items[0]?.snippet;  */
  const dispatch = useDispatch();
  useEffect(() => {
    getVideoDetails();
    dispatch(hideSidebarHandeler());
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        searchedParam +
        "&key=AIzaSyBJCZG0H60GCTh5wsCeWEMmpV9Dn3LelQI"
    );
    const response = await data.json();
    if (response) {
      setDesc(response);
    }
  };

  return desc.length == 0 ? (
    <h2>Some error occure</h2>
  ) : (
    <div className="flex w-full">
      <div className="mx-20 my-3 flex flex-col">
        <iframe
          className=" rounded-xl"
          width="650"
          height="375"
          src={"https://www.youtube.com/embed/" + searchedParam}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          autoPlay
        ></iframe>
        <h2 className="text-lg font-medium mb-2 mt-4">
          {desc?.items[0]?.snippet?.localized?.title}
        </h2>
        <div className="flex items-center justify-center mb-5">
          <div>
            <h3>{desc?.items[0]?.snippet?.channelTitle}</h3>
          </div>
          <button className="mx-3 mb-3 bg-slate-100 rounded-lg px-2 py-1 mt-5 cursor-pointer hover:bg-black hover:text-slate-50 font-normal">
            Subscribe
          </button>
          <button className="mx-3 mb-3 bg-slate-100 rounded-lg px-2 py-1 mt-5 cursor-pointer hover:bg-black hover:text-slate-50 font-normal">
            👍 6.2 M
          </button>
          <button className="mx-3 mb-3 bg-slate-100 rounded-lg px-2 py-1 mt-5 cursor-pointer hover:bg-black hover:text-slate-50 font-normal">
            👎
          </button>
          <button className="mx-2 mb-3 bg-slate-100 rounded-lg px-2 py-1 mt-5 cursor-pointer hover:bg-black hover:text-slate-50 font-normal">
            💦Share
          </button>
          <button className="mx-3 mb-3 bg-slate-100 rounded-lg px-2 py-1 mt-5 cursor-pointer hover:bg-black hover:text-slate-50 font-normal">
            ⏬Download
          </button>
        </div>
        <div>
          <CommentsContainer />
        </div>
      </div>

      <div className="mx-[-5rem]">
        <ButtonList />
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
