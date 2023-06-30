import Link from 'next/link';
import React from 'react';

export default function FeaturesProject({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="cardFeaturedProject">
          <div className="cardFeaturedProjectHeader">
            <Link
              href="https://icons.getbootstrap.com/icons/box-arrow-up-right/"
              target="_blank"
            >
              <h4 className="cardFeaturedProjectHeaderTitle">{item?.title}</h4>
              <h3 className="cardFeaturedProjectHeaderName">{item?.name}</h3>
            </Link>
          </div>

          <p className="cardFeaturedProjectDescription">{item?.description}</p>
          <ul className="cardFeaturedProjectTechnologies">
            {item?.technologies.map((technology, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={i + 10}>{technology}</li>
            ))}
          </ul>
          {item.gitHubUrl && (
            <Link
              target="_blank"
              className="cardFeaturedProjectIcon"
              href={item?.gitHubUrl}
            >
              <i className="bi bi-github" />
            </Link>
          )}
          {item.hostedUrl && (
            <Link
              target="_blank"
              className="cardFeaturedProjectIcon"
              href={item?.hostedUrl}
            >
              <i className="bi bi-box-arrow-up-right" />
            </Link>
          )}
          {item.readMoreUrl && (
            <Link
              target="_blank"
              className="btn-outline-green cardFeaturedProjectMore"
              href={item?.readMoreUrl}
            >
              ReadMore
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
