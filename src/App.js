import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import styled from "styled-components";

import { Car } from "./routes/car";
import { Age } from "./routes/age";
import { Road } from "./routes/road";
import { Time } from "./routes/time";
import { Day } from "./routes/day";
import { Location } from "./routes/location";
import { Danger } from "./routes/danger";

import { Card } from "./components/Card";
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
      <BrowserRouter basename="/DV">
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
          <Link to="/day">
            <Button>day</Button>
          </Link>
          <Link to="/time">
            <Button>time</Button>
          </Link>
          <Link to="/location">
            <Button>location</Button>
          </Link>
          <Link to="/danger">
            <Button primary>risk</Button>
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
          <Route path="/day">
            <Day></Day>
          </Route>
          <Route path="/location">
            <Location></Location>
          </Route>
          <Route path="/time">
            <Time></Time>
          </Route>
          <Route path="/danger">
            <Danger></Danger>
          </Route>
        </Card>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
