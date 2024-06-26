import React from "react";
import Link from "next/link";
import{Form,Button,Checkbox,Input} from "antd"

const App:React.FC =()=>{
    return(
        <div style={{
            height:'500px',
        
        }}

        >
            <h3><Link href="/">Back</Link></h3>
            <h2 style={{textAlign:'center',height:'40px'}}> Please Login</h2>
            
            <div 
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:"center",
                height:'50vh'

            }}
                >
            <form
            >
             <label htmlFor="username" 
             >Username:</label>
        <input
          type="text"
          id="username"/>
          

          <form>
             <label htmlFor="password">password:</label>
        <input
          type="password"
          id="password"/>
          </form>

        
                <button type="submit">
                    Login
                </button>
            
            </form>
            </div>
        </div>
    )
}
export default App;