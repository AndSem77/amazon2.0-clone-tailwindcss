import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0 Clone with TailwindCSS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
      </main>
    </div>
  );
}
