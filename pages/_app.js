import Head from 'next/head';
import { RiLinkedinFill, RiGithubFill, RiTwitterFill } from 'react-icons/ri';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home | Iran Garcia</title>
      </Head>
      <div className="overflow-x-hidden">
        <div className="px-6 py-8">
          <div className="flex justify-between container mx-auto">
            <div className="w-full mx-auto">
              <img
                className="rounded-full w-28 my-0"
                src={
                  'https://pbs.twimg.com/profile_images/1341754525120688133/YL51bMY0_400x400.jpg'
                }
              />
              <h2 className="text-center mt-2 text-lg">Iran Garcia</h2>
              <p className="text-center mt-1 mb-10 text-sm">
                aspirante a front-end dev. criando coisas inúteis.
              </p>

              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-gray-500 text-sm my-5">
        <a href="https://github.com/irangarcia" rel="noopener noreferrer">
          <RiGithubFill className="inline pr-2 text-3xl hover:text-green-450" />
        </a>
        <a href="https://twitter.com/irangarciaz" rel="noopener noreferrer">
          <RiTwitterFill className="inline pr-2 text-3xl hover:text-green-450" />
        </a>
        <a href="https://linkedin.com/in/irangarciaj" rel="noopener noreferrer">
          <RiLinkedinFill className="inline text-2xl hover:text-green-450" />
        </a>
        <span className="block mt-1">irangarcia @ 2020</span>
      </footer>
    </>
  );
}

export default MyApp;
