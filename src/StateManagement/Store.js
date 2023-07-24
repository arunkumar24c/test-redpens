import { configureStore, createSlice } from "@reduxjs/toolkit"


const InitialStateOfFormModal = {value: {ModalState: false}};

const ModalSlice = createSlice({
    name:"Modal",
    initialState: InitialStateOfFormModal,
    reducers:{
        Trigger:(state, action) =>{
            state.value = action.payload
        }
    }
})

export const {Trigger} = ModalSlice.actions;

export const store = configureStore({
    reducer:{
        Modal: ModalSlice.reducer
    }
})