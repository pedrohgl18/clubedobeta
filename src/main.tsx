import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EmpresasPage from './pages/Empresas.tsx'
import OnboardingPage from './pages/Onboarding.tsx'
import PerfilPage from './pages/Perfil.tsx'
import VerifyEmailPage from './pages/VerifyEmail.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/empresas', element: <EmpresasPage /> },
  { path: '/onboarding', element: <OnboardingPage /> },
  { path: '/perfil', element: <PerfilPage /> },
  { path: '/verifique-email', element: <VerifyEmailPage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
