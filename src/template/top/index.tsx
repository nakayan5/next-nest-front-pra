import { TopContext } from '@/context/top';
import { FC, Fragment, memo, useContext } from 'react';
import { Grid, Card, Row, Text, Container } from '@nextui-org/react';

export const TopTemplate: FC = memo(() => {
  const { list } = useContext(TopContext);

  return (
    <Container sm={true} css={{ marginTop: 80 }}>
      <Grid.Container gap={2}>
        <Fragment>
          {list &&
            list.map((r, i) => (
              <Grid xs={6} key={i}>
                <Card>
                  <Row justify='center' align='center'>
                    <Text h6 size={15} css={{ m: 0 }}>
                      {r.title}
                    </Text>
                  </Row>
                  <Row justify='center' align='center'>
                    <Text h6 size={15} css={{ m: 0 }}>
                      {r.content}
                    </Text>
                  </Row>
                  <Row justify='center' align='center'>
                    <Text h6 size={15} css={{ m: 0 }}>
                      {r.viewCount}
                    </Text>
                  </Row>
                  <Row justify='center' align='center'>
                    <Text h6 size={15} css={{ m: 0 }}>
                      {r.published ? '公開' : '非公開'}
                    </Text>
                  </Row>
                </Card>
              </Grid>
            ))}
        </Fragment>
      </Grid.Container>
    </Container>
  );
});
