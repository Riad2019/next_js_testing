

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
 
export const getServerSideProps = async(context)=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+ context.params.id)
    const newsItem = await res.json();
    
    return {
        props: {
          newsItem
        }
    }
    }
export default BlogPostDetails;