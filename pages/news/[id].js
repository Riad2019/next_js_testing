import { withPageAuthRequired,getSession} from "@auth0/nextjs-auth0";

const BlogPostDetails = ({newsItem}) => {
        

    return (
        <main className="container mt-4">
               <div className="row">
                  <h1>{newsItem.title}</h1>
                  <p>
                    {newsItem.body}
                  </p>

            </div>

        </main>  
     
    );
}
 
export const getServerSideProps = withPageAuthRequired({
      
    async getServerSideProps(context){

        const Session =getSession(context.req,context.res)
        console.log(Session)


        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+ context.params.id)
        const newsItem = await res.json();
        
        return {
            props: {
              newsItem
            }
        }
    }
    
}) 

 
  

 
export default BlogPostDetails;

