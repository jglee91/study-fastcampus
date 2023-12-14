import { useState, useLayoutEffect } from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

export default function CSR() {
  const [time, setTime] = useState(null);

  useLayoutEffect(() => {
    console.log('client');
    setTime(new Date().toISOString());
  }, []);

  return (
    <>
      <h1 className={styles.title}>{time}</h1>
    </>
  );
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
