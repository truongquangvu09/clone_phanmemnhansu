import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
       <Head>
          <title> Hompage </title>
          <meta name="keywords" content ="coders"/>
          <link rel="shortcut icon" href="https://api-booking-app-aws-ec2.onrender.com/default.png" />
       </Head>
       <div>
           <h1> Home Page </h1>
            <Link href='/about'>
                  Go to about
            </Link>
           <p>
            To effectively use Next.js, it helps to be familiar with JavaScript, React, and related web development concepts. But JavaScript and React are vast topics. How do you know when you’re ready to learn Next.js?
            Welcome to the Next.js Foundations course! This beginner-friendly, example-led course will guide you through the prerequisite knowledge for Next.js. You will build a simple project step-by-step; starting with a JavaScript application, then migrating it to React and Next.js.
           </p>
           <Link href='/coders'>
                  Go to list coder
            </Link>
       </div>
        {/*<Footer/>*/}
    </>
  )
}
