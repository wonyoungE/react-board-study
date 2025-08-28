/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import * as s from "./styles";

function BoardEdit() {
  const { boardId } = useParams();
  return <div>BoardEdit</div>;
}

export default BoardEdit;
