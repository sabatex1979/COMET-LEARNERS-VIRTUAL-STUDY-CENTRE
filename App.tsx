
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import StudentRegistration from './pages/StudentRegistration';
import TeacherRegistration from './pages/TeacherRegistration';
import Classes from './pages/Classes';
import Library from './pages/Library';
import CBT from './pages/CBT';
import Fees from './pages/Fees';
import Results from './pages/Results';
import StudyAssistant from './pages/StudyAssistant';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex h-screen bg-gray-100 font-sans">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/students" element={<StudentRegistration />} />
                <Route path="/teachers" element={<TeacherRegistration />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/library" element={<Library />} />
                <Route path="/cbt" element={<CBT />} />
                <Route path="/fees" element={<Fees />} />
                <Route path="/results" element={<Results />} />
                <Route path="/study-assistant" element={<StudyAssistant />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
