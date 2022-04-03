import { signupClient, TSignup } from '@/api/signup';
import { SignupTemplate } from '@/template/signup';
import React, { ChangeEvent, createContext, useCallback, useState } from 'react';

export const SignupContext = createContext(null);

export const SignupContextProvider = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const onClickSend = useCallback(async (input: TSignup) => {
    try {
      await signupClient(input);
    } catch (err: any) {
      throw err;
    }
  }, []);

  return (
    <SignupContext.Provider value={{ name, email, onChangeName, onChangeEmail, onClickSend }}>
      <SignupTemplate />
    </SignupContext.Provider>
  );
};
