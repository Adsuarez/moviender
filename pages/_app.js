import "../styles/globals.css";
import Navigation from "./components/Navigation";
import { UserContextProvider } from "./context/UserContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <nav className="nav">
          <Navigation />
        </nav>
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}
