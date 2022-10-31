import Head from 'next/head'


const Meta = ({title,keywords,description}) => {
    return (  <>
         <Head>
              <title>{title}</title>
              <meta charset ="utf-8"/>
              <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
              <meta name="viewport" content='width=device-width, initial-scale=1'/>
              <meta name='description' content={description}/>
              <meta name="keywords" content={keywords}/>

         </Head>    
    
    </>
    
    );
}
 
Meta.defaultProps = {
    title: "BD News",
    keywords : "BD , BD news, Bangladesh, Bangladesh news",
    description: "be update on leatest news of crypto world"
}



export default Meta;