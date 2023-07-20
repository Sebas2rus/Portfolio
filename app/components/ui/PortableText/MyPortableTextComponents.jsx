import { PortableText } from '@portabletext/react';
import React from 'react';

export default function MyPortableTextComponents({ value }) {
  const myPortableTextComponents = {
    marks: {
      link: ({ children, value }) => {
        const rel = !value?.href.startsWith('/') ? 'noreferrer noopener' : undefined;
        return (
          <a rel={rel} href={value.href} target="_blank" className="underline-crecent">
            {children}
          </a>
        );
      },
    },
  };

  return <PortableText value={value} components={myPortableTextComponents} />;
}
