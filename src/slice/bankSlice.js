import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


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

// creating the slice 

const bankSlice = createSlice({
    name: "bank",
    initialState: {
        balance: 1000,
        transactions: [],
        isError: null,
        isLoading: false
    },
    reducers: {
        deposit: (state, action) => {
            state.balance += action.payload

        },
        withdrawn: (state, action) => {
            state.balance -= action.payload;

        }
    },
    extraReducers: (builder) => {
        builder.addCase(transactionSave.fulfilled, (state, action) => {
            state.isLoading = false, state.transactions.push(action.payload)
        })
        builder.addCase(transactionSave.pending, (state, action) => {
            state.isLoading = true, state.isError = null
        })
        builder.addCase(transactionSave.rejected, (state, action) => {
            state.isLoading = false, state.isError = "There is some Error in fetching the data !"

        })
        builder.addCase(fetchTransaction.pending, (state, action) => {
            state.isLoading = true, state.isError = null
        })
        builder.addCase(fetchTransaction.rejected, (state, action) => {
            state.isError = "There is some Error in fetching the data !", state.isLoading = false
        })
        builder.addCase(fetchTransaction.fulfilled, (state, action) => {
            state.isLoading = false, state.transactions = action.payload
        })

    }
})


export default bankSlice.reducers;

export const { withdrawn, deposit } = bankSlice.actions;

