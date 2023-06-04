import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from './store'

// 6. Creamos hooks para facilitar el uso
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
