import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 15px;
`;

export const ButtonList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
`;

export const ButtonListEl = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
