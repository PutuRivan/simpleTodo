import TodoCard from "./components/todo-card";

function App() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <TodoCard
        title="Todo Card!"
        text="Description"
      />
    </div>
  );
}

export default App;
