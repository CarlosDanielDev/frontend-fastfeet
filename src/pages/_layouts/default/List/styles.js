import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  flex-direction: column;
  align-items: center;

  table {
    width: 100%;
    border-radius: 4px;
    margin-top: 10px;
    border-spacing: 0;
    tbody {
      background: #fff;
    }
    tr {
      line-height: 24px;
      font-size: 16px;

      th {
        margin-left: 10px;
        color: #444444;
        font-weight: bold;
        text-align: left;
      }

      td {
        margin-left: 5px;
        font-size: 16px;
        color: #666666;
        text-align: left;
        border-top: 21px solid #f5f5f5;
        padding: 10px 10px 10px 5px;
      }
    }
  }
`;
