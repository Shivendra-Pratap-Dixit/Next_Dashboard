import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana, poppins } from './ui/fonts';
import Image from 'next/image';
import styles from "./global.module.scss"
export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <AcmeLogo />
      </div>
      <div className={styles.container}>
        <div className={styles.cont1}>
        <div
  className={styles.cont2}
/>
          <p className={styles.para}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-400">
              Next.js Learn Course & Sass
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-teal-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className='hidden md:block'
          alt=''
          />
          <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className='block md:hidden'
          alt=''
          />
        </div>
      </div>
    </main>
  );
}
