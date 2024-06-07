import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
        setFilteredTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todos: ", error);
      });
  }, []);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTodos.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Todos List</h2>
      <ul>
        {currentItems.map((todo) => (
          <li key={todo.id} className="flex items-center py-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {}}
              className="mr-2"
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredTodos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default TodosList;
