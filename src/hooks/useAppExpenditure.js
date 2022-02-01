import { useEffect, useState } from "react";

function useExpenditure(isOpen, entries, id) {

    const [balance, setBalance] = useState(0);
    const [expenses, setExponses] = useState(0);
    const [income, setIncome] = useState(0);
    const [entry, setEntry] = useState({});

    useEffect(() => {
        const newentry = entries.find((entry) => id === entry.id);
        setEntry(newentry);
    }, [isOpen, id, entries]);

    useEffect(() => {
        var totalIncome = 0;
        var totalExpense = 0;
        entries.length && entries.map((entry) => {
            return entry.isExpense
                ? totalExpense += Number(entry.value)
                : totalIncome += Number(entry.value);
        });
        setIncome(totalIncome);
        setExponses(totalExpense);
        setBalance(totalIncome - totalExpense);
    }, [entries]);

    return { balance, expenses, income, entry }
}

export default useExpenditure;