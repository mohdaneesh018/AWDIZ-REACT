import { useEffect, useState } from "react";

const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditindex] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("todos")) || [];
    if (existingData && text.trim()) {
      const updatedTodo = [...existingData, text];
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      setTodos(updatedTodo);
      setText("");
    }
  };

  const handleDelete = (id) => {
    const updatedTodo = todos.filter((_, index) => index != id);
    localStorage.setItem("todos", JSON.stringify(updatedTodo));
    setTodos(updatedTodo);
    setText("");
    setEditindex("");
  };

  const handleEdit = (id) => {
    setEditindex(id);
    setText(todos[id]);
  };

  const handleUpdate = () => {
    const updatedTodo = [...todos];
    if (text.trim()) {
      updatedTodo[editIndex] = text;
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      setTodos(updatedTodo);
      setText("");
      setEditindex("");
    }
  };

  const handleCancel = () => {
    setEditindex("");
    setText("");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    setTodos(data);
  }, []);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {editIndex !== "" && editIndex !== undefined ? (
            <>
              <button type="button" onClick={handleUpdate}>
                Update
              </button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <button type="submit">Submit</button>
          )}
        </form>
      </div>

      <div>
        {todos &&
          todos.map((todo, index) => (
            <div key={index}>
              <h2>{todo}</h2>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Todos;
