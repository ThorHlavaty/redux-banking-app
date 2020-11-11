
import './App.css';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import Accounts from './components/Accounts';

function App() {
  return (
    <Container>
    <Segment vertical textAlign="center">
      <Header as="h1" textAlign='center'> Smells Fargo</Header>
      <Grid columns='2'>
        <Grid.Row>
          <Grid.Column>
            <Accounts title="Checking" id="checking"/>
          </Grid.Column>
          <Grid.Column>
            <Accounts title="Savings" id="savings"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </Container>
  );
}

export default App;
