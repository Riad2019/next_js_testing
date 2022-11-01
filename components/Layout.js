import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'


const Layout = ({children}) => {
    return ( 
            <div className={styles.container}>
               <Header></Header>
              {children}
             <Footer></Footer>
            
            </div>

     );
}
 
export default Layout;