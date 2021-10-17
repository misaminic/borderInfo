import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Border Info</title>
        <meta
          name="description"
          content="providing information regarding borders and their current state regarding covid-19"
        />
        {/* <link rel="icon" href="" /> */}
      </Head>

      <main className={styles.main}>
        <section>
          <h1 className="front_page_title">BORDER INFO</h1>
          <p>MAKING TRAVELLING EASIER</p>
        </section>
        <section className={styles.intro_page}>
          <Link href={'/showBorderStatus'} passHref>
            <button className={'primary_button'}>
              <a>Check border</a>
            </button>
          </Link>
          <Link href={'/feedback'} passHref>
            <button className={'primary_button'}>
              <a>Post border info</a>
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;
