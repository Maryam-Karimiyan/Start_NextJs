//in command => yarn add swr
import useSWR from 'swr'
//swr is a hook and the 1st argument is a unique key and the 2nd is a fuc for fetch data
const fetcher=async ()=>{
    const response=await fetch('http://localhost:4000/dashboard');
        const data=await response.json()
        return data }
export default function DashboardSWR(){
   const {data,error}= useSWR('dashboard',fetcher)
   if(error){return 'An Error has occured'}
   if(!data){return 'Loading...'}
   return(
    <>
    <h2>Dashboard</h2>
    <h2>Posts - {data.posts}</h2>
    <h2>Posts - {data.likes}</h2>
    <h2>Posts - {data.followers}</h2>
    <h2>Posts - {data.following}</h2>
    </>
)
}
//using swr is simpler than useeffect hooks
//in swr if db.json is updated dosnt need to refresh