import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function useGetAccounts() {
    // sets up local state inside function
    // accounts = variable that stores state
    // setAccountsData function that updates the Accounts variable
    const [accounts, setAccountsData] = useState([])
    useEffect(()=>{
        // Makes request to URL:
        fetch('http://localhost:5000/SQbank')
            // formats the Json
            .then((data)=>{return data.json()})
            // .then (above) followed by a return passes the data down to the next .then as a parameter (below)
            .then((data)=>{
                // data is the array of objects in Json
                setAccountsData(data)
            })
    }, accounts)
    return accounts
}

function Accounts() {
    const accounts = useGetAccounts()
    const accountElements = accounts.map((account) =>
        <p>{account.name}: {account.balance}</p>
    );


    return (
        <div className="App">
            <h1> { accountElements }</h1>
        </div>
    )
}


ReactDOM.render(<Accounts />, document.getElementById('root'));


