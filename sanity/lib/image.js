import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}

export async function getByType(type, extras) {
  const result = await client.fetch(`*[_type == $type] { ${extras} }`, {
    type,
  });
  return result;
}

export async function getById(id, extras = '...') {
  const result = await client.fetch(`*[_id == $id] { ${extras} }[0]`, {
    id,
  });
  return result;
}

export async function getBySlug(slug, extras = '...') {
  const result = await client.fetch(
    `*[slug.current == $slug] { ${extras} }[0]`,
    {
      slug,
    }
  );
  return result;
}

export async function getRoom(slug, extras = '...') {
  const result = await client.fetch(
    `*[_type == "room" && slug.current == $slug] { ${extras} }[0]`,
    {
      slug,
    }
  );
  return result;
}

export async function getByQuery(query, extras, args = {}) {
  const result = await client.fetch(
    `*[${query}] { ${extras} }   | order(_createdAt desc) [${args.start}...${args.end}]`,
    {
      ...args,
    }
  );
  return result;
}

export async function getCount(type) {
  const result = await client.fetch(`count(*[_type == $type]) `, {
    type,
  });
  return result;
}