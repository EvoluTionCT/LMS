import type { AppProps } from 'next/app';
import '@/styles/global.css'; // นำเข้าไฟล์ CSS หลัก

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
