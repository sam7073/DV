import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Car } from "./routes/car";
import { Age } from "./routes/age";
import { Road } from "./routes/road";
import { Time } from "./routes/time";
import Card from "./components/Card";
import styled from "styled-components";
import { Button } from "./components/Buttons";

const Wrapper = styled.div`
  width: 1200px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Card width="200px" height="800px" fd="column">
          <Link to="/car">
            <Button>car</Button>
          </Link>
          <Link to="/age">
            <Button>age</Button>
          </Link>
          <Link to="/road">
            <Button>road</Button>
          </Link>
          <Link to="/time">
            <Button>time</Button>
          </Link>
        </Card>
        <Card width="900px" height="800px" margin_left="100px">
          <Route path="/car">
            <Car></Car>
          </Route>
          <Route path="/age">
            <Age></Age>
          </Route>
          <Route path="/road">
            <Road></Road>
          </Route>
          <Route path="/time">
            <Time></Time>
          </Route>
        </Card>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
