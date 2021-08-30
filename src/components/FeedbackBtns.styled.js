import styled from "@emotion/styled";

export const Title = styled.h2`
  margin-left: 40px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-right: 8px;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #000c66;
  padding: 6px;
  border-style: dotted;
  &:hover {
    cursor: pointer;
    background-color: #b1d4e0;
    border-color: #b1d4e0;
    border-width: 2px;
  }
`;
