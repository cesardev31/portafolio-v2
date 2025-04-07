import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HelmetProvider } from './components/HelmetProvider'
import { initAnalytics } from './lib/firebase'

// Component to initialize Firebase Analytics
function FirebaseAnalyticsInitializer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Firebase Analytics
    const initFirebaseAnalytics = async () => {
      await initAnalytics();
    };
    
    initFirebaseAnalytics();
  }, []);

  return <>{children}</>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <FirebaseAnalyticsInitializer>
        <App />
      </FirebaseAnalyticsInitializer>
    </HelmetProvider>
  </StrictMode>,
)
