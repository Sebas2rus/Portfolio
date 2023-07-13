import React from 'react';
import Landing from '@/components/Landing/Landing';
import Layout from '@/layout/Layout';
import useSWR from 'swr';
import ServerError from './500';

export default function Index() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR('/api/landing/', fetcher);
  // console.log(data);
  if (error) return <ServerError />;
  if (!data)
    return (
      <Layout>
        <p>loading</p>
      </Layout>
    );

  return (
    <Layout>
      <Landing data={data} />
    </Layout>
  );
}
