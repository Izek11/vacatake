
import Image from "next/image";
import { Component } from "react";
import Link from "next/link";
const App:React.FC =()=>{
    return(
        <>
        <div 
        style={{
            textAlign:'center',
            height:'500px',
           
        
        }}
        >
            <h1 >we help you enjoy you retairment at your dream space</h1>
            <h1>secure a place or choose you destination</h1>
            <h2><Link href="/login" >sign in</Link></h2>
            </div>
        </>
    )
}
export default App;