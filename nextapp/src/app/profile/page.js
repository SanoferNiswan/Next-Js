export default function profile({searchParams}){
    console.log(searchParams.search);
    
    return <h1>Profile page{searchParams.search}</h1>
}