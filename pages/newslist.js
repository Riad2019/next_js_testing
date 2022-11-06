import NewsList from "../components/NewsList";
import { withPageAuthRequired,getSession} from "@auth0/nextjs-auth0";


const NewsAll = ({newsList}) => {
    console.log(newsList)
    return ( 
<>


<NewsList newsList={newsList}></NewsList>

</>

     );
}
 


export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(context){
        
     const Session =getSession(context.req,context.res)
     console.log(Session)
     
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const newsList = await res.json();
        // console.log(newsList)
        return {
            props: {
              newsList
            }
       
        }


    }


})



export default NewsAll;