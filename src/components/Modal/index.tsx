import { ReactElement, useEffect } from "react";
import styled from "styled-components";

import { colors } from "../../utils/styles/colors";
import icon from "../../assets/icons/close.png";
import { device } from "../../utils/styles/breakpoints";

type ModalProps = {
  children: ReactElement;
  onClose: () => void;
};

const Container = styled.div`
  position: absolute;
  z-index: 1010;
  display: flex;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  background: ${colors.white};
  height: 100vh;
  width: 40em;
  margin: auto;
  padding: 26px 50px 10px 10px;


  @media ${device.mobileM} {
    padding: 26px 22px 0px 13px;
  }

`;

const ClosingContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 30px;
  cursor: pointer;
`;

const Modal = (props: ModalProps) => {
  const { children, onClose } = props;

  const disableScroll = () => {
    const app = document.getElementById("root") as HTMLDivElement;
    app.style.overflow = "hidden";
    return () => (app.style.overflow = "unset");
  };

  // @ts-ignore
  useEffect(disableScroll, []);

  return (
    <Container>
      <Content>
        <ClosingContainer>
          <img src={icon} alt="icon-close" onClick={() => onClose()} />
        </ClosingContainer>
        {children}
      </Content>
    </Container>
  );
};

export default Modal;
