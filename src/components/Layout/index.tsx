import styled from "styled-components";
import { device } from "../../utils/styles/breakpoints";

type LayoutProps = {
  children: any;
  showFooter?: boolean;
  showHeader?: boolean;
  headerTitle?: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Body = styled.div`
  flex: 11;
  overflow: hidden;
  padding: 0 10% 0 10%;

  @media ${device.mobileM} {
    overflow-y: auto;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #0078d4;
  color: #ffff;
  font-size: 14px;
  margin-bottom: 10px;

  @media ${device.laptop} {
    font-size: inherit;
  }
`;

const Footer = styled.div`
  background-color: green;
  flex: 1;
`;

const Layout = (props: LayoutProps) => {
  const { children, showFooter, showHeader, headerTitle } = props;

  const renderHeader = () => {
    return (
      <Header>
        <h3>{headerTitle}</h3>
      </Header>
    );
  };

  return (
    <Container>
      {showHeader && renderHeader()}
      <Body>{children}</Body>
      {showFooter && <Footer>Footer</Footer>}
    </Container>
  );
};

export default Layout;
