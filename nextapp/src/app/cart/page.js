'use client'
import { usePathname, useSearchParams } from "next/navigation"

export default function cart(){

    const pathName = usePathname();
    console.log("pathname : "+pathName);

    const searchParams = useSearchParams();
    console.log("search param : search - "+searchParams.get('search')+' random - '+searchParams.get('random'));
    
    
    return <div>
        <h1>This is cart component</h1>
    </div>
}