import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import Navbar from "./Navbar";

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

function DisplayAccounts() {
    const accounts = useGetAccounts()
    const accountElements = accounts.map((account) =>
        <p>{account.name}: {account.balance}</p>
    );

    return (
        <div className="accounts">
            <Navbar></Navbar>
            <h1> { accountElements }</h1>
        </div>
    )
}

export default DisplayAccounts