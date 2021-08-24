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
          content="providing information regarding borders and their current state"
        />
        {/* <link rel="icon" href="" /> */}
      </Head>

      <main className={(styles.main, 'bg-gray-50')}>
        <section>
          <h1>BORDER INFO</h1>
        </section>
        <section className={styles.intro_page}>
          <Link href={'/showBorderStatus'}>
            <button className={'primary_button'}>
              <a>Find out how is it at a border</a>
            </button>
          </Link>
          <Link href={'/feedback'}>
            <button className={'primary_button'}>
              <a>Give feedback how was it a border</a>
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
