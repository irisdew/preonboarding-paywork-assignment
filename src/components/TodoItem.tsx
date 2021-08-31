import React, { useState, ChangeEvent } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { checkTodo, editTodo, removeTodo } from "redux/actions/todo";
import { todo, newContent, newStatus } from "types";

interface TodoItemProps {
  todo: todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(todo.content);

  const handleCheckChange = () => {
    const newStatus: newStatus = { id: todo.id, isCheck: !todo.isCheck };
    dispatch(checkTodo(newStatus));
  };

  const handleEditStart = () => {
    setEditMode(true);
  };

  const handleEditEnd = () => {
    const newContent: newContent = { id: todo.id, content: editContent };
    dispatch(editTodo(newContent));
    setEditMode(false);
  };

  const handleEditContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };

  const handleRemoveBtnClick = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <Item key={todo.id}>
      <label className={todo.isCheck ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.isCheck}
          onChange={handleCheckChange}
        />
        {editMode ? (
          <>
            <input
              type="text"
              value={editContent}
              onChange={handleEditContentChange}
            />
          </>
        ) : (
          todo.content
        )}
      </label>
      <div>
        {editMode ? (
          <button className={"editBtn"} onClick={handleEditEnd}>
            수정 완료
          </button>
        ) : (
          <button className={"editBtn"} onClick={handleEditStart}>
            수정
          </button>
        )}
        <button className={"removeBtn"} onClick={handleRemoveBtnClick}>
          삭제
        </button>
      </div>
    </Item>
  );
};

export default TodoItem;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 10px 0;
  padding: 10px;
  background-color: #eee;
  font-size: 14px;

  .complete {
    text-decoration: line-through;
  }

  input[type="checkbox"] {
    margin-right: 8px;
  }

  input[type="text"] {
    width: 150px;
  }

  button {
    font-size: 10px;
    margin: 0 2px;
    padding: 3px 5px;
    border-radius: 5px;
    color: white;
  }

  .editBtn {
    background-color: #66bb6a;
  }

  .removeBtn {
    background-color: #ef5350;
  }
`;
