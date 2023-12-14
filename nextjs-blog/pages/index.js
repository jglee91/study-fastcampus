import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  console.log('server');

  const serverTime = new Date().toISOString();
  return { props: { serverTime } };
}

export default function Home({ serverTime }) {
  return (
    <>
      <h1 className={styles.title}>{serverTime}</h1>
      <h1>
        <Link href="/csr">CSR 로</Link>
      </h1>
      <h1>
        <Link href="/ssg">SSG 로</Link>
      </h1>
      <h1>
        <Link href="/isr">ISR 로</Link>
      </h1>
    </>
  );
}
