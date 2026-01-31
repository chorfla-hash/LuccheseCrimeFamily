import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links: { label: string; page: Page }[] = [
    { label: 'სივი', page: 'cv' },
    { label: 'ბიოგრაფია', page: 'biography' },
    { label: 'იერარქია', page: 'hierarchy' },
    { label: 'ოჯახი', page: 'family' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-amber-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-amber-500 hover:text-amber-400 transition-colors"
          >
            Lucchese
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-amber-500'
                    : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-amber-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-amber-600/30">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-amber-500 bg-amber-500/10'
                    : 'text-gray-300 hover:text-amber-400 hover:bg-amber-500/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
