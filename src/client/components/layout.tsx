import Footer from '@components/footer';
import { ILayout } from '@src/definitions/ILayout';
import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Nav from './nav';

export default function Layout({ children }: ILayout) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>proyecto - fisica </title>
          <meta name="description" />
          <meta name="keywords" content="Projecto Fisica 1"></meta>
          <meta property="og:title" content={''} />
          <meta property="og:image" content={''} />
        </Helmet>
      </HelmetProvider>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
