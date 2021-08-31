import React from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { checkTodo } from "redux/actions/todo";
import { todo } from "types";

interface TodoItemProps {
  todo: todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckChange = () => {
    console.log({ id: todo.id, isCheck: !todo.isCheck });
    const newStatus = { id: todo.id, isCheck: !todo.isCheck };
    dispatch(checkTodo(newStatus));
  };

  return (
    <Item key={todo.id}>
      <label className={todo.isCheck ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.isCheck}
          onChange={handleCheckChange}
        />
        {todo.content}
      </label>
      <div>
        <button className={"editBtn"}>수정</button>
        <button className={"removeBtn"}>삭제</button>
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

  input {
    margin-right: 8px;
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
