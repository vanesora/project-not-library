import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px ) {
    flex-direction: column
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button{
    
    width: 100%;

  }
`;
