import { observer } from "mobx-react-lite";
import React from "react";
import likes from "../../store/likesStore";

const Comments = observer(() => {
  return (
    <table className="table">
      <tbody>
        {likes.comments.map((comment, index) => {
          return (
            <tr key={index}>
              <td className="table-td">{comment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

export default Comments;
