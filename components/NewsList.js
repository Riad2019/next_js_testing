import React from 'react'
import Link from "next/link"
import { withPageAuthRequired} from "@auth0/nextjs-auth0";

export default function NewsList({newsList}) {
    
  return (
    <main className="container mt-4">
        <div className="row">
          {newsList.map((news)=>(
           <div className="col-md-4 mb-5" key={news.id}>

           <h3>{news.title.substring(0,20)}</h3>
           <p>{news.body.substring(0,100)}</p>

            <Link className="btn btn-success" href="/news/[id]" as={`/news/${news.id}`}>
            Read More
           </Link>
        </div>
        
))}
     </div>
      </main>
  )
}


    