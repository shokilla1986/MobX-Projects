import { observer } from "mobx-react-lite";
import React from "react";
import likesStore from "../../store/likesStore";
import Buttons from "./Buttons";
import Count from "./Count";

const Card = observer(() => {
  return (
    <div className="card">
      <div className="card card-top">
        <img src={likesStore.imageUrl} className="card-img-top" alt="" />
        <div className="card-buttons">
          <button
            className="btn btn-light"
            onClick={() => {
              likesStore.fetchImage("decrement");
            }}
          >
            <i className="fa fa-chevron-left">{"\u003C"}</i>
          </button>
          <button
            className="btn btn-light"
            onClick={() => {
              likesStore.fetchImage("increment");
            }}
          >
            <i className="fa fa-chevron-right">{"\u003E"}</i>
          </button>
        </div>
        <Count />
      </div>
      <div className="card-body">
        <Buttons />
      </div>
    </div>
  );
});

export default Card;
