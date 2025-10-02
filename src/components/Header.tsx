'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <PhoneIcon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate">+1 (555) 123-4567</span>
              </div>
              <div className="hidden sm:block">
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span>Emergency: 24/7 Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white font-bold text-lg sm:text-xl drop-shadow-sm">D</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-slate-800">Dr. Sarah Johnson</h1>
                <p className="text-xs sm:text-sm text-slate-600">Family Medicine</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <Link
                href="/appointment"
                className="glass-hover bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 lg:px-6 py-2 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg gentle-pulse text-sm lg:text-base whitespace-nowrap"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/appointment"
                className="block w-full text-center bg-blue-600 text-white px-3 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
