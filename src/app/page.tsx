import TodoList from '@/components/TodoList';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoList />
    </div>
  );
}