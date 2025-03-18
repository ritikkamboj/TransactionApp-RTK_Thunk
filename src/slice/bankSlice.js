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