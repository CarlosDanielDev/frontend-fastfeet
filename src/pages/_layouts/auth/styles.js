import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 415px;
  text-align: center;

  form {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    img {
      width: 200px;
      height: 50px;
      align-self: center;
      padding: 5px;
      margin-bottom: 30px;
    }

    input {
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid #eee;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${darken(0.03, '#555')};
      margin: 0 0 10px;

      &::placeholder {
        color: ${darken(0.03, '#999')};
      }
    }

    span {
      color: #f00;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }

    a {
      color: ${darken(0.03, '#888')};
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
