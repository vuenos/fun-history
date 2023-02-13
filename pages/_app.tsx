import type { AppProps } from 'next/app';
import LayoutWrap from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrap>
      <Component {...pageProps} />
    </LayoutWrap>
  )
}
