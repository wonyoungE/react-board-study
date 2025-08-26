import { useParams } from "react-router-dom";
import * as s from "./styles";
import { useEffect } from "react";

/** @jsxImportSource @emotion/react */
function BoardDetail() {
  const { boardId } = useParams();

  useEffect(() => {}, []);

  return <div>BoardDetail</div>;
}

export default BoardDetail;
