
import ModelEdit from "./components/ModelEdit";
import { useSelector } from 'react-redux';
import { Container, } from 'semantic-ui-react';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import useExpenditure from './hooks/useAppExpenditure';

import './App.css';

function App() {

  const entries = useSelector((state) => state.entries)
  const { isOpen, id } = useSelector((state) => state.models);
  const { balance, expenses, income, entry } = useExpenditure(isOpen, entries, id);

  return (
    <Container>

      <MainHeader title='New Budget' />

      <DisplayBalance
        title='Your Balance'
        value={`$ ${balance}`}
        color='black'
        size='small' />
      <DisplayBalances expenses={expenses} income={income} />

      <MainHeader
        title='History'
        type='h3' />

      <EntryLines
        entries={entries}
      />

      <MainHeader title='Add New Transaction' type='h3' />
      <NewEntryForm />
      <ModelEdit isOpen={isOpen} {...entry} />

    </Container>
  );
}

export default App;
// var initialEntries = [

// ]