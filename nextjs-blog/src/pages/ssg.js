import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

export async function getStaticProps() {
  console.log('server');

  const serverTime = new Date().toISOString();
  return { props: { serverTime } };
}

export default function SSG({ serverTime }) {
  return (
    <>
      <h1 className={styles.title}>{serverTime}</h1>
    </>
  );
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
