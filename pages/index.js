import Head from 'next/head';

export function Home() {
  return <>
    <Head>
      <title>My Next.js Site!</title>
      <meta name="viewport" content="initial-scale=1.0, width=devicewidth"></meta>
    </Head> 
    <div>Welcome, Explorer</div>
  </>
}

export default Home;