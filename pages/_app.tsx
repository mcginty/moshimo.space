import { AppProps } from 'next/app'
import '../styles/index.css'

export default function MoshimoApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
