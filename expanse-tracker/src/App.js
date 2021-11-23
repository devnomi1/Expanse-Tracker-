import React from 'react'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpanses from './components/IncomeExpanses'
import TransactionList from './components/TransactionList'
import { GlobalProvider } from './context/GlobalState'

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpanses />
                <TransactionList />
                <AddTransaction/>
            </div>
        </GlobalProvider>
    )
}

export default App
