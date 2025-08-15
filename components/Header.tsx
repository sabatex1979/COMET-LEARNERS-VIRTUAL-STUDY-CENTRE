
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-2">{title}</h2>
  );
};

export default Header;
