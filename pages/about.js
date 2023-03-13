//next
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="About" content="Information about the app Moviender" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>About Moviender</h1>
        <p>
          Have you had problems when you want to watch a movie with your
          friends? We too had it some times. <strong>Moviender</strong> is an
          easy way to match with your friends and select the movies you like.
          Try choosing with Desire button and then schedule the movies, if your
          friends want to be the same genere or the same movie,
          <strong> Moviender </strong> match you bouth.
        </p>
      </div>
    </>
  );
}
