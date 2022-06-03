import React from "react";
import likes from "../../store/likesStore";

const Buttons = () => {
  return (
    <div className="row">
      <button
        type="button"
        className="btn btn-light align-top btn-likes"
        onClick={() => likes.updateCount()}
      >
        <i className="fa fa-thumbs-o-up" />
        Like
      </button>
      <div className="col-sm">
        <button
          type="button"
          className="btn btn-light btn-comments"
          onClick={() => document.getElementById("comment").focus()}
        >
          <i className="fa fa-comment-o" />
          Comment
        </button>
      </div>
    </div>
  );
};

export default Buttons;
