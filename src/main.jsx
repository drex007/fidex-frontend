import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './ContextAPI.jsx'
import { Toaster } from 'react-hot-toast'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <App />
        <Toaster position='top-right' />
      </AppContextProvider>
    </Provider>

  </StrictMode>
)
