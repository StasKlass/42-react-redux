import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FeedbackItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const FeedbackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 10px;
`;

export const ResetButton = styled.button`
  margin-top: 10px;
  padding: 5px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
