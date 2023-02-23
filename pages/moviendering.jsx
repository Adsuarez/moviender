//React
import { useContext } from "react";

//next
import Head from "next/head";

//context
import { UserContext } from "./context/UserContext";

//components
import PosterImage from "./components/PosterImage";

//hooks
import useRedirect from "./hooks/useRedirect";

export default function MovienderingPage() {
  useRedirect();
  const { schedule } = useContext(UserContext);

  return (
    <>
    <Head>
      <title>Schedule</title>
      <meta name="Schedule" content="Look your schedule and invite friends" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="mainDiv">
      <h1>Lets Moviendering</h1>
      <h2>Schedule movies appointment</h2>
      {schedule.map((item) => (
        <section key={Number(item.id)+Math.random()}>
          <h3>{item.title}</h3>
          <p>{item.date.getUTCDate()}</p>
          <p>{item.date.getUTCMonth() + 1}</p>
          <p>{item.date.getUTCFullYear()}</p>
        </section>
      ))}
    </div>
    </>
  );
}
