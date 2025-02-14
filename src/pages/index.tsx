import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/LandingPage/layout';
import { Planet } from '../components/LandingPage/planet';
import { Star } from '../components/LandingPage/star';
import { useSession } from '@supabase/auth-helpers-react';
import { motion } from 'framer-motion';
import JsxParser from 'react-jsx-parser';

export default function Home() {
  const session = useSession();
  console.log(session?.user);

  return (
    <Layout>
      <Head>
        <title>Sloby</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="select-none">
        <Planet
          src="/images/Planet%201.svg"
          className="w-32 inset-y-36 left-72"
        />
        <Planet
          src="/images/Planet%202.svg"
          className="w-46 inset-y-2/3 left-28"
        />
        <Planet
          src="/images/Planet%203.svg"
          className="w-36 inset-y-1/3 right-28"
        />
        <Planet
          src="/images/Planet%204.svg"
          className="w-28 bottom-12 right-72"
        />
        {Array.from({ length: 20 }, (_, i) => (
          <Star key={i} />
        ))}
        <motion.div
          className="w-full flex-center flex-col gap-8 lg:p-40 z-20"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
        >
          <p className="z-20 text-center max-w-7xl animate-gradientMove bg-enlarge text-transparent bg-gradient-to-r from-red-light via-purple-500 via-pink-500 to-yellow-mid bg-clip-text text-6xl lg:text-8xl font-bold">
            The Next-Gen Website Builder.
          </p>
          <p className="z-20 text-xl">
            Rapid web development re-imagined in one simple, coherent tool that
            can satisfy your every need through its myriad of features.
          </p>
          <div className="mt-4 flex-center gap-16 text-md z-50">
            <Link href={'/auth/login'}>
              <div className="z-20 p-4 px-12 bg-dark-dark ring-offset-4 ring-offset-back ring-2 ring-red-mid rounded-2xl">
                Get Started
              </div>
            </Link>
            <a className="z-20 p-4 px-12 bg-dark-dark ring-offset-4 ring-offset-back ring-2 ring-dark-dark rounded-2xl">
              Documentation
            </a>
          </div>
        </motion.div>
      </main>
    </Layout>
  );
}
