
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import AuthForm from '@/components/AuthForm';

export default function Login() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6 max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in">
            {mode === 'login' ? 'Welcome back' : 'Create an account'}
          </h1>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            {mode === 'login' 
              ? 'Sign in to access your Streamlit applications' 
              : 'Sign up to get started with StreamConnect'}
          </p>
        </div>
        
        {/* Auth form */}
        <div className="bg-card rounded-xl border p-6 shadow-sm animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex rounded-md overflow-hidden">
              <button
                onClick={() => setMode('login')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  mode === 'login'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setMode('signup')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  mode === 'signup'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
          
          <AuthForm mode={mode} />
        </div>
        
        <p className="mt-6 text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '300ms' }}>
          By continuing, you agree to our{' '}
          <Link to="#" className="underline underline-offset-4 hover:text-foreground">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="#" className="underline underline-offset-4 hover:text-foreground">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
