import { createSlice } from '@reduxjs/toolkit'

// 1. Creamos una porción del estado global, en este caso el contador
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

// 2. Exportamos las acciones por sí solas para llamarlas más comodamente desde los componentes
export const { increment, decrement } = counterSlice.actions

// 3. Exportamos el slice para poder usarlo en los componentes con su value y sus acciones
export default counterSlice.reducer
