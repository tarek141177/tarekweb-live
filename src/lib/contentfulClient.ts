// src/lib/contentfulClient.ts

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const BASE_URL = `https://cdn.contentful.com/spaces/${space}/environments/master`;

export async function fetchEntries(contentType: string) {
  const url = `${BASE_URL}/entries?content_type=${contentType}&access_token=${accessToken}&include=1`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Contentful fetch error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
