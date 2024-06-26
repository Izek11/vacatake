import React from "react";
import Image from "next/image";
export const metadata = {
  title: 'zen.org',
  description: 'zen enterprise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{
        backgroundImage:'url("/components/vc1.jfif")',
      height:'100vh'

      }}>

    
      <header style={{
        backgroundColor:"blue",
        textAlign:"center",
        height:"80px",
        width:"default",
        alignContent:"center",
        alignItems:"center"

      }}>
        <h2>Wellcome to zen vacation planning</h2>
      </header>
    
    
        {children}


        <footer
        style={{
          height:'100px',
          width:'default',
          textAlign:'center',
          alignContent:'center',
          backgroundColor:'aqua'
        }}
        >
          <h3>ZEN VACATION LTD</h3>
          <h4>contact us:<a href="messjust@gmail.com">zencharts</a></h4>
        </footer>
        </body>
    </html>
  )
}
