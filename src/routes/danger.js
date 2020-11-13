import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Dang = styled.div`
  color: red;
  display: inline;
`;

const Safe = styled.div`
  margin-top: 100px;
  color: blue;
  display: inline;
`;

const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
`;

export function Danger() {
  return (
    <Wrapper>
      <Title>
        가장 <Dang>위험한</Dang> 운전자
      </Title>
      <h3>
        금요일 오후6시-오후8시 경 송파구의 단일로에서 대형 차를 운전하는 65세
        이상의 운전자
      </h3>
      <Title>
        가장 <Safe>안전한</Safe> 운전자
      </Title>
      <h3>
        일요일 새벽2시-새벽4시 경 도봉구의 고가도로에서 중형 차를 운전하는
        21세-30세의 운전자
      </h3>
    </Wrapper>
  );
}

export default Danger;
