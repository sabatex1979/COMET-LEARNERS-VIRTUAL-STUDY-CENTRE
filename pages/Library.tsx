
import React, { useState } from 'react';
import Header from '../components/Header';

const Library: React.FC = () => {
    const [studentId, setStudentId] = useState('');
    const [attendanceLog, setAttendanceLog] = useState<string[]>([]);
    const [message, setMessage] = useState('');

    const handleLogAttendance = () => {
        if (studentId.trim() === '') {
            setMessage('Please enter a student ID.');
            return;
        }
        const timestamp = new Date().toLocaleString();
        const logEntry = `Student ${studentId} entered at ${timestamp}`;
        setAttendanceLog(prevLog => [logEntry, ...prevLog]);
        setMessage(`Student ${studentId} logged successfully!`);
        setStudentId('');
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div>
            <Header title="Library Attendance" />
            <div 
                className="h-48 bg-cover bg-center rounded-xl shadow-lg mb-8 flex items-center justify-center" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80')"}}>
                <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
                    <h2 className="text-4xl font-bold text-white tracking-wider">School Library</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Log Attendance</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">Student ID</label>
                                <input 
                                    type="text" 
                                    id="studentId" 
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value)}
                                    placeholder="e.g., STU-1234"
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                                />
                            </div>
                            <button 
                                onClick={handleLogAttendance}
                                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Log Entry
                            </button>
                            {message && <p className="text-sm text-green-600 text-center">{message}</p>}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Live Attendance Log</h3>
                        <div className="h-96 overflow-y-auto border rounded-md p-4 bg-gray-50">
                            {attendanceLog.length > 0 ? (
                                <ul className="space-y-2">
                                    {attendanceLog.map((log, index) => (
                                        <li key={index} className="text-sm text-gray-700 bg-white p-2 rounded shadow-sm">{log}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-center text-gray-500 mt-16">No entries yet today.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Library;