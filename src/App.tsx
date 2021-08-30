import React from "react";
import styled from "@emotion/styled";

function App() {
  return (
    <Container>
      <Header alt="todo-logo" src="/logo.png" />
      <form>
        <Input type="text" placeholder="할 일을 입력해주세요" />
        <Button type="submit">+</Button>
      </form>
      <TodoList>
        <TodoItem></TodoItem>
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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

const TodoList = styled.div``;

const TodoItem = styled.div``;