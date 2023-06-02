import React from 'react';

export default function SectionTitle({ title, number }) {
  return (
    <div className="section">
      <h2 className="sectionTitle">
        <span>{number}.</span> {title}
      </h2>
      <div className="sectionLine" />
    </div>
  );
}
