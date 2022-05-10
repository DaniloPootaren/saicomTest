import { Oval } from "react-loader-spinner";
import styled from "styled-components";

import { colors } from "../../utils/styles/colors";

const Container = styled.div`
  position: absolute;
  z-index: 20000;
  display: flex;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

const LoaderContainer = styled.div`
  margin: auto;
`;

const Loader = () => {
  return (
    <Container>
      <LoaderContainer>
        <Oval
          ariaLabel="loading-indicator"
          height={50}
          width={50}
          strokeWidth={5}
          color={colors.water_blue}
          secondaryColor={colors.white}
        />
      </LoaderContainer>
    </Container>
  );
};

export default Loader;
