import React from "react";
import { Helmet } from "react-helmet";

const BlogPageComponent = () => {
  return (
    <div>
      <Helmet>
        <title>Blogs | Nitesh Rathod</title>
        <meta
          name="description"
          content="Discover insightful blogs by Nitesh Rathod on web development, React, JavaScript, and modern technologies."
        />
        <meta
          name="keywords"
          content="blogs, web development, nkrathod, React, JavaScript, Nitesh Rathod"
        />
        <meta name="author" content="Nitesh Rathod" />
        <meta name="robots" content="index, follow, blog" />
      </Helmet>
      <div className="container">
        <p>Blog Page comming soon...</p>
      </div>
    </div>
  );
};
export const BlogPage = React.memo(BlogPageComponent);
