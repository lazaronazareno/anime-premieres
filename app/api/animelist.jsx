import fsPromises from 'fs/promises'
import path from 'path'

export async function getAllAnimes(req, res) {
  const filePath = path.join(process.cwd(), './app/animeList.json')

  const jsonData = await fsPromises.readFile(filePath)

  const objectData = JSON.parse(jsonData)

  return objectData
}
