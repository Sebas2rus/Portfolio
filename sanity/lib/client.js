import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

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
