import React from "react";
import { observer } from "mobx-react-lite";
import likes from "../../store/likesStore";

const Count = observer(() => {
  return (
    <div className="row reactions-count">
      <div className="col-sm" align="left">
        <i className="fa fa-thumbs-up" />

        {likes.likesCount}
      </div>
      <div className="col-sm" align="right">
        {likes.commentsCount} comments
      </div>
    </div>
  );
});

export default Count;
