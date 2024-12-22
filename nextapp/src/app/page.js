'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  console.log(router);

  function handleNavigate(){
    router.push('products');
  }
  
  return (
    <div className="grid justify-items-center font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to next js</h1>
      <Link href={'products'}>Navigate to products page</Link>
      <Link href={'account'}>Navigate to accounts page</Link>

      <h2 className="font-bold mt-3 text-lg">Alternative way of routing using useRouter</h2>
      <button onClick={handleNavigate}>product page using useRouter</button>
    </div>
  );
}
 