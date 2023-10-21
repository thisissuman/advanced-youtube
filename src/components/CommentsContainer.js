import React from "react";
import Comments from "./Comments";
const arryaofcomments = [
  {
    name: "User1",
    text: "This is the first-level comment.",
    reply: [
      {
        name: "User2",
        text: "Reply to first-level comment.",
        reply: [
          {
            name: "User1",
            text: "Reply to second-level comment.",
            reply: [
              {
                name: "User2",
                text: "Reply to third-level comment.",
                reply:[]
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "User3",
    text: "Another first-level comment.",
    reply: [
      {
        name: "User2",
        text: "Reply to third-level comment.",
        reply:[{
          name: "User1",
          text: "Reply to second-level comment.",
          reply: [
            {
              name: "User2",
              text: "Reply to third-level comment.",
              reply:[]
            },
          ],
        },]
      },
    ],
  },
];
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-9 ml-5 border-l-4">
        <CommentList comments={comment.reply} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={arryaofcomments} />
    </div>
  );
};

export default CommentsContainer;
