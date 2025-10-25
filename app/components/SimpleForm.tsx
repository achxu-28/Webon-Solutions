'use client';

import { useState } from 'react';

export default function SimpleContactForm() {
  // State for each form field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State for form submission status
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    // 1. Prevent the default form submission
    e.preventDefault();
    setStatus('Sending...');

    // 2. TODO: Implement your form submission logic
    // In a real app, you'd send this data to an API route or a third-party service.
    console.log('Form Submitted:', { name, email, message });

    // 3. Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 4. Reset form and show success message
    setStatus('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');

    // 5. Clear the status message after 3 seconds
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email Field (Essential for contacting back) */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === 'Sending...'}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 transition-colors"
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {/* Status Message */}
        {status && status !== 'Sending...' && (
          <p className="text-center text-sm text-green-600 mt-2">{status}</p>
        )}
      </form>
    </div>
  );
}