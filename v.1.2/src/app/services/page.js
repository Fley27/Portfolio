'use client';
import Head from 'next/head';
import Header from '@/components/global/header/header';
import WhatDoWeDo from '@/components/services/what-do-we-do';
import ServicesSection from '@/components/home/services-section';
import Technology from '@/components/services/technology';
import Footer from '@/components/global/footer';


const Services = () => {
    return (
        <main>
            <Head>
                <title>Services</title>
            </Head>
            <Header/>
            <WhatDoWeDo/>
            <ServicesSection/>
            <Technology/>
            <Footer/>
        </main>
    )
}


export default Services;