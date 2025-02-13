// components/ResponsiveMessage.js
import { useEffect, useState } from "react";

const ResponsiveMessage = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 2000);
  //   };

  //   // Set initial state
  //   handleResize();

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup event listener on component unmount
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // if (!isMobile) return null; // Don't render if not mobile

  return (
    <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-4 rounded shadow-lg z-50">
      This app is made only for browsers. Please use a desktop browser for the
      best experience.
    </div>
  );
};

export default ResponsiveMessage;
