import ButtonDelete from "./button-delete";
import ButtonUpdate from "./button-update";

const TodoCard = (props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.text}</p>
        <div className="flex justify-end gap-3">
          <ButtonDelete />
          <ButtonUpdate />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
