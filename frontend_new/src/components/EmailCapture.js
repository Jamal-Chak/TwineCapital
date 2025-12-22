// frontend/src/components/EmailCapture.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig'; // ← Fixed import path
// Remove CSS import since file doesn't exist: import './EmailCapture.css';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setMessageType('');

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with first and last name
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`
      });

      // Send email verification
      await sendEmailVerification(user);

      setMessage(`Success! Verification email sent to ${email}. Please check your inbox.`);
      setMessageType('success');

      // Reset form
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');

    } catch (error) {
      console.error('Error signing up:', error);
      
      let errorMessage = 'An error occurred during sign up. Please try again.';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already registered. Please use a different email or sign in.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Please enter a valid email address.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password is too weak. Please use at least 6 characters.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your connection and try again.';
          break;
        default:
          errorMessage = error.message || 'An unexpected error occurred.';
      }
      
      setMessage(errorMessage);
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white text-center">
      <h2 className="text-2xl font-bold mb-2">Join Twine Capital</h2>
      <p className="mb-6 opacity-90">Create your account to get started</p>
      
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First Name"
              className="w-full p-3 rounded text-gray-900"
            />
          </div>
          <div>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last Name"
              className="w-full p-3 rounded text-gray-900"
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
            className="w-full p-3 rounded text-gray-900"
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
            placeholder="Password (min. 6 characters)"
            className="w-full p-3 rounded text-gray-900"
          />
        </div>

        {message && (
          <div className={`p-3 rounded ${
            messageType === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {message}
          </div>
        )}

        <button 
          type="submit" 
          className="w-full bg-white text-blue-600 p-3 rounded font-bold hover:bg-gray-100 transition-colors disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>

      <div className="mt-4">
        <p className="text-sm opacity-75">
          Already have an account? <a href="/login" className="underline">Sign in here</a>
        </p>
      </div>
    </div>
  );
};

export default EmailCapture;