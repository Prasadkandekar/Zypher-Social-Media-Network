import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import SignupForm from './Auth.jsx/forms/signupForm.jsx'
import SigninForm from './Auth.jsx/forms/signinForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <SignupForm /> */}
    <SigninForm />

  </StrictMode>,
)
