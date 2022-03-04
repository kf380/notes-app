import React from 'react'
import { Provider } from 'react-redux'

import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'

//El provider lo utilizo para que el resto de los componentes tengan conexion con el store
export const JournalApp = () => {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}
