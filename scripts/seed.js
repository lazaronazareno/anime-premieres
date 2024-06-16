const { db } = require('@vercel/postgres')
const fsPromises = require('fs/promises')
const path = require('path')

async function getAllAnimes(req, res) {
  const filePath = path.join(process.cwd(), './app/animeList.json')

  const jsonData = await fsPromises.readFile(filePath)

  const objectData = JSON.parse(jsonData)

  return objectData
}

async function seedAnimeList(client) {
  animeList = await getAllAnimes()
  try {
    // Create the "anime" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS anime (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL,
        premiere TIMESTAMP NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT,
        url VARCHAR(255) NOT NULL,
        onAir BOOLEAN DEFAULT FALSE,
        season VARCHAR(255),
        infoUrl VARCHAR(255)
      );
    `

    console.log(`Created "anime" table`)

    // Insert data into the "anime" table
    const insertedAnime = await Promise.all(
      animeList.map(
        (anime) => client.sql`
        INSERT INTO anime (name, slug, premiere, image, description, url, onAir, season, infoUrl)
        VALUES (${anime.name}, ${anime.slug}, TO_TIMESTAMP(${anime.premiere}, 'DD/MM/YYYY HH:MI AM'), ${anime.image}, ${anime.description}, ${anime.url}, ${anime.onAir}, ${anime.season}, ${anime.infoUrl})
      `
      )
    )

    console.log(`Seeded ${insertedAnime.length} animes`)

    return {
      createTable,
      anime: insertedAnime
    }
  } catch (error) {
    console.error('Error seeding animes:', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedAnimeList(client)

  await client.end()
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
