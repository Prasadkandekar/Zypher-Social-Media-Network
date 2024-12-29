import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import SignupForm from './signupForm.jsx'
import SigninForm from './signinForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <SignupForm /> */}
    <SigninForm />

  </StrictMode>,
)
