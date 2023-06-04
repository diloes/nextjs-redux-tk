'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { increment, decrement } from '@/redux/features/counterSlice'
import { useGetUsersQuery } from '@/redux/services/userAPI'

const HomePage = () => {
  // Llamamos a los hooks que hemos creado para acceder al redux
  const count = useAppSelector((state) => state.counterReducer.value)
  const dispatch = useAppDispatch()

  const { data, isFetching, error, isLoading } = useGetUsersQuery()

  if (isLoading || isFetching) return <p>Cargando...</p>
  if (error) return <p>Error</p>

  return (
    <div className='p-4'>
      <div className='flex gap-2 my-12'>
        <button
          className='bg-green-500 px-3 py-2 rounded-md'
          onClick={() => dispatch(increment())}
        >
          Incrementar
        </button>
        <br />
        <button
          className='bg-red-500 px-3 py-2 rounded-md'
          onClick={() => dispatch(decrement())}
        >
          Reducir
        </button>

        <h1
          className={`text-center text-2xl ml-4 border-2 border-green-500 p-4 ${
            count < 0 ? 'border-red-500' : ''
          }`}
        >
          {count}
        </h1>
      </div>

      <div className='grid grid-cols-3 mt-4'>
        <div>
          <h3 className='font-bold'>Nombre</h3>
          <hr />
          {data?.map((user) => (
            <p key={user.name}>{user.name}</p>
          ))}
        </div>
        <div>
          <h3 className='font-bold'>Username</h3>
          <hr />
          {data?.map((user) => (
            <p key={user.username}>{user.username}</p>
          ))}
        </div>
        <div>
          <h3 className='font-bold'>Nombre</h3>
          <hr />
          {data?.map((user) => (
            <p key={user.email}>{user.email}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
