import { createAsyncThunk } from "@reduxjs/toolkit";


// Below is Async thunk action to add transaction on server/backend 
export const transactionSave = createAsyncThunk('transactionSave', async (transaction) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify(transaction),
        headers: { "content-type": "application/json" }
    });

    return res.json();


})

// below we creating async action to fetch the transaction from the server/backend 

export const fetchTransaction = createAsyncThunk('fetchTransaction', async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return res.json();
})



