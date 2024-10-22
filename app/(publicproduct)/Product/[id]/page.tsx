"use client";
import { useRouter } from "next/navigation"
export default function Product({params}:any){
    const router = useRouter()
    const move = ()=>{
        router.push('../')
    }
    return<>
    <h1>I am product {params.id}</h1>
    <button onClick={move}>go to home</button>
    </>
}