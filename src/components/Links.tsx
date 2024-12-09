import Link from 'next/link'
import React from 'react'

const Links = ({props}: {props: any}) => {
  return (
    <div>
        <h3 className="text-xl font-semibold">{props.heading}</h3>
        <ul className="space-y-2 mt-4 text-lg text-gray-500">
            {props.Links.map((link:string, index:number)=>(
                <li key={index}><Link href="#">{link}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default Links