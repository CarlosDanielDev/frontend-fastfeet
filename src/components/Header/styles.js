import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      &:nth-child(1) {
        margin-left: 30px;
      }
      margin-left: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const ItemLink = styled(NavLink)`
  font-weight: bold;
  color: #999999;
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #666;
    }

    button {
      display: block;
      color: #de3b3b;
      margin-top: 2px;
      font-size: 12px;
    }
  }
`;
