'use client';

import { useState, useEffect } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=5'
      );
      const data = await response.json();
      setTodos(data);
    }

    fetchTodos();
  }, []);

  return (
    <ul className="list-disc pl-5">
      {todos.map((todo) => (
        <li key={todo.id} className="mb-2">
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
