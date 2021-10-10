import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../../contexts/context';
import styled from 'styled-components';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar }: any = useGlobalContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          {/* <img src={logo} alt="comfy" /> */}
          <button
            className="close-btn"
            type="button"
            onClick={() => toggleSidebar()}
          >
            <AiOutlineClose className="icon" />
          </button>
        </div>
        <ul className="links">
          <li onClick={() => toggleSidebar()}>
            <Link href="/">HOME</Link>
          </li>
          <li onClick={() => toggleSidebar()}>
            <Link href="/howItWorks">HOW IT WORKS</Link>
          </li>
          <li onClick={() => toggleSidebar()}>
            <Link href="/faq">FAQ</Link>
          </li>
          <li onClick={() => toggleSidebar()}>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--secondary_white);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--secondary_color);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    margin-bottom: 8rem;
  }

  .links li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: #fff;
    padding: 0.2rem;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    transition: ease 0.3s;
    border-radius: var(--radius);
  }

  /* .links a:hover {
    padding: 1rem 1.5rem;
    background: var(--third_color);
    color: var(--clr-grey-2);
  } */

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url(/img/chalkboard.jpg);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    display: flex;
    flex-direction: column;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

//   const { isSidebarOpen, toggleSidebar }: any = useGlobalContext();

//   return (
//     <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
//       <button className="close-btn" onClick={() => toggleSidebar()}>
//         <AiOutlineClose className="icon" />
//       </button>
//       <div className="side-container">
//         <ul className={isSidebarOpen ? 'sidebar-links' : ''}>
//           <li onClick={() => toggleSidebar()}>
//             <Link href="/">HOME</Link>
//           </li>
//           <li onClick={() => toggleSidebar()}>
//             <Link href="/howItWorks">HOW IT WORKS</Link>
//           </li>
//           <li onClick={() => toggleSidebar()}>
//             <Link href="/faq">FAQ</Link>
//           </li>
//           <li onClick={() => toggleSidebar()}>
//             <Link href="/contact">CONTACT</Link>
//           </li>
//         </ul>
//       </div>
//     </aside>
//   );
// };

export default Sidebar;
