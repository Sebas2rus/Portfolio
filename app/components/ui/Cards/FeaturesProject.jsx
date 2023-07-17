import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function FeaturesProject({ data }) {
  console.log(data);

  return (
    <div>
      {data.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="cardFeatured">
          <Link
            className="cardFeaturedWrapper"
            href="https://www.wextensible.com/temas/css3-alinear/block.html"
          >
            <Image
              className="cardFeaturedWrapperImage"
              src={item.image}
              width={1280}
              height={720}
              alt="Projects images"
            />
          </Link>

          <div className="cardFeaturedProject">
            <div className="cardFeaturedProjectHeader">
              <Link
                href="https://icons.getbootstrap.com/icons/box-arrow-up-right/"
                target="_blank"
              >
                <h4 className="cardFeaturedProjectHeaderTitle">{item?.title}</h4>
                <h3 className="cardFeaturedProjectHeaderName">{item?.name}</h3>
              </Link>
            </div>

            <p className="cardFeaturedProjectDescription">
              <PortableText value={item.description} />
            </p>

            <ul className="cardFeaturedProjectTechnologies">
              {item?.technologies.map((technology, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={i + 10}>{technology}</li>
              ))}
            </ul>
            <div>
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
            </div>
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
        </div>
      ))}
    </div>
  );
}
