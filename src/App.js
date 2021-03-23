import React from 'react';
import HistoryTable from './components/HistoryTable';
import HistoryInput from './components/HistoryInput';

const App = () => {
  return (
    <HistoryTable>
      <HistoryInput />
    </HistoryTable>
  );
};

export default App;
