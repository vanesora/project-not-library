import React, { FunctionComponent, useEffect, useState } from "react";
import { FormContainer, ItemContainer, LoginContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (value: any) => {
    navigate('/');
  };

  return (
    <LoginContainer>
      <FormContainer>
        <ItemContainer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </ItemContainer>
        <ItemContainer style={{maxWidth: "300px"}}>
          
        </ItemContainer>
      </FormContainer>
    </LoginContainer>
  );
}
