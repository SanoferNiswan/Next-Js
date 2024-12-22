
// fetch

import Link from "next/link";
import axios from "axios";

async function fetchUsers(){
    try{
        const apiResponse = await fetch("https://dummyjson.com/users");
        const result = await apiResponse.json();

        return result.users;
        // const {data} = axios.get(`https://dummyjson.com/users`);
        // return data;
    }catch(error){
        throw new Error(error);
    }
}

export default async function ServerSideDataFetching(){
    const users=await fetchUsers();
    console.log(users);
    
    return <div className="p-10">
        <h1>USER LIST : Server side data fetching</h1>
        <ul>
            {users && users.length > 0?
                users.map((user)=><li className="pt-5 cursor-pointer" key={user.id}>
                    <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
                </li>)
            :null}
        </ul>
    </div>
}