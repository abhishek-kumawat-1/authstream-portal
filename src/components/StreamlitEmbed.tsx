
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface StreamlitEmbedProps {
  url: string;
  height?: string;
}

export default function StreamlitEmbed({ url, height = '800px' }: StreamlitEmbedProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleIframeLoad = () => {
    setLoading(false);
    setError(false);
    console.log('Streamlit iframe loaded successfully');
  };

  const handleIframeError = () => {
    setLoading(false);
    setError(true);
    toast.error('Failed to load Streamlit application. It may have content restrictions.');
    console.error('Failed to load Streamlit iframe');
  };

  // Reset loading state when URL changes
  useEffect(() => {
    setLoading(true);
    setError(false);
  }, [url]);

  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden border border-border animate-fade-in">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full border-t-2 border-primary animate-spin"></div>
            <p className="mt-4 text-sm text-muted-foreground">Loading Streamlit application...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-background">
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-12 w-12 text-red-500 mb-2">⚠️</div>
            <h3 className="text-lg font-medium">Failed to load Streamlit app</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              The Streamlit application couldn't be loaded. This may be due to content security restrictions.
              Try visiting <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">the app directly</a>.
            </p>
          </div>
        </div>
      )}
      
      <iframe
        src={url}
        width="100%"
        height={height}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        allow="camera; microphone; autoplay; clipboard-write; encrypted-media; fullscreen; display-capture"
        className={`w-full ${loading || error ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
        sandbox="allow-same-origin allow-scripts allow-forms allow-downloads allow-popups"
      ></iframe>
    </div>
  );
}
