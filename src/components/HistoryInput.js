import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const HistoryForm = styled.form`
  display: flex;
  background: #495057;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;

const HistoryInput = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(e => {
    // onInsert(value);
    setValue('');
    e.preventDefault();
  }, [value]);

  return (
    <HistoryForm onSubmit={onSubmit}>
      <Input placeholder="What We Have Done So Far."
        value={value}
        onChange={onChange} />
        <Button type="submit" />
    </HistoryForm>
  );
};

export default HistoryInput;
