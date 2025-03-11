
import { useState, useEffect } from 'react';

interface StreamlitEmbedProps {
  url: string;
  height?: string;
}

export default function StreamlitEmbed({ url, height = '800px' }: StreamlitEmbedProps) {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  // Reset loading state when URL changes
  useEffect(() => {
    setLoading(true);
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
      
      <iframe
        src={url}
        width="100%"
        height={height}
        onLoad={handleIframeLoad}
        allow="camera; microphone; autoplay; clipboard-write; encrypted-media; fullscreen; display-capture"
        className={`w-full ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
      ></iframe>
    </div>
  );
}
