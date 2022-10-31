//  import Link from 'next/link';
 const Header = () => {
    return ( 

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container-fluid">
            <a className='navbar-brand' href='/' >
                Binary Quest
            </a>

             <ul class="nav">
               <li class="nav-item active">
                     <a class="nav-link"href="/" >Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
         
        </div>
      </nav>

        

     );
 }
  
 export default Header;