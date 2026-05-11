import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'pt-0 px-0' : 'px-6 md:px-12 lg:px-16 pt-6'}`}>
      <nav className={`liquid-glass flex items-center justify-between shadow-sm transition-all duration-300 ${isScrolled ? 'px-6 md:px-12 lg:px-16 py-4 rounded-b-xl bg-black/80 backdrop-blur-md' : 'px-4 py-2 rounded-xl bg-black/40 backdrop-blur-sm'}`}>
        <Link to="/" className="text-2xl font-semibold tracking-tight text-white">CMA</Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors">Trang chủ</Link>
          <Link to="/products" className="text-white hover:text-gray-300 transition-colors">Sản phẩm</Link>
          <Link to="/blog/1" className="text-white hover:text-gray-300 transition-colors">Blog</Link>
          <Link to="/support" className="text-white hover:text-gray-300 transition-colors">Hỗ trợ</Link>
        </div>
        
        <Link to="/cart" className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">shopping_cart</span>
          <span className="hidden sm:inline">Giỏ hàng</span>
        </Link>
      </nav>
    </header>
  );
}
