'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';

export default function Home() {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [modelType, setModelType] = useState<string>('');
  const [features, setFeatures] = useState<string[]>([]);
  const [target, setTarget] = useState<string>('');

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'text/csv': ['.csv']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      toast.success('File uploaded successfully!');
    }
  });

  const modelTypes = [
    { id: 'plexe', name: 'Plexe.ai Adaptive Model', description: 'AI-powered model that adapts to your data and requirements' },
    { id: 'regression', name: 'Regression', description: 'Predict continuous values' },
    { id: 'classification', name: 'Classification', description: 'Predict categories or classes' },
    { id: 'clustering', name: 'Clustering', description: 'Group similar data points' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#8B4513] mb-8">Create Your ML Model</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-6">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= stepNumber ? 'bg-[#8B4513] text-white' : 'bg-gray-200'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div className={`w-24 h-1 ${step > stepNumber ? 'bg-[#8B4513]' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Upload Your Dataset</h2>
            <div
              {...getRootProps()}
              className="border-2 border-dashed border-[#8B4513] rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50"
            >
              <input {...getInputProps()} />
              <p className="text-gray-600">Drag and drop your CSV file here, or click to select</p>
              {file && (
                <p className="mt-2 text-[#8B4513]">Selected file: {file.name}</p>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Select Model Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modelTypes.map((type) => (
                <div
                  key={type.id}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    modelType === type.id ? 'border-[#8B4513] bg-[#F5F5DC]' : 'border-gray-200'
                  }`}
                  onClick={() => setModelType(type.id)}
                >
                  <h3 className="font-semibold">{type.name}</h3>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Select Features and Target</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Features (Input Variables)
                </label>
                <select
                  multiple
                  className="w-full border rounded-lg p-2"
                  onChange={(e) => setFeatures(Array.from(e.target.selectedOptions, option => option.value))}
                >
                  {/* This will be populated with actual columns from the CSV */}
                  <option value="feature1">Feature 1</option>
                  <option value="feature2">Feature 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Target (Output Variable)
                </label>
                <select
                  className="w-full border rounded-lg p-2"
                  onChange={(e) => setTarget(e.target.value)}
                >
                  <option value="">Select target variable</option>
                  {/* This will be populated with actual columns from the CSV */}
                  <option value="target1">Target 1</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Review and Generate</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Selected Configuration:</h3>
                <p>File: {file?.name}</p>
                <p>Model Type: {modelTypes.find(t => t.id === modelType)?.name}</p>
                <p>Features: {features.join(', ')}</p>
                <p>Target: {target}</p>
              </div>
              <button
                className="w-full bg-[#8B4513] text-white py-2 px-4 rounded-lg hover:bg-[#A0522D] transition-colors"
                onClick={() => toast.success('Model generation started!')}
              >
                Generate Model
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
              onClick={() => setStep(step - 1)}
            >
              Previous
            </button>
          )}
          {step < 4 && (
            <button
              className="bg-[#8B4513] text-white py-2 px-4 rounded-lg hover:bg-[#A0522D] transition-colors ml-auto"
              onClick={() => setStep(step + 1)}
            >
              Next
              <ArrowRightIcon className="w-4 h-4 inline-block ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
