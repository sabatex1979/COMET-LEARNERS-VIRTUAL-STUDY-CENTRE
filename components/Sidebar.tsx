
import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardIcon, StudentsIcon, TeachersIcon, ClassesIcon, LibraryIcon, ExamIcon, FeesIcon, ResultsIcon, StudyIcon } from './icons/Icons';

const Sidebar: React.FC = () => {
  const linkClasses = "flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors duration-200";
  const activeLinkClasses = "bg-gray-700 text-white";

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <svg className="h-8 w-8 text-indigo-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
        <h1 className="text-2xl font-bold">EduSphere</h1>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        <NavLink to="/dashboard" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
          <DashboardIcon />
          <span className="mx-4">Dashboard</span>
        </NavLink>
        <NavLink to="/students" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
          <StudentsIcon />
          <span className="mx-4">Students</span>
        </NavLink>
        <NavLink to="/teachers" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
          <TeachersIcon />
          <span className="mx-4">Teachers</span>
        </NavLink>
        <NavLink to="/classes" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
          <ClassesIcon />
          <span className="mx-4">Classes</span>
        </NavLink>
        <NavLink to="/library" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
          <LibraryIcon />
          <span className="mx-4">Library</span>
        </NavLink>
        <NavLink to="/cbt" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
          <ExamIcon />
          <span className="mx-4">CBT Exam</span>
        </NavLink>
        <NavLink to="/fees" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
          <FeesIcon />
          <span className="mx-4">Fees Payment</span>
        </NavLink>
        <NavLink to="/results" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
          <ResultsIcon />
          <span className="mx-4">Results</span>
        </NavLink>
         <NavLink to="/study-assistant" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
          <StudyIcon />
          <span className="mx-4">Study Assistant</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;