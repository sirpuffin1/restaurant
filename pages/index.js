import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FacebookPage from '../components/FacebookPage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rock & Wings</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <FacebookPage/>
      </main>

    </div>
  )
}


