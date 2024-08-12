import React from 'react';
import Link from 'next/link';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-2xl w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-6 bg-gray-700 flex items-center px-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-green-400 mb-4 text-center">Registrasi Berhasil!</h1>
          <p className="text-gray-300 mb-8 text-center text-lg">Data Anda telah berhasil disimpan dan diproses.</p>
          <div className="flex justify-center">
            <Link href="/" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
