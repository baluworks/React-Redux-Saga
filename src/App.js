
import { Container, } from 'semantic-ui-react';
import './App.css';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import { useEffect, useState } from 'react';
import ModelEdit from "./components/ModelEdit";
import { addEntryRedux, removeEntryRedux } from './actions/entries.action';
import { useSelector } from 'react-redux';
function App() {
  // const [entries, // setEntries] = useState(initialEntries);
  // const [description, setDescription] = useState('');
  // const [value, setValue] = useState(0);
  // const [isExpense, setIsExpense] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const [entryId, setEntryID] = useState();
  const [balance, setBalance] = useState(0);
  const [expenses, setExponses] = useState(0);
  const [income, setIncome] = useState(0);
  const [entry, setEntry] = useState();

  const entries = useSelector((state) => state.entries)
  const { isOpen, id } = useSelector((state) => state.models);



  useEffect(() => {
    const newentry = entries.find((entry) => id == entry.id);
    setEntry(newentry);
  }, [isOpen, id]);

  useEffect(() => {
    var totalIncome = 0;
    var totalExpense = 0;
    entries.length && entries.map((entry) => {
      return entry.isExpense ? totalExpense += Number(entry.value) : totalIncome += Number(entry.value);
    });
    setIncome(totalIncome);
    setExponses(totalExpense);
    var balance = totalIncome - totalExpense;
    setBalance(balance);
  }, [entries]);
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
var initialEntries = [

]