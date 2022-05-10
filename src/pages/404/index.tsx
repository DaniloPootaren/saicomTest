import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Not_Found_Page = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <h1>Sorry Page not found</h1>
        <Button label="Home" onClick={handleBackHome} />
      </Wrapper>
    </Container>
  );
};

export default Not_Found_Page;
