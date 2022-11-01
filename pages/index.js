import Meta from "../components/Meta";
import Link from "next/link"
import Auth from "../components/Auth";
import NewsList from "../components/NewsList";
import { withPageAuthRequired} from "@auth0/nextjs-auth0";

const Home = ({newsList}) => {



  return (
     <>
     <h1>view for all user </h1>
     <Auth></Auth>
      <Meta title = "BD News" 
      keywords = "BD , BD news, Bangladesh, Bangladesh news" 
      description = "be update on leatest news of crypto world"/>
   
     
   
   <Link className="btn btn-success" href="/newslist" >
    Click For All News!!
  </Link>
      
         
     </>

    );
}

export default Home;