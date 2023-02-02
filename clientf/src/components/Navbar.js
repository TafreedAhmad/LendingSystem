import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Border from './Border';


function Navbar() {
  const nav = useNavigate();

  async function handleLogout() {
    await axios.get('http://localhost:4000/api/signout', {
      withCredentials: true,
    });
    nav('/');
  } 

  return (
    <>
      <nav className="m-0 h-[8vh] pt-0 border-black border-b-2 flex align justify-center">
        <div className="py-1 pl-8 flex-1 flex items-center">
          <Link className="text-black" to="/">
            <p
              className="text-6xl"
              style={{ fontFamily: "'Zen Dots', cursive" }}
            >
              Rentovia
            </p>
          </Link>
        </div>
        <div className="flex-1">
          <ul
            className="flex justify-center min-h-full space-x-40 text-base font-semibold"
            style={{ fontFamily: "'Biryani', sans-serif" }}
          >
            <li className="flex items-center">
              <Border>
                <Link to="/itemlist">
                  <p className="text-black h-[1.2rem]">Rent</p>
                </Link>
              </Border>
            </li>
            <li className="flex items-center">
              <Border>
                <Link to="/upload">
                  <p className="text-black h-[1.2rem]">Lend</p>
                </Link>
              </Border>
            </li>
            <li className="flex items-center">
              <Border>
                <Link to="/">
                  <p className="text-black h-[1.2rem]">About</p>
                </Link>
              </Border>
            </li>
          </ul>
        </div>
        <div className="m-0 flex-1 flex justify-end">
          <button
            className="px-4 text-base font-semibold border-black border-l-2 hover:bg-[#07BB9C]"
            onClick={handleLogout}
            style={{ fontFamily: "'Biryani', sans-serif" }}
          >
            <p>Sign Out</p>
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
