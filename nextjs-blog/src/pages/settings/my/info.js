import styles from 'styles/Home.module.css';
import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import { useState } from 'react';

export async function getServerSideProps() {
  console.log('server');

  return {
    props: {},
  };
}

export default function MyInfo() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = 'install' } = router.query;
  return (
    <>
      <h1 className={styles.title}>My Info</h1>
      <h1 className={styles.title}>Clicked {String(clicked)}</h1>
      <h1 className={styles.title}>Status: {status}</h1>
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          location.replace('/settings/my/info?status=editing');
        }}
      >
        edit(replace)
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          router.push('/settings/my/info?status=editing');
        }}
      >
        edit(push)
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          router.push('/settings/my/info?status=editing', undefined, {
            shallow: true,
          });
        }}
      >
        edit(shallow)
      </button>
    </>
  );
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
