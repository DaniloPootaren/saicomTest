import { useRef } from "react";
import styled from "styled-components";

type InfiniteScrollerProps = {
  children: any;
  callback: () => void;
};

const InfiniteScrollerComponent = styled.div`
  height: 60%;
  overflow-y: auto;
`;

const InfiniteScroller = (props: InfiniteScrollerProps) => {
  const { children, callback } = props;
  const listInnerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.round(scrollTop + clientHeight) === scrollHeight) {
        callback();
      }
    }
  };
  return (
    <InfiniteScrollerComponent ref={listInnerRef} onScroll={onScroll}>
      {children}
    </InfiniteScrollerComponent>
  );
};

export default InfiniteScroller;
