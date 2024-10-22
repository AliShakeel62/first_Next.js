"use client";
import { useRouter } from "next/navigation"
export default function Product(){
    const router = useRouter()
    const move = ()=>{
        router.push('../')
    }
    return<>
    <h1>I am Product</h1>
    <button onClick={move}>go to home</button>
    </>
}