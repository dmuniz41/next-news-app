import Head from "next/head";
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

export default function PageLayout ({children, title = 'News App'}: any){
    return(
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.pageLayout}>
            <div>
                NEWS-APP
            </div>
            <div>
                <Link href='/about'>About</Link>
            </div>
        </header>
        <main>{children}</main>
    </>
    )
}