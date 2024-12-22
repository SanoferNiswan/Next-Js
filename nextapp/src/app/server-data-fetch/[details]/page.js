import axios from "axios";
async function fetchUserDetails(currentUserId){
    try{
        const apiResponse=await fetch(`https://dummyjson.com/users/${currentUserId}`);
        const result = await apiResponse.json();
        return result;
        // const {data} = axios.get(`https://dummyjson.com/users/${currentUserId}`);
        // return data;
    }catch{
        throw new Error(e);
    }
}

export default async function userDetails({params}){
    const {details}=params;

    const userDetails = await fetchUserDetails(details);
    return <div>
        <h1>User's detail page {details}</h1>
        <p>Name : {userDetails.firstName} {userDetails.lastName}</p>
        <p>Age : {userDetails.age}</p>
        <p>Email : {userDetails.email}</p>
        <p>Phone : {userDetails.phone}</p>
        <p>DOB : {userDetails.birthDate}</p>
    </div>
}