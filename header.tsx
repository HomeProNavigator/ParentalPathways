import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 bg-[#FCFAF7] border-b border-[#E9E3DA] z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/" className="font-serif text-3xl tracking-tight text-[#667A6D]">ParentalPathway</Link>
        <nav className="space-x-8 text-lg">
          <Link to="/" className="hover:text-[#667A6D]">Home</Link>
          <Link to="/shop" className="hover:text-[#667A6D]">Guides</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
