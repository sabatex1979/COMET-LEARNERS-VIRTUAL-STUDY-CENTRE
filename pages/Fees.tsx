
import React, { useState } from 'react';
import Header from '../components/Header';

const Fees: React.FC = () => {
    const [step, setStep] = useState(1);
    const [studentId, setStudentId] = useState('');
    const [amount, setAmount] = useState('500');

    const handleProceedToPayment = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePaymentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(3); // Success step
    };
    
    const startNewPayment = () => {
        setStudentId('');
        setStep(1);
    }

    return (
        <div>
            <Header title="School Fees Payment" />
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="text-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/6942/6942654.png" alt="Secure Payment" className="w-full max-w-xs mx-auto" />
                        <h3 className="text-xl font-semibold text-center mt-4 text-gray-800">Secure & Easy Payments</h3>
                        <p className="text-center text-gray-500 mt-2">Pay your school fees online with our simple and secure process.</p>
                    </div>
                    <div>
                        {step === 1 && (
                            <form onSubmit={handleProceedToPayment}>
                                <h3 className="text-xl font-semibold mb-6">Payment Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">Student ID</label>
                                        <input type="text" id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} required placeholder="e.g., STU-1234" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Fee Amount ($)</label>
                                        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <button type="submit" className="w-full py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Proceed to Payment
                                    </button>
                                </div>
                            </form>
                        )}
                        {step === 2 && (
                            <form onSubmit={handlePaymentSubmit}>
                                <h3 className="text-xl font-semibold mb-2">Card Details</h3>
                                <p className="text-sm text-gray-500 mb-6">Paying ${amount} for Student ID: {studentId}</p>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on Card</label>
                                        <input type="text" id="cardName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                                        <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="flex-1">
                                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                            <input type="text" id="expiry" placeholder="MM/YY" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                        </div>
                                        <div className="flex-1">
                                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                                            <input type="text" id="cvc" placeholder="123" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                        )}
                        {step === 3 && (
                            <div className="text-center">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mt-4">Payment Successful!</h3>
                                <p className="text-gray-600 mt-2">A receipt has been sent to your registered email.</p>
                                <button 
                                    onClick={startNewPayment}
                                    className="mt-6 py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                    Make Another Payment
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fees;