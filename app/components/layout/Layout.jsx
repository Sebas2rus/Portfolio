import React from 'react';
import Navbar from './Navbar';
import Sidebars from './Sidebars';

export default function Layout({ children, data }) {
  const { authorData } = data;
  return (
    <>
      <Navbar authorData={authorData} />
      {children}
      <Sidebars authorData={authorData} />
    </>
  );
}
