import { observer } from "mobx-react-lite";
import React, { useRef, useState } from "react";
import likes from "../../store/likesStore";

const Form = observer(() => {
  const [value, setValue] = useState("");
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    likes.postComment(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id={"comment"}
        className="form-control"
        placeholder={"Write a comment ..."}
        value={value}
        onChange={(e) => handleChange(e)}
        ref={ref}
      />
    </form>
  );
});

export default Form;
