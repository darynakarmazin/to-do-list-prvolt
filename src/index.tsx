import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/app'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(
  // eslint-disable-next-line no-undef
  document.querySelector('#root') as HTMLElement,
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
