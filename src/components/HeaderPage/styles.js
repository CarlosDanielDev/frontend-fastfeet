import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  flex-direction: column;
  width: 100%;

  div {
    margin-top: 30px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    input {
      border: 1px solid #dddddd;
      height: 36px;
      width: 237px;
      border-radius: 4px;
      text-align: center;

      &::placeholder {
        color: #999999;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36px;
      background: #7d40e7;
      padding: 10px;
      color: #fff;
      font-weight: bold;
      width: 142px;
      border-radius: 4px;
      text-align: center;

      svg {
        margin-right: 5px;
        width: 16px;
        height: 16px;
        color: #fff;
      }
    }
  }
`;
