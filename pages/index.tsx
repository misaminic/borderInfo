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
          <button className={'primary_button'}>
            <Link href={'/showBorderStatus'} passHref>
              <a>Check border</a>
            </Link>
          </button>
          <button className={'primary_button'}>
            <Link href={'/feedback'} passHref>
              <a>Post border info</a>
            </Link>
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;
