import { withPageAuthRequired} from "@auth0/nextjs-auth0";

const Contact = () => {
    return (  
        <>
        <p>mrahman@binaryquest.com</p>
        
        </>
    );
}
 
export default Contact;


export const getServerSideProps = withPageAuthRequired();