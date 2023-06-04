import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface User {
  id: number
  name: string
  email: string
  username: string
}

// Creamos una instancia de la API con dos endpoints: getUsers y getUserById
export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users' // https://jsonplaceholder.typicode.com/users
    }),
    getUserById: builder.query<User[], { id: number }>({
      query: ({ id }) => `users/${id}` // https://jsonplaceholder.typicode.com/users/:id
    })
  })
}) // Esta función nos crea dos hooks: useGetUsersQuery y useGetUserByIdQuery

// Exportamos los hooks que nos permitirán llamar a los endpoints de la API
export const { useGetUsersQuery, useGetUserByIdQuery } = userAPI

/**
 * NOTAS:
 * - El endpoint getUsers devuelve un array de usuarios y el endpoint getUserById devuelve un usuario
 * - getUsers: builder.query<User[], void> -> el primer parametro "User[]" es el tipo de dato que devuelve la query,
 *  el segundo parametro "void" es el tipo de dato que recibe la query.
 */
