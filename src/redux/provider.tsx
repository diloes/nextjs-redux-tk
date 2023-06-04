'use client'
// 5. Creamos el provider
import { Provider } from 'react-redux'
import store from './store'

interface Props {
  children: React.ReactNode
}

export const ProviderRedux = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>
}
