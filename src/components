import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { ref, set } from 'firebase/database';
import { database, storage } from '../utils/firebase';
import { ref as storageRef, uploadBytes } from 'firebase/storage';

interface RegistrationData {
  name: string;
  npm: string;
  platMotor: string;
  photo: File | null;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    npm: '',
    platMotor: '',
    photo: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData((prevData) => ({ ...prevData, photo: file }));
      setPreview(URL.createObjectURL(file));
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.photo) {
      setIsLoading(true);
      try {
        const photoRef = storageRef(storage, `photos/${formData.npm}`);
        await uploadBytes(photoRef, formData.photo);
        const userRef = ref(database, `users/${formData.npm}`);
        await set(userRef, {
          name: formData.name,
          npm: formData.npm,
          platMotor: formData.platMotor,
          photoUrl: `photos/${formData.npm}`,
        });
        router.push('/success');
      } catch (error) {
        console.error("Error submitting data: ", error);
        setIsLoading(false);
        // Handle error appropriately
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center py-8 px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 lg:p-12 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Registrasi Kendaraan
          </h2>
        </div>
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Nama"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="npm" className="block text-sm font-medium text-gray-700">
                NPM
              </label>
              <input
                id="npm"
                name="npm"
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="NPM"
                value={formData.npm}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="platMotor" className="block text-sm font-medium text-gray-700">
                Plat Motor
              </label>
              <input
                id="platMotor"
                name="platMotor"
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Plat Motor"
                value={formData.platMotor}
                onChange={handleChange}
              />
            </div>
            <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
              Foto Anda
            </label>
            <div 
              className="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {preview ? (
                <div className="relative w-full h-48">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="photo"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Unggah Foto</span>
                      <input
                        id="photo"
                        name="photo"
                        type="file"
                        className="sr-only"
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <p className="pl-1">atau seret dan lepaskan</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF maksimal 10MB</p>
                </div>
              )}
            </div>
          </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                'Daftar'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
