
import React from 'react';
import Header from '../components/Header';
import type { SchoolClass } from '../types';

const mockClasses: SchoolClass[] = [
  { id: 'C1', name: 'Grade 1', teacher: 'Mrs. Davis', subjects: ['English', 'Mathematics', 'Science', 'Art'], imageUrl: 'https://images.unsplash.com/photo-1576487248442-ba40a97c4852?auto=format&fit=crop&w=800&q=80' },
  { id: 'C2', name: 'Grade 2', teacher: 'Mr. Smith', subjects: ['English', 'Mathematics', 'Science', 'History'], imageUrl: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=800&q=80' },
  { id: 'C3', name: 'Grade 3', teacher: 'Ms. Jones', subjects: ['English', 'Mathematics', 'Science', 'Geography'], imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80' },
  { id: 'C4', name: 'Grade 4', teacher: 'Mr. Wilson', subjects: ['English', 'Mathematics', 'Science', 'History', 'Advanced Art'], imageUrl: 'https://images.unsplash.com/photo-1542841928-e02b0c397e1c?auto=format&fit=crop&w=800&q=80' },
  { id: 'C5', name: 'Grade 5', teacher: 'Mrs. Taylor', subjects: ['English', 'Mathematics', 'Advanced Science', 'Geography'], imageUrl: 'https://images.unsplash.com/photo-1594411998555-a864a0f44358?auto=format&fit=crop&w=800&q=80' },
  { id: 'C6', name: 'Grade 6', teacher: 'Mr. Brown', subjects: ['Advanced English', 'Advanced Mathematics', 'Physics', 'History'], imageUrl: 'https://images.unsplash.com/photo-1558403194-604595a4e4c3?auto=format&fit=crop&w=800&q=80' },
];

const Classes: React.FC = () => {
  return (
    <div>
      <Header title="Classes and Subjects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockClasses.map((schoolClass) => (
          <div key={schoolClass.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={schoolClass.imageUrl} alt={schoolClass.name} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-700">{schoolClass.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Class Teacher: {schoolClass.teacher}</p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700">Subjects:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {schoolClass.subjects.map((subject) => (
                    <span key={subject} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;