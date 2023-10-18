import React from "react";
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
  },
];

const Comments = () => {
  return <div data={arryaofcomments[0]}>Comments</div>;
};

export default Comments;
