import React, { useState } from 'react';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [data, setData] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const handleInput = buttonName => {
    try {
      setData(calculate(data, buttonName));
    } catch (error) {
      setData({
        total: data.total,
        next: error.message,
        operation: data.operation,
      });
    }
  };

  return (
    <>
      <Display result={data.next ? data.next : data.total} />
      <ButtonPanel data={data} inputHandler={handleInput} />
    </>
  );
};

export default App;
