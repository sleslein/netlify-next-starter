import { getRouteMatcher } from 'next/dist/next-server/lib/router/utils';
import Head from 'next/head';
import {Router, useRouter} from 'next/router';

export function Home() {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push('/pokemon')
  }

  return <>
    <Head>
      <title>My Next.js Site!</title>
      <meta name="viewport" content="initial-scale=1.0, width=devicewidth"></meta>
    </Head> 
    <div>Welcome, Explorer</div>
    <button onClick={handleClick}>
      Click Me!
    </button>
  </>
}

export default Home;