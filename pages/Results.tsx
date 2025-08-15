
import React, { useState } from 'react';
import Header from '../components/Header';

interface Result {
  subject: string;
  score: number;
  grade: string;
}

const mockResults: { [key: string]: Result[] } = {
  "STU-1234": [
    { subject: "Mathematics", score: 92, grade: "A+" },
    { subject: "Science", score: 88, grade: "A" },
    { subject: "English", score: 95, grade: "A+" },
    { subject: "History", score: 85, grade: "A" },
  ],
  "STU-5678": [
    { subject: "Mathematics", score: 75, grade: "B" },
    { subject: "Science", score: 82, grade: "A-" },
    { subject: "English", score: 78, grade: "B+" },
    { subject: "History", score: 71, grade: "B-" },
  ],
};

const Results: React.FC = () => {
  const [studentId, setStudentId] = useState('');
  const [results, setResults] = useState<Result[] | null>(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    setError('');
    const foundResults = mockResults[studentId.toUpperCase()];
    if (foundResults) {
      setResults(foundResults);
    } else {
      setResults(null);
      setError("No results found for this Student ID.");
    }
  };

  return (
    <div>
      <Header title="Student Results" />
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
        <div className="flex space-x-4">
          <input 
            type="text" 
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter Student ID (e.g., STU-1234)" 
            className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
          />
          <button 
            onClick={handleSearch}
            className="py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Search
          </button>
        </div>

        {error && <p className="text-red-500 text-center mt-6">{error}</p>}
        
        {results && (
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-4">
                 <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="Report Card" className="w-16 h-16" />
                 <div>
                    <h3 className="text-xl font-semibold text-gray-800">Results for {studentId.toUpperCase()}</h3>
                    <p className="text-sm text-gray-500">Official Term Report</p>
                 </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {results.map((result, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{result.subject}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{result.score}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold">{result.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;