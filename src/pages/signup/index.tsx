import { ChangeEvent, memo } from 'react';
import { useTheme, Container, Card, Row, Text, Input, Spacer, Button } from '@nextui-org/react';
import { useState } from 'react';
import { useCallback } from 'react';
import { signupClient, TSignup } from 'src/api/signup';
import { SignupContextProvider } from '@/context/signup';

const Signup = memo(() => {
  const { theme } = useTheme();

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
      const res = await signupClient(input);
    } catch (err: any) {
      throw err;
    }
  }, []);

  return (
    <SignupContextProvider />
    // <Container css={{ marginTop: 80 }}>
    //   <Container xs={true}>
    //     <Card color={'default'} css={{ padding: 40 }}>
    //       <Row justify='center' align='center'>
    //         <Text h6 size={15} color={theme.colors.black.value} css={{ m: 0 }}>
    //           Signup
    //         </Text>
    //       </Row>
    //       <Spacer y={2.5} />
    //       <Row fluid={true}>
    //         <Input
    //           id={'2'}
    //           fullWidth={true}
    //           clearable
    //           bordered
    //           placeholder='Name'
    //           initialValue=''
    //           value={name}
    //           color={'primary'}
    //           onChange={onChangeName}
    //         />
    //       </Row>
    //       <Spacer y={2.5} />
    //       <Row fluid={true}>
    //         <Input
    //           id='2'
    //           fullWidth={true}
    //           clearable
    //           bordered
    //           placeholder='Email'
    //           initialValue=''
    //           value={email}
    //           color={'primary'}
    //           onChange={onChangeEmail}
    //         />
    //       </Row>
    //       <Spacer y={2.5} />
    //       <Row fluid={true} justify={'center'}>
    //         <Button
    //           type={'button'}
    //           color={'primary'}
    //           onClick={() =>
    //             onClickSend({
    //               name: name,
    //               email: email,
    //             })
    //           }
    //         >
    //           Send
    //         </Button>
    //       </Row>
    //     </Card>
    //   </Container>
    // </Container>
  );
});

export default Signup;
