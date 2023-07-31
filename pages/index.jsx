import React from 'react';
import useSWR from 'swr';
import Head from 'next/head';
import Landing from '@/components/Landing/Landing';
import Layout from '@/layout/Layout';
import ServerError from './500';
import Loading from '@/ui/Loading/Loading';

export default function Index() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR('/api/landing/', fetcher);

  if (error) return <ServerError />;
  if (!data) return <Loading />;

  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
      </Head>
      <Layout data={data}>
        <Landing data={data} />
      </Layout>
    </>
  );
}
