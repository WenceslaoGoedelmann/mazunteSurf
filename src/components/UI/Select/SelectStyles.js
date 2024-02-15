import styled from 'styled-components';


export const SelectedStyled = styled.select`
  background-color: var(--gray-bg);
  outline: none;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  border-radius: 8px;
  height: 40px;
  padding: 0.5rem 1rem;
  color: white;
  width: 70%;
  margin-top: 1rem;
`;