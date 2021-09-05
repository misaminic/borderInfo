import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useState, useEffect, useRef, useCallback } from 'react';
import PrimaryCheckbox from '../components/buildingBlocks/PrimaryCheckbox';

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
          <Link href={'/showBorderStatus'}>
            <button className={'primary_button'}>
              <a>Check border</a>
            </button>
          </Link>
          <Link href={'/feedback'}>
            <button className={'primary_button'}>
              <a>Post border info</a>
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   // const urlPath = path.join(process.cwd(), 'api', 'hello');

//   const response = await fetch(`http://localhost:3000/api/hello`);
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

export default Home;
