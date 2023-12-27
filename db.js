import 'dotenv/config'
// Fazendo isso, todas as variáveis do arquivo .env será salva numa variável global chamada procces.env
import postgres from 'postgres'

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env
PGUSER = decodeURIComponent(PGUSER)

export const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
})

async function getPgVersion() {
    const result = await sql`select version()`
    console.log(result)
}
  
getPgVersion()