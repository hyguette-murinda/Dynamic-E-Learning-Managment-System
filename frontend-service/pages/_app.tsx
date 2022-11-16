import "../styles/globals.css"
import { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
        // <h1>Trial</h1>
    )
}

export default App