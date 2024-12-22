import { redirect } from "next/navigation";

export default function Account(){

    const profileInfo=null;
    if(profileInfo==null){
        // redirect("cart?search=product1&random='abcde'")
        redirect("products?search=sanofer&random=Niswan");
    }
    return <div>
        <h1>account page</h1>

    </div>
}