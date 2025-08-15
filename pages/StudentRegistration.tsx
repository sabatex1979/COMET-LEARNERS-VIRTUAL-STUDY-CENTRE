
import React, { useState } from 'react';
import Header from '../components/Header';

const StudentRegistration: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
    };

    return (
        <div>
            <Header title="Student Registration" />
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2 hidden lg:block">
                        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning" className="rounded-lg object-cover w-full h-full shadow-md"/>
                    </div>
                    <div className="lg:col-span-3">
                         {submitted && (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                                <p className="font-bold">Success!</p>
                                <p>Student has been registered successfully.</p>
                            </div>
                        )}
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Registration Form</h3>
                        <p className="text-gray-500 mb-6">Join our vibrant learning community. Fill out the details below to get started.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="fullName" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div>
                                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                    <input type="date" id="dob" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div>
                                    <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class</label>
                                    <select id="class" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                        <option>Grade 1</option>
                                        <option>Grade 2</option>
                                        <option>Grade 3</option>
                                        <option>Grade 4</option>
                                        <option>Grade 5</option>
                                        <option>Grade 6</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">Student ID</label>
                                    <input type="text" id="studentId" value={`STU-${Math.floor(1000 + Math.random() * 9000)}`} readOnly className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                    <textarea id="address" rows={3} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                                </div>
                                <div>
                                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
                                    <input type="text" id="parentName" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <div>
                                    <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">Parent/Guardian Phone</label>
                                    <input type="tel" id="parentPhone" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                            </div>
                            <div className="mt-8 text-right">
                                <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Register Student
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentRegistration;