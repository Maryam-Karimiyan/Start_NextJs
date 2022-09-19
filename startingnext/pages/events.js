import {useState} from 'react'
import {useRouter} from 'next/router'
export default function EventList({eventList}){
    const [events,setEvents]=useState(eventList)
    const router=useRouter()
    const fetchSportsEvents=async ()=>{
        const response=await fetch('http://localhost:4000/events?category=sports')
        const data=await response.json()
        setEvents(data)
        router.push(`/events?category=sports`,undefined,{shallow:true})
    }
    return(
        <>
        <button onClick={fetchSportsEvents}>SportsEvents</button>
        <h1>List of Events</h1>
        {
            events.map(ev=>{
                return(
                    <div key={ev.id}>
                        <h1>{ev.id} - {ev.title} - {ev.date} - {ev.category}</h1>
                        <p>{ev.description}</p>
                        <hr/>
                    </div>
                )
            })
        }
        </>
    )
}
export async function getServerSideProps(context){
    const {query}=context
    const {category}=query
    const queryString=category ? 'category=sports': ''
    const response=await fetch(`http://localhost:4000/events?${queryString}`)
    const data=await response.json()
    return {
        props:{
            eventList:data
        }
    }
}