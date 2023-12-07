'use client';
import Head from 'next/head';
import Header from '@/components/global/header/header';
import WhoAreWe from '@/components/about/who-are-we';
import Footer from '@/components/global/footer';


const About = () => {
    return (
        <main>
            <Head>
                <title>About</title>
            </Head>
            <Header/>
            <WhoAreWe/>
            <Footer/>
        </main>
    )
}


export default About;