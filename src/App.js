
import ModelEdit from "./components/ModelEdit";
import { useDispatch, useSelector } from 'react-redux';
import { Container, } from 'semantic-ui-react';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import useExpenditure from './hooks/useAppExpenditure';
import './App.css';
import { useEffect, useState } from "react";
import { getAllEntries } from "./actions/entries.action";
import { NewProvider, themes } from "./context";
function App() {
  const entries = useSelector((state) => state.entries)
  const { isOpen, id } = useSelector((state) => state.models);
  const { balance, expenses, income, entry } = useExpenditure(isOpen, entries, id);
  const dispatcher = useDispatch();
  const [theme, setTheme] = useState(themes.dark)
  useEffect(() => {
    dispatcher(getAllEntries());
    dispatcher(getAllEntries());
  }, [dispatcher]);
  const ChangeThemeHandler = () => {
    setTheme((theme === themes.light) ? themes.dark : themes.light);
  }
  return (
    <Container>
      <NewProvider theme={theme}>
        <MainHeader title='New Budget' changeHandler={ChangeThemeHandler} />
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
      </NewProvider>
    </Container>
  );
}

export default App;
// var initialEntries = [

// ]