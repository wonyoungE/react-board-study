/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";

function Write() {
  const [textInput, setTextInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const onClickHandler = () => {
    // api요청
  };
  return (
    <div css={s.container}>
      <input type="text" placeholder="제목" css={s.title} />
      <textarea
        name=""
        id=""
        placeholder="내용을 입력해주세요."
        css={s.content}
      ></textarea>
      <button onClick={onClickHandler} css={s.addBtn}>
        등록하기
      </button>
    </div>
  );
}

export default Write;
