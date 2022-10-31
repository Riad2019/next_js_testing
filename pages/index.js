import Meta from "../components/Meta";
import Link from "next/link"

const Home = ({newsList}) => {
  return (
     <>
      <Meta title = "BD News 2" 
      keywords = "BD , BD news, Bangladesh, Bangladesh news" 
      description = "be update on leatest news of crypto world"/>
     
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
       
     
     
     </>

    );
}

export const getServerSideProps = async()=>{
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const newsList = await res.json();

return {
    props: {
      newsList
    }
}
}


export default Home;