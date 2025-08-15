
import React, { useState } from 'react';
import Header from '../components/Header';

const TeacherRegistration: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const subjects = ["Mathematics", "Science", "English", "History", "Geography", "Art"];
    const classes = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"];

    return (
        <div>
            <Header title="Teacher Registration" />
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-3">
                        {submitted && (
                             <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                                <p className="font-bold">Success!</p>
                                <p>Teacher has been registered successfully.</p>
                            </div>
                        )}
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Teacher Application</h3>
                        <p className="text-gray-500 mb-6">Become a part of our dedicated team of educators.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="fullName" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div>
                                    <label htmlFor="teacherId" className="block text-sm font-medium text-gray-700">Teacher ID</label>
                                    <input type="text" id="teacherId" value={`TCH-${Math.floor(100 + Math.random() * 900)}`} readOnly className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div>
                                    <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Qualification</label>
                                    <input type="text" id="qualification" required placeholder="e.g., B.Ed, M.Sc" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div>
                                    <label htmlFor="primarySubject" className="block text-sm font-medium text-gray-700">Primary Subject</label>
                                    <select id="primarySubject" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                        {subjects.map(subject => <option key={subject}>{subject}</option>)}
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Assign to Classes</label>
                                    <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {classes.map(c => (
                                            <div key={c} className="flex items-center">
                                                <input id={c} name="classes" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                <label htmlFor={c} className="ml-2 block text-sm text-gray-900">{c}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 text-right">
                                <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Register Teacher
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="lg:col-span-2 hidden lg:block">
                        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Teacher in classroom" className="rounded-lg object-cover w-full h-full shadow-md"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherRegistration;