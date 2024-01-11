import React from 'react';

const NewsBox = () => {
  return (
    <div>
      <h1>Content from The Athletic</h1>
      <iframe
        title="The Athletic Content"
        src="https://www.blogger.com/comment.g?blogID=10004977&postID=9132918473904540368&bpli=1"
        width="100%"
        height="600px"
        frameBorder="0"
      >
        {/* Fallback content or message in case the iframe cannot be loaded */}
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default NewsBox;
