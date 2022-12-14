
//Client-side Data Fetching
//this is useful for components cause components cant use getStaticprops and so on..
import {useState,useEffect} from 'react'
export default function Dashboard(){
    const [isLoading,setIsLoading]=useState(true)
    const [dashboardData,setDashboardData]=useState(null)
    useEffect(()=>{
        async function fetchDashboardData(){
            const response=await fetch('http://localhost:4000/dashboard');
            const data=await response.json()
            setDashboardData(data);
            setIsLoading(false)
        }
        fetchDashboardData();
    },[])
    if(isLoading){
        return(
            <h2>Loading...</h2>
        )
    }
    return(
        <>
        <h2>Dashboard</h2>
        <h2>Posts - {dashboardData.posts}</h2>
        <h2>Posts - {dashboardData.likes}</h2>
        <h2>Posts - {dashboardData.followers}</h2>
        <h2>Posts - {dashboardData.following}</h2>
        </>
    )
}