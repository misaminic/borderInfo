import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { useGlobalContext } from '../../contexts/context';

const Navigation = () => {
  const { toggleSidebar, isSidebarMenuIconVisible }: any = useGlobalContext();

  return (
    <>
      <nav className="mainNavigation">
        <div className="w-[100px]">
          <Image
            src="/img/logo.png"
            alt="Picture of the author"
            width={219}
            height={139}
          />
        </div>
        <ul className="navList">
          <li>
            <Link href="/">HOME</Link>
          </li>

          <li>
            <Link href="/howItWorks">HOW IT WORKS</Link>
          </li>

          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      {isSidebarMenuIconVisible ? (
        <button
          type="button"
          className="toggle-btn"
          onClick={() => toggleSidebar()}
        >
          <FiMenu className="icon" />
        </button>
      ) : null}
      <style jsx>
        {`
          .toggle-btn {
            display: none;
            height: 0;
            position: relative;
            z-index: 100;
          }

          @media screen and (max-width: 768px) {
            .toggle-btn {
              display: flex;
              align-self: flex-start;
              margin: 0;
              position: relative;
              top: 1.5rem;
              left: 1.5rem;
              background: transparent;
              border-color: transparent;
              cursor: pointer;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
