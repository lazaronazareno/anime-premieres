import fsPromises from 'fs/promises'
import path from 'path'
import { sql } from '@vercel/postgres'

export async function getAllAnimes(req, res) {
  try {
    /*     await new Promise((resolve) => setTimeout(resolve, 3000))
     */
    const data = await sql`SELECT * FROM anime`

    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch revenue data.')
  }
}

export async function getAnimeBySlug(slug) {
  try {
    /*     await new Promise((resolve) => setTimeout(resolve, 3000))
     */
    const data = await sql`SELECT * FROM anime WHERE anime.slug = ${slug}`
    return data.rows[0]
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch revenue data.')
  }
}
