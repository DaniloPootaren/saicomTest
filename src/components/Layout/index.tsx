import styled from "styled-components";
import {device} from "../../utils/styles/breakpoints"

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
`;

const Body = styled.div`
  background-color: red;
  flex: 11;
  overflow-y: scroll;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 45px;
  background-color: #0078D4;
  color: #ffff;
  font-size: 14px;

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
    return <Header><h3>{headerTitle}</h3></Header>
  }

  return (
    <Container>
      {showHeader && renderHeader()}
      <Body>Body</Body>
      {showFooter && <Footer>Footer</Footer>}
    </Container>
  );
};

export default Layout;
