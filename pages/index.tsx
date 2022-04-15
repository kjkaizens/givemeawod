import { useRouter } from "next/router"
import {format} from "date-fns"
import { useEffect } from "react"

const Home = () => {
    const router = useRouter() 
    useEffect(()=>{
        if (typeof window !== "undefined" ) {
            const slug = format(new Date(), "ddMMyyyy")
            router.push(slug) 
        }
    },[router])
  
    return(
        <p>
            Redirecting to todays WOD
        </p>
    )
}

export default Home