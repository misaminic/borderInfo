import '../wdyr';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProvider } from '../contexts/context';
import { FilterProvider } from '../contexts/filterContext';
import Layout from '../components/buildingBlocks/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <FilterProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FilterProvider>
    </AppProvider>
  );
}
export default MyApp;

export function reportWebVitals(metric: any) {
  console.log(metric);
}
