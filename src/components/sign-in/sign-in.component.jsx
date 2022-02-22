import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

const SignIn = () => {
  const [data, setData] = useState({})

  const handleChange = e => {
    const { name, value } = e.target

    setData({ ...data, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = data

    try{
      await auth.signInWithEmailAndPassword(email, password)
      setData({})
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='sign-in'>
      <h2>I alredy have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" value={data.email} onChange={handleChange} required label="email" />
        <FormInput type="password" name="password" value={data.password} onChange={handleChange} required label="password" />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          {/* we can just pass the props like isGoogleSignIn without any value it is equal to isGoogleSignIn={true} */}
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;