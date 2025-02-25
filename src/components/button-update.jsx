import React from "react";
import { FaPenToSquare } from "react-icons/fa6";

const ButtonUpdate = () => {
  const handleUpdate = () => alert("Update");
  return (
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleUpdate}>
        <FaPenToSquare />
        Update
      </button>
    </div>
  );
};

export default ButtonUpdate;
