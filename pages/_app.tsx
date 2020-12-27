import "../styles/globals.css";
import Layout from "../components/common/layout";
import { GlobalProvider } from "../services/context";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
}

export default MyApp;
