import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showData, setShowData] = useState(false);
  const [error, setError] = useState(null);

  function handleOnSubmit(e) {
    e.preventDefault();
    if (validateForm(firstName, lastName, email, password)) setShowData(true);
  }

  function validateForm(firstName, lastName, email, password) {
    console.log('CALLED');
    let emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!firstName) {
      setError('Please enter First Name');
      return false;
    }
    if (firstName && firstName.trim().length < 3) {
      setError('First Name must be atleast 3 character long');
      return false;
    }
    if (!lastName) {
      setError('Please enter Last Name');
      return false;
    }
    if (lastName && lastName.trim().length < 3) {
      setError('Last Name must be atleast 3 character long');
      return false;
    }
    if (!email) {
      setError('Please enter email');
      return false;
    }
    if (email && !emailReg.test(email)) {
      setError('Invalid email');
      return false;
    }
    if (!password) {
      setError('Please enter password');
      return false;
    }
    if (password && password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }
    setError(false);
    return true;
  }

  return (
    <div className='form-container'>
      <div className='flexbox-container'>
        <div className='flexbox-item'>
          <h2 class>Registration Form</h2>
        </div>
      </div>
      <div className='flexbox-form-container'>
        <form className='registration-form' onSubmit={handleOnSubmit}>
          <div className='flexbox-col-fields-container'>
            <label className='form-label'>First Name:</label>
            <input
              type='text'
              className='form-input'
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />

            <label className='form-label'>Last Name:</label>
            <input
              type='text'
              className='form-input'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />

            <label className='form-label'>Email:</label>
            <input
              type='email'
              className='form-input'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label className='form-label'>Password:</label>
            <input
              type='password'
              className='form-input'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {error && <h5 className='form-error'>*{error}</h5>}
            <button className='btn btn-submit' type='submit'>
              Register
            </button>
          </div>
        </form>
      </div>

      {showData && (
        <div className='submitted-form-container'>
          <div className='flexbox-col-fields-container'>
            <h2 className='form-submission-title'>
              Form submission successful
            </h2>
            <div className='flexbox-col-fields-result-item'>
              <h3>Fist Name: {firstName}</h3>
              <h3>Last Name: {lastName}</h3>
              <h3>Email: {email}</h3>
              <h3>password: *******</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
