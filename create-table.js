import { sql } from './db.js'

// sql`
//     DROP TABLE IF EXISTS VIDEOS;
// `.then(() => {
//     console.log('Tabela apagada!')
// })

sql`
    CREATE TABLE VIDEOS (
        ID          TEXT PRIMARY KEY,
        TITLE       TEXT,
        DESCRIPTION TEXT,
        DURATION    INTEGER
    );
`.then(() => {
    console.log('Tabela Criada!')
})