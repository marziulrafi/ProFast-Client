import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './route/Routes.jsx'
import { RouterProvider } from 'react-router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './provider/AuthProvider.jsx'


AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='urbanist max-w-7xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>,
)
