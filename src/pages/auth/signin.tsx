import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MobileSignIn, SignUp } from 'src/features';

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true); // [true, () => {}
  const router = useRouter();

  useEffect(() => {
    // if(session) router.push('/');
  }, []);

  return (
    <div className='min-h-screen bg-slate-900 flex justify-center items-center'>
      {
        isSignIn ?
          <MobileSignIn isSignIn={isSignIn} setIsSignIn={setIsSignIn} /> :
          <SignUp isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
      }

    </div>
  );
}

export default SignIn;