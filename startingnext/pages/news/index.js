export default function NewsArticleList({articles}){
    return (
        <>
        <h1>List of News Articles</h1>
        {
            articles.map(article=>{
                return(
                    <div key={article.id}>
                        <h2>{article.id} {article.title} | {article.category}</h2>
                    </div>
                )
            })
        }
        </>
    )
}

//for using server side pages ==> this fun:
// 1)this fun runs only on server side and never runs on client
//2) only in pages not components
// 3) this fun will run at request time
export async function getServerSideProps(){
    const response=await fetch('http://localhost:4000/news');
    const data=await response.json();
    return{
        props:{
            articles:data
        }
    }
}