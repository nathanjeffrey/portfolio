import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return(
        <Layout>
            {/* <Image 
                src='/images/profile.jpeg'
                height={144}
                width={144}
                alt='Nathan'
            ></Image> */}
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <Link href='/'>
                <a>Home</a>
            </Link>        
        </Layout>
    )
}
  