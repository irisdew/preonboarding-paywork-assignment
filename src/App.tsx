import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { loadTodos, addTodo } from "redux/actions/todo";
import { rootState } from "redux/reducers";
import TodoItem from "components/TodoItem";

function App() {
  const dispatch = useDispatch();

  const [nextId, setNextId] = useState(4);
  const [content, setContent] = useState("");

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const todos = useSelector((state: rootState) => state.todos);

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const now = new Date();
    const newTodo = {
      id: String(nextId),
      content,
      isCheck: false,
      createdAt: now,
    };
    dispatch(addTodo(newTodo));
    setContent("");
    setNextId((prev) => prev + 1);
  };

  return (
    <Container>
      <Header alt="todo-logo" src="/logo.png" />
      <TodoForm>
        <Input
          type="text"
          placeholder="할 일을 입력해주세요"
          value={content}
          onChange={handleContentChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          +
        </Button>
      </TodoForm>
      <TodoList>
        {todos && todos.map((todo) => <TodoItem todo={todo} />)}
      </TodoList>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  min-height: 90vh;
  margin: 20px auto;
`;

const Header = styled.img`
  width: 400px;
  margin: 10px 0 30px;
`;

const TodoForm = styled.form`
  display: flex;
`;

const Input = styled.input`
  width: 250px;
  padding: 8px;
  border-bottom: #202040 2px solid;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  background-color: #202040;
  color: white;
  font-size: 16px;
  font-weight: 700; ;
`;

const TodoList = styled.div`
  width: 300px;
  margin-top: 20px;
`;
