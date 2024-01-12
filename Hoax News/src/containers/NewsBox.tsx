import React from 'react';

const NewsBox = () => {
  return (
    <div>
      <iframe
        title="The Athletic Content"
        src="https://www.wired.com/live/ces-2024-liveblog-3/"
        width="100%"
        height="800px"
        frameBorder="0"
      >
        {/* Fallback content or message in case the iframe cannot be loaded */}
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default NewsBox;
