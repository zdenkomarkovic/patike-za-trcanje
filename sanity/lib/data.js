import { client } from './client';
import { categoriesQuery } from './queries';

// Funkcija za dohvatanje kategorija
export async function getCategories() {
  try {
    const categories = await client.fetch(categoriesQuery);
    return categories;
  } catch (error) {
    console.error('Greska pri dohvatanju kategorija:', error);
    return [];
  }
}
