import React, { useState } from "react";
import { dummyData } from "./dummyData";
import CommentCard from "./comment-card";

const AllComments = () => {
  const [data, setData] = useState(dummyData);

  return (
    <center className="mt5">
      {data?.comments?.map((dto, idx) => (
        <CommentCard dto={dto} />
      ))}
    </center>
  );
};

export default AllComments;
