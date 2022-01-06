// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import { join } from "path";

export default function helloAPI(req, res) {
  const data = fs.readFileSync(
    join(process.cwd(),'lib/data.json'), 
    'utf8'
  )
  res.status(200).json(data)
}
