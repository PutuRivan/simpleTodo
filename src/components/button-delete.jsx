import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const ButtonDelete = () => {
  return (
    <div className="card-actions justify-end">
      <button className="btn btn-error" onClick={() => alert("Delete")}>
        <FaRegTrashCan />
        Delete
      </button>
    </div>
  );
};

export default ButtonDelete;
