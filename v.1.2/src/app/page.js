"use client";
import Head from 'next/head';
import Header from '@/components/global/header/header';
import TopSection from '@/components/home/top-section';
import Brand from '@/components/home/brand';
import ServicesSection from '@/components/home/services-section';
import Footer from '@/components/global/footer';
import styles from '../styles/home/home.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="This is the description of my page." />
        <meta name='keywords' content='Web development, Programming, and Facebook.' />
        <meta name='author' content='Fenley Ménélas' />
      </Head>
      <Header/>
      <TopSection/>
      <Brand/>
      <ServicesSection/>
      <Footer/>
    </main>
  )
}
