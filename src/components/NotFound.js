import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" className="more-btn btn2">
        Redirect to Home
      </a>
    </div>
  );
};

export default NotFound;
