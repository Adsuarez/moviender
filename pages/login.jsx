//next
import Head from "next/head";

//components
import Login from "./components/Login";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="Login" content="Form to login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Login in Moviender</h1>
      <Login />
    </>
  );
}
