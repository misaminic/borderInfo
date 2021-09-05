import '../wdyr';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProvider } from './context';
import { FilterProvider } from './filterContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </AppProvider>
  );
}
export default MyApp;
