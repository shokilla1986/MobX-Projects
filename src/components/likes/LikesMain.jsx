import { observer } from "mobx-react-lite";
import React from "react";
import Card from "./Card";
import Comments from "./Comments";
import Form from "./Form";
import "./likes.css";

const LikesMain = observer(() => {
  return (
    <div>
      <Card />
      <Form />
      <Comments />
    </div>
  );
});

export default LikesMain;
