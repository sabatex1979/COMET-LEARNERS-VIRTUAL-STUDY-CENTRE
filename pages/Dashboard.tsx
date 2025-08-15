
import React from 'react';
import Header from '../components/Header';
import { StudentsIcon, TeachersIcon, ClassesIcon, LibraryIcon } from '../components/icons/Icons';

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string; color: string }> = ({ icon, title, value, color }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4">
    <div className={`rounded-full p-3 ${color}`}>
      <div className="text-white">{icon}</div>
    </div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header title="Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<StudentsIcon />} title="Total Students" value="1,250" color="bg-blue-500" />
        <StatCard icon={<TeachersIcon />} title="Total Teachers" value="85" color="bg-green-500" />
        <StatCard icon={<ClassesIcon />} title="Total Classes" value="32" color="bg-indigo-500" />
        <StatCard icon={<LibraryIcon />} title="Books Issued" value="457" color="bg-yellow-500" />
      </div>
      
      <div className="mt-8 rounded-xl shadow-lg overflow-hidden relative h-64 bg-gray-800">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50" 
          src="https://videos.pexels.com/video-files/854737/854737-hd.mp4" 
          autoPlay 
          loop 
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4">
            <div className="text-center text-white">
                <h3 className="text-4xl font-bold">Welcome to EduSphere!</h3>
                <p className="mt-2 text-lg max-w-2xl">Your all-in-one portal for student management, academic tracking, and collaborative learning.</p>
            </div>
        </div>
      </div>

       <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Events</h3>
            <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><span className="bg-red-500 w-2 h-2 rounded-full mr-3"></span> Mid-Term Examinations Start</li>
                <li className="flex items-center"><span className="bg-blue-500 w-2 h-2 rounded-full mr-3"></span> Annual Sports Day</li>
                <li className="flex items-center"><span className="bg-green-500 w-2 h-2 rounded-full mr-3"></span> Science Fair</li>
                <li className="flex items-center"><span className="bg-yellow-500 w-2 h-2 rounded-full mr-3"></span> Parent-Teacher Meeting</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
             <div className="flex flex-wrap gap-4">
                <button className="bg-indigo-100 text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-200">View Timetable</button>
                <button className="bg-indigo-100 text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-200">Check Attendance</button>
                <button className="bg-indigo-100 text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-200">School Calendar</button>
                <button className="bg-indigo-100 text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-200">Announcements</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Dashboard;