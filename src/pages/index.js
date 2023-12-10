import Head from "next/head"


import Login from "./login"


export default function Home() {

  return (
    <>
      <Head>
        <title>Saraha</title>
        <meta name="description" content="Send a secret message" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Login/>
     


    </>
  )
}
