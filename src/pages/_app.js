import Layout from "../Components/Layout"
import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import CounterContextProvider from "../Context/Store"
export default function App({ Component, pageProps }) {
  return <CounterContextProvider>
    <Layout>
    <Component {...pageProps} />
  </Layout>
  </CounterContextProvider>
}