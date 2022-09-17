import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Home() {
  const router=useRouter()
  const handleChange=()=>{
    console.log('object');
    //navigating dynamicly
    router.push('/product') //or router.replace('/product')
  }
  return (
    
      <main>
      <h1> Home Page</h1>
      <Link href='/posts'><a>Posts</a></Link>
      <button onClick={handleChange}>Place Order</button>
       {/* <Link href='/blog'><a>Blog</a></Link>
       <Link href='/product'><a>Product</a></Link> */}
      </main>

  )
}
