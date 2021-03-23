import React from 'react';
import styled from 'styled-components';

const HistoryTableWrapper = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const Title = styled.div`
  background: #8b3eeb;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
`;

const HistoryTable = () => {
  return (
    <HistoryTableWrapper>
      <Title>Comcom History</Title>
      <Content />
    </HistoryTableWrapper>
  );
};

export default HistoryTable;