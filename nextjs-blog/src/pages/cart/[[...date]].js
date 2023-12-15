import styles from 'styles/Home.module.css';
import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CartDateSlug() {
  const router = useRouter();
  const { date } = router.query;
  return (
    <>
      <h1 className={styles.title}>Cart Date Slug {JSON.stringify(date)}</h1>
      <Link href="/cart/2023/12/15">2023년 12월 15일로</Link>
      <br />
      <button onClick={() => router.push('/cart/2023/12/25')}>
        2023년 12월 25일로
      </button>
    </>
  );
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
