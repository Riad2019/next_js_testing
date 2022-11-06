import React from "react";
import { withPageAuthRequired, getAccessToken} from "@auth0/nextjs-auth0";
const index = () => {
    return ( 
      
        <h1>
            Members only
        </h1>
        
     );
}
 
export default index;

export const getServerSideProps = withPageAuthRequired();