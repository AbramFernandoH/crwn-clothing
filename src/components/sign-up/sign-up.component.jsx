import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

const SignUp = () => {
  const [data, setData] = useState({})

  const handleChange = e => {
    const {value, name} = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const { displayName, email, password, confirmPassword } = data

    if(password !== confirmPassword){
      alert("password and confirm password don't match")
      return
    }

    try{
      // get user with email and password
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      setData({})
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div className='sign-up'>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your password and email</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput type="text" name="displayName" value={data.displayName} label="Display Name" onChange={handleChange} required />
        <FormInput type="email" name="email" value={data.email} label="Email" onChange={handleChange} required />
        <FormInput type="password" name="password" value={data.password} label="Password" onChange={handleChange} required />
        <FormInput type="password" name="confirmPassword" value={data.confirmPassword} label="Confirm Password" onChange={handleChange} required />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;