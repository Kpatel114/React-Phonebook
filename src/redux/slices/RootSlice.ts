import {createSlice} from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        first: "First Name",
        last: "Last Name",
        email: "Email",
        phone_number: "Phone Number",
        address: "Address",
    }, 
    reducers: {
        // functions that say what are we allowed to do to the data
        // state
        // information from the website 
        // funciton that takes data as a parameter and does something

        // action is submitted somewhere - written to state.name
        chooseFirst: (state, action) => { state.first  = action.payload },
        chooseLast: (state, action) => { state.last  = action.payload }, 
        chooseEmail: (state, action) => { state.email  = action.payload },
        choosePhone: (state, action) => { state.phone_number  = action.payload },
        chooseAddress: (state, action) => { state.address  = action.payload },

    }

})

export const reducer = rootSlice.reducer;

export const { chooseFirst, chooseLast, chooseEmail, choosePhone, chooseAddress} = rootSlice.actions