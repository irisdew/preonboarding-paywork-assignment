import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { loadTodos } from "redux/actions/todo";
import { rootState } from "redux/reducers";
import TodoItem from "components/TodoItem";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const todos = useSelector((state: rootState) => state.todos);

  return (
    <Container>
      <Header alt="todo-logo" src="/logo.png" />
      <form>
        <Input type="text" placeholder="할 일을 입력해주세요" />
        <Button type="submit">+</Button>
      </form>
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
  box-sizing: border-box;
`;

const Header = styled.img`
  width: 300px;
  margin: 30px 0;
`;

const Input = styled.input`
  width: 200px;
  padding: 8px;
  border-bottom: #202040 2px solid;
`;

const Button = styled.button`
  width: 50px;
  padding: 8px;
  background-color: #202040;
  color: white;
`;

const TodoList = styled.div`
  width: 250px;
  margin-top: 20px;
  list-style: none;
`;
