import styled from "styled-components";

type LayoutProps = {
  children: any;
};

const Container = styled.div``;

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return <Container>Layout Page</Container>;
};

export default Layout;
