
import { Container, } from 'semantic-ui-react';
import './App.css';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import { useEffect, useState } from 'react';
import ModelEdit from "./components/ModelEdit";
function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryID] = useState();
  const [balance, setBalance] = useState(0);
  const [expenses, setExponses] = useState(0);
  const [income, setIncome] = useState(0);
  function deleteEntry(id) {
    var remainingEntries = entries.filter((entry) => entry.id !== id)
    setEntries(remainingEntries);
    console.log(id);
  }
  function addEntry() {
    var result = entries.concat({
      id: entries.length + 1,
      description,
      value, isExpense
    });
    setEntries(result);
  }
  function editEntry(id) {

    var entry = entries.find((entry) => entry.id === id);
    setEntryID(entry.id);
    setValue(entry.value);
    setIsExpense(entry.isExpense);
    setDescription(entry.description);

    setIsOpen(true);

    console.log(`ID:${id} ${entry}`);

  }
  function resetData() {
    setDescription('');
    setValue(0);
    setIsExpense(false)
  }
  useEffect(() => {

    if (!isOpen && entryId) {
      var newEntries = entries.map((entry) => {
        if (entry.id === entryId) {
          return {
            ...entry, description, id: entryId, value, isExpense
          }
        }
        return entry;
      });
      console.log(newEntries);
      setEntries(newEntries);
      resetData();
    }

  }, [isOpen]);

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
        deleteEntry={deleteEntry}
        editEntry={editEntry} />

      <MainHeader title='Add New Transaction' type='h3' />

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
        setValue={setValue}
        resetData={resetData} />

      <ModelEdit isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
        setValue={setValue} />

    </Container>
  );
}

export default App;
var initialEntries = [

]