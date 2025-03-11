
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import StreamlitEmbed from '@/components/StreamlitEmbed';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [streamlitUrl, setStreamlitUrl] = useState('https://ad-copies-generator-abhishek-kumawat.streamlit.app/');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      toast.error('Please sign in to access the dashboard');
      navigate('/login');
      return;
    }
    
    // Simulate loading user data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-24 pb-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Your Streamlit application is securely embedded below
            </p>
          </div>
          
          {loading ? (
            <div className="rounded-lg border bg-card shadow-sm p-8 flex items-center justify-center animate-pulse h-[600px]">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full border-t-2 border-primary animate-spin"></div>
                <p className="mt-4 text-sm text-muted-foreground">Loading your dashboard...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              {/* Streamlit embed container with responsive height */}
              <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
                <div className="p-4 border-b bg-muted/30">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium">Streamlit Application</h2>
                    <div className="flex space-x-2">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                    </div>
                  </div>
                </div>
                <StreamlitEmbed url={streamlitUrl} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
