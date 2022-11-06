import { useUser,withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from "next/link"


const Auth = () => {

    const { user, error, isLoading } = useUser();
   
   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>{error.message}</div>;
   
   if (user) {
    
     return (
       <div>
       
        <h6>Welcome {user.name}!</h6>
        
         <Link className="btn btn-success" href="/api/auth/logout" >
            Logout
           </Link>
        
        
         
       </div>
     );
   }
 
   return <>
   <h4>Please Log In For Reading News!!</h4>
   <Link className="btn btn-success" href="/api/auth/login" >
   Login
  </Link>
   </>
}
 
export default Auth;
