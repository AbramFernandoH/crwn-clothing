import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'

const SignIn = () => {
  const [data, setData] = useState({})

  const handleChange = e => {
    const { name, value } = e.target

    setData({ ...data, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setData({})
  }

  return (
    <div className='sign-in'>
      <h2>I alredy have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" value={data.email} onChange={handleChange} required label="email" />
        <FormInput type="password" name="password" value={data.password} onChange={handleChange} required label="password" />
        <CustomButton>Submit Form</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;