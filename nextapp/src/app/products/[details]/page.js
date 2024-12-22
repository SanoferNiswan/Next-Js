export default function ProductsDetails({params}){
    console.log(params);
    const {details}=params
    
    return <h1>Products details page {details}</h1>
}