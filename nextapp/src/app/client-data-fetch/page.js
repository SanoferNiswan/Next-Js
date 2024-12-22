"use client"

import Link from "next/link";
// useEffect hook
// swr,useswr hook (stale-while-revalidate)
// with loading state

import { useEffect, useState } from "react"

export default function ClientSideDataFetching(){

    const [loading,setLoading] = useState(false);
    const [users,setUsers] = useState([]);

    async function fetchUsers(){
        try{
            setLoading(true);
            const apiResponse = await fetch("https://dummyjson.com/users");
            const result = await apiResponse.json();
            if(result?.users){
                setUsers(result.users);
                setLoading(false);
            }
        }catch{
            console.log(error);
            setUsers([]);
            setLoading(false);
            
        }
    }

    useEffect(()=>{
        fetchUsers();
    },[]);

    if(loading) return <h3 className="font-extrabold text-3xl">Loading users... pls wait !!! </h3>

    return <div>
        <h1>USER LIST : Client side data fetching</h1>
        <ul>
            {users && users.length > 0?
                users.map((user)=><li className="pt-5 cursor-pointer" key={user.id}>
                    {/* {user.firstName} */}
                    <Link href={`/client-data-fetch/${user.id}`}>{user.firstName}</Link>
                </li>)
            :null}
        </ul>
    </div>
}