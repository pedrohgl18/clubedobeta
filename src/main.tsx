import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EmpresasPage from './pages/Empresas.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/empresas', element: <EmpresasPage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
