"use client";
 import Image from "next/image";
import { useRouter } from "next/navigation"
import img from "@/app/assiests/download.jpeg"
export default function Home() {
  const router = useRouter()
  const move = ()=>{
      router.replace('/About')
  }
  return (
    <>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo architecto
        consequatur unde mollitia perferendis? Sed quisquam, culpa, neque quas
        possimus asperiores minus eos error totam inventore optio nobis ut
        ipsam?
      </p>
      <button onClick={move}>Go to About</button>
      <Image width={200} src={img} alt={""}></Image>
    </>
    
  );
}
