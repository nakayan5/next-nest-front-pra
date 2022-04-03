import { memo, useContext } from 'react';
import { useTheme, Container, Card, Row, Text, Input, Spacer, Button } from '@nextui-org/react';
import { SignupContext, SignupContextProvider } from '@/context/signup';

export const SignupTemplate = memo(() => {
  const { theme } = useTheme();

  const { name, email, onChangeEmail, onChangeName, onClickSend } = useContext(SignupContext);

  return (
    <Container css={{ marginTop: 80 }}>
      <Container xs={true}>
        <Card color={'default'} css={{ padding: 40 }}>
          <Row justify='center' align='center'>
            <Text h6 size={15} color={theme.colors.black.value} css={{ m: 0 }}>
              Signup
            </Text>
          </Row>
          <Spacer y={2.5} />
          <Row fluid={true}>
            <Input
              id={'2'}
              fullWidth={true}
              clearable
              bordered
              placeholder='Name'
              initialValue=''
              value={name}
              color={'primary'}
              onChange={onChangeName}
            />
          </Row>
          <Spacer y={2.5} />
          <Row fluid={true}>
            <Input
              id='2'
              fullWidth={true}
              clearable
              bordered
              placeholder='Email'
              initialValue=''
              value={email}
              color={'primary'}
              onChange={onChangeEmail}
            />
          </Row>
          <Spacer y={2.5} />
          <Row fluid={true} justify={'center'}>
            <Button
              type={'button'}
              color={'primary'}
              onClick={() =>
                onClickSend({
                  name: name,
                  email: email,
                })
              }
            >
              Send
            </Button>
          </Row>
        </Card>
      </Container>
    </Container>
  );
});
