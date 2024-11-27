import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-4 px-6 fixed w-full z-20 shadow-lg mb-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">
          Film<span className="text-white">Flix</span>
        </h1>
        <nav className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              `hover:text-red-500 ${isActive ? 'text-red-500' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/add-film"
            className={({ isActive }: { isActive: boolean }) =>
              `hover:text-red-500 ${isActive ? 'text-red-500' : ''}`
            }
          >
            Add Film
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
