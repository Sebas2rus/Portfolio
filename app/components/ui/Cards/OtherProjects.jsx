import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function OtherProjects({ data }) {
  const [elementsNumber, setElementsNumber] = useState(4);
  const dataLength = data.length;

  useEffect(() => {
    if (window.innerWidth && window.innerWidth > 1400) {
      setElementsNumber(6);
    }
  }, []);

  return (
    <div>
      <div className="otherProjects">
        {data?.map(
          (item, index) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            elementsNumber > index && (
              <Link
                href="https://outlook.office.com/calendar/view/week"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="otherProjectsCard"
              >
                <div className="otherProjectsCardIcons">
                  <i className="bi bi-folder" />
                  <div className="otherProjectsCardIconsOptional">
                    {item.gitHubUrl && (
                      <button
                        type="button"
                        className="cardFeaturedProjectIcon"
                        href={item?.gitHubUrl}
                      >
                        <i className="bi bi-github" />
                      </button>
                    )}
                    {item.projectUrl && (
                      <button
                        type="button"
                        className="cardFeaturedProjectIcon"
                        href={item?.projectUrl}
                      >
                        <i className="bi bi-box-arrow-up-right" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="otherProjectsCardContent">
                  <h2 className="otherProjectsCardContentTitle">{item.name}</h2>
                  <p className="otherProjectsCardContentDescription">
                    {item.description}
                  </p>
                </div>
                <ul className="otherProjectsCardContentTechnologies">
                  {item?.technologies.map((technology, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={i + 10}>{technology}</li>
                  ))}
                </ul>
              </Link>
              // eslint-disable-next-line comma-dangle
            )
        )}
      </div>
      {dataLength !== elementsNumber ? (
        <button
          type="button"
          onClick={() => setElementsNumber(dataLength)}
          className="btn-outline-green otherProjectsMore"
        >
          Show More
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setElementsNumber(4)}
          className="btn-outline-green otherProjectsMore"
        >
          Show Less
        </button>
      )}
    </div>
  );
}
