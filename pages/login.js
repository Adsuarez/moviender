//next
import Head from "next/head";

//components
import Auth from "components/Auth";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Authorization</title>
        <meta name="Login" content="Form to login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Authorization in Moviender</h1>
      <Auth />
    </>
  );
}
