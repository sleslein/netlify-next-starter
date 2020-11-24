import Head from 'next/head';
import Link from 'next/link';

export function Home() {
  return <>
    <Head>
      <title>My Blog!</title>
      <meta name="viewport" content="initial-scale=1.0, width=devicewidth"></meta>
    </Head> 
    <div>Welcome Blog Reader!</div>
    <Link href="/"><a>Go Back Home</a></Link>
  </>
}

export default Home;