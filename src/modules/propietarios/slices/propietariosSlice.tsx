import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store';

import { Evento } from '../../../interface/Evento.interface';

// Define the initial state using that type
const initialState: Evento = {
    id: 0,
    date: '',
    location: '',
    name: '',
    time: ''
}

export const propieatriosSlice = createSlice({
    name: 'evento',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setEvent: (state, action: PayloadAction<Evento>) => {
            state.id = action.payload.id;
            state.date = action.payload.date;
            state.location = action.payload.location;
            state.name = action.payload.name;
            state.time = action.payload.time;
        },
        /* decrement: (state) => {
          state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        setEventByAmount: (state, action: PayloadAction<number>) => {
          state.value += action.payload
        }, */
    },
})

export const { setEvent } = propieatriosSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selecEvent = (state: RootState) => state.evento

export default propieatriosSlice.reducer