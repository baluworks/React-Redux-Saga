
import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>

      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.00</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic color='green' size='tiny'>
                <Statistic.Label style={{ textAlign: 'left' }}>Incoming :</Statistic.Label>
                <Statistic.Value>1,500.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic color='red' size='tiny'>
                <Statistic.Label style={{ textAlign: 'left' }}>Expenses :</Statistic.Label>
                <Statistic.Value>1,500.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left' color='yellow'>Something.</Grid.Column>
            <Grid.Column width={3} textAlign='right' color='blue'>123.00</Grid.Column>
            <Grid.Column width={3} textAlign='right' color='grey'>
              <Icon name='edit'></Icon>
              <Icon name='trash'></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h3'>Add New Transaction</Header>
      <Form>
        <Form.Group>
          <Form.Input placeholder='New Tranaction' label='Description' width={12} icon='tags'></Form.Input>
          <Form.Input placeholder='100.00' label='Value' icon='dollar' iconPosition='left' width={4} ></Form.Input>
        </Form.Group>
      </Form>
      <Button.Group style={{ marginTop: 20 }}>
        <Button>Cancel</Button>
        <Button.Or />
        <Button color='blue'>Ok</Button>
      </Button.Group>
    </Container>
  );
}

export default App;
