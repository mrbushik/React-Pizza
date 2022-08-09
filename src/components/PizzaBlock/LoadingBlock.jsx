import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={0}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="129" cy="133" r="128" />
      <rect x="-2" y="273" rx="6" ry="6" width="280" height="26" />
      <rect x="-2" y="313" rx="6" ry="6" width="280" height="84" />
      <rect x="1" y="416" rx="6" ry="6" width="85" height="30" />
      <rect x="140" y="414" rx="18" ry="18" width="135" height="36" />
    </ContentLoader>
  );
}

export default LoadingBlock;
