'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  User,
} from 'firebase/auth';

export default function LoginPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Watch auth state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) router.push('/');
    });

    // Handle redirect result (for popup-blocked browsers)
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) router.push('/');
      })
      .catch((err) => console.error('Redirect error:', err));

    return () => unsubscribe();
  }, [router]);

  const handleLogin = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (err: any) {
      console.warn('Popup failed, falling back to redirect:', err.code);

      if (
        err.code === 'auth/popup-blocked' ||
        err.code === 'auth/cancelled-popup-request' ||
        err.code === 'auth/unauthorized-domain'
      ) {
        // Fallback for restricted domains or popup issues
        await signInWithRedirect(auth, provider);
      } else {
        setError('Failed to sign in. Please check your connection or try again.');
      }
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Loading...
      </div>
    );

  if (user)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Already signed in as <strong className="ml-1">{user.displayName}</strong>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-[400px] text-center">
        <h1 className="text-2xl font-bold mb-4">Cash Loan Management</h1>
        <p className="text-sm text-gray-500 mb-8">
          Sign in with your company Google Account
        </p>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md py-2 mb-4">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="flex items-center justify-center gap-3 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition-all"
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <div className="text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Cash Loan Management System
        </div>
      </div>
    </div>
  );
}
