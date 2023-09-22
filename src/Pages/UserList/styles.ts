import styled from 'styled-components';

export const TableBox = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const TableContainer = styled.div`
  margin: 5px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 10px;
  border-style: hidden;
  width: 100%;
`;

export const TableHeader = styled.th<{headersLength: any, height: any, colorText: string, positionHeader: string, border: string}>`
  border-style: none;
  margin: 0;
  padding: 0;
  width: calc(100% / ${(props) => props.headersLength});
  height: ${(props) => (props.height ? props.height : '40px')};

  .div-th {
    padding: 8px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: ${(props) => (props.color ? props.color : '#FF7300')};
    color: ${(props) => (props.colorText ? props.colorText : 'white')};
    text-align: ${(props) => props.positionHeader};
    border: ${(props) => (props.border ? props.border : '1px solid #FF7300')};
    border-color: ${(props) => (props.color ? props.color : '#FF7300')} !important;

    &.border-start-start {
      border-top-left-radius: 10px;
    }

    &.border-start-end {
      border-top-right-radius: 10px;
    }
  }
`;

export const TableRow = styled.tr<{height: any}>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : '40px')};
`;

export const TableCell = styled.td<{border: string, headersLength: any, positionCells:string}>`
  border-style: none;
  margin: 0;
  padding: 0;
  width: calc(100% / ${(props) => props.headersLength});
  height: ${(props) => (props.height ? props.height : '40px')};

  .div-td {
    padding: 8px;
    width: 100%;
    height: 100%;
    border: ${(props) => (props.border ? props.border : '1px solid #FF7300')};
    text-align: ${(props) => props.positionCells};
    background-color: ${(props) => ('transparent')};
    color: ${(props) => ('inherit')};

    &.border-end-start {
      border-bottom-left-radius: 10px;
    }

    &.border-end-end {
      border-bottom-right-radius: 10px;
    }
  }
`;

export const ContainerActions = styled.td`
  display: flex;
  align-items: center;
  height: 100%;

  .container-icon {
    height: 100%;
    margin: 5px;
    display: flex;
    align-items: center;

    .icon-add {
      background-color: ${(props) => '#33691E'};
    }

    .icon-subs {
      background-color: ${(props) => 'rgb(194, 8, 8)'};
    }
  }
`;

export const NoDataMessage = styled.div`
  font-size: 20px;
  color: ${(props) => '#090088'};
  text-align: center;
  border: 2px solid ${(props) => '#FF7300'};
  padding: 20px;
  border-radius: 10px;
`;

export const Paginator = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;

  h3 {
    margin: 0 5px;
  }

  .mat-icon {
    cursor: pointer;

    &.disabled {
      color: gray !important;
    }
  }
`;