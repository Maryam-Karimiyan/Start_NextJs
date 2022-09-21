import Head from "next/head"
export default function Blog({title,description}){
    <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
    </Head>
}
export async function getServerSideProps(){
    return {
        props:{
            title: 'Article Title',
            description: 'Article description'
        }
    }
}