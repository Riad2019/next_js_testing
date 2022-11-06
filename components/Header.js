//  import Link from 'next/link';
 const Header = () => {
    return ( 

        <nav className="navbar navbar-dark bg-dark">
         <div className="container-fluid">
            <a className='navbar-brand' href='/' >
                Binary Quest
            </a>

             <ul className="nav">
               <li className="nav-item active">
                     <a className="nav-link"href="/" >Home </a>
            </li>
            <li className="nav-item active">
                     <a className="nav-link"href="/newslist" >Todays News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
         
        </div>
      </nav>

        

     );
 }
  
 export default Header;