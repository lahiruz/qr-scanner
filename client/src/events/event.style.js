import styled from 'styled-components';

export const EventWrapper =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  .processing {
    padding: 20px 0;
  }
  .event__name {
    color: #61dafb;
    font-size: 36px;
  }
  .period strong {
    color: #61dafb;
  }
  .no-data {
    padding: 20px 0;
  }
`;

export const EventForm = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > input {
    width: 60%;
    outline: none;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 15px;
  }
`;

export const Btn = styled.button`
  padding: 5px 10px;
  min-width: 90px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    backgroud-color: #000;
  }
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
