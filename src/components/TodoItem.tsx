import React from "react";

interface TodoItemProps {
  todo: {
    id: string;
    content: string;
    isChecked: boolean;
    createdAt: Date;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li key={todo.id}>
      <label className={todo.isChecked ? "complete" : undefined}>
        <input type="checkbox" checked={todo.isChecked} />
        {todo.content}
      </label>
    </li>
  );
};

export default TodoItem;
