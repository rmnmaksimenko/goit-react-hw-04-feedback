import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
`;

export const ButtonListEl = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  border: 1px solid #262626;
  border-radius: 3px;
  padding: 1px 6px;
  &:hover {
    background-color: #678;
    color: #fff;
  }
  &:active {
    background-color: #456;
    color: #fff;
  }
`;
