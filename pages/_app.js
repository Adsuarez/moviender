//styles
import "../styles/globals.css";

//context
import { UserContextProvider } from "context/UserContext";

//components
import Navigation from "components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <nav className="nav-bar">
          <Navigation />
        </nav>
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}
