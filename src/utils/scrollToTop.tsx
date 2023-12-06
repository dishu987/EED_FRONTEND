// ScrollToTopOnLocationChange.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnLocationChange: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the URL location changes
    window.scrollTo(0, 0);
  }, [location.pathname]); // Listen for changes in the pathname

  return null; // This component doesn't render anything to the DOM
};

export default ScrollToTopOnLocationChange;
