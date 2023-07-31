/* eslint-disable react/no-unstable-nested-components */
import { PortableText } from '@portabletext/react';
import React from 'react';

export default function MyPortableTextComponents({ value }) {
  const myPortableTextComponents = {
    marks: {
      link: ({ children, valuei }) => {
        const rel = !valuei?.href.startsWith('/') ? 'noreferrer noopener' : undefined;
        return (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a rel={rel} href={valuei.href} target="_blank" className="underline-crecent">
            {children}
          </a>
        );
      },
    },
  };

  return <PortableText value={value} components={myPortableTextComponents} />;
}
