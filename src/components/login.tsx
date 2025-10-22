'use client';
import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, onAuthStateChanged, User, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) router.push("/"); // redirect to dashboard if logged in
    });

    // Handle redirect result after redirect login
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          setUser(result.user);
          router.push("/");
        }
      })
      .catch((err) => {
        console.error("Redirect login error:", err);
        setError("Failed to sign in via redirect. Please try again.");
      });

    return () => unsubscribe();
  }, [router]);

  const handleLogin = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      console.warn("Popup failed, falling back to redirect:", err.code);
      if (err.code === "auth/popup-blocked" || err.code === "auth/cancelled-popup-request") {
        await signInWithRedirect(auth, provider);
      } else {
        console.error("Google Sign-In Error:", err);
        setError("Failed to sign in. Please try again.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/login");
    } catch (err) {
      console.error("Logout Error:", err);
      setError("Failed to log out. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Loading...
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="mb-4 text-gray-800">You are signed in as <strong>{user.displayName}</strong></p>
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-10 w-[400px] text-center">
        <h1 className="text-2xl font-bold mb-4">Cash Loan Management</h1>
        <p className="text-sm text-gray-500 mb-8">Sign in with your company Google Account</p>

        {error && <p className="text-red-600 mb-3">{error}</p>}

        <button
          onClick={handleLogin}
          className="flex items-center justify-center gap-3 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow"
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="text-xs text-gray-400 mt-6">
          © 2025 Cash Loan Management System
        </p>
      </div>
    </div>
  );
}
