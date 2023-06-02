import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line object-curly-newline
export default function Photo({ width, height, alt, image }) {
  return (
    <div>
      <div className="photo">
        <Image className="photoImg" src={image} alt={alt} width={width} height={height} />
        <div className="photoBack" />
      </div>
    </div>
  );
}
