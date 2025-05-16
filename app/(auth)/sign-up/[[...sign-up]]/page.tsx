import { SignUp } from '@clerk/nextjs'

const SignupPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
        <SignUp/>
    </main>
  )
}

export default SignupPage