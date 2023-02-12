import { useState } from "react";
import { AuthFormContainer, MenuAuthForm, MenuAuthInput } from "./AuthForm.styled";
import { AuthFormSubmitBtn } from "components/buttons/AuthFormSubmitBtn";
import { AuthFormToggleBtn } from "components/buttons/AuthFormToggleBtn";

export const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister(prevState => !prevState);
  }; 

  return (
    <AuthFormContainer>
      {isRegister
      ? <MenuAuthForm>
          <MenuAuthInput type="text" placeholder="email" />
          <MenuAuthInput type="text" placeholder="password" />
          <AuthFormSubmitBtn title='Log In' />
        </MenuAuthForm >
      : <MenuAuthForm>
          <MenuAuthInput type="text" placeholder="email" />
          <MenuAuthInput type="text" placeholder="password" />
          <MenuAuthInput type="text" placeholder="name" />
          <AuthFormSubmitBtn title='Register' />
        </MenuAuthForm>
      }
      <AuthFormToggleBtn toggleForm={toggleForm} isRegister={isRegister} />
    </AuthFormContainer>
  );
};