import "../styles/globals.css";
import Navigation from "./components/Navigation";
import LoginInfo from "./components/LoginInfo";
import { UserContextProvider } from "./context/UserContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <LoginInfo />
        <Navigation />
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}
