import { randomUUID } from "node:crypto"
import { sql } from './db.js'

export class DatabasePostgres {
    async list(search = '') {
        let videos
        
        if (search) {
            videos = await sql `SELECT * FROM VIDEOS WHERE TITLE ILIKE ${"%" + search + "%"}`
        } else {
            videos = await sql `SELECT * FROM VIDEOS`
        }

        return videos
    }

    async create(video) {
        const videoId = randomUUID()
        const { title, description, duration } = video

        await sql`insert into videos (id, title, description, duration) VALUES(${videoId}, ${title}, ${description}, ${duration})`
    }

    async update(id, video) {
        const { title, description, duration } = video

        await sql`
            update videos
            set 
                title = ${title},
                description = ${description},
                duration = ${duration}
            where id = ${id}
        `
    }

    async delete(id) {
        await sql`
            DELETE FROM VIDEOS
            WHERE ID = ${id}
        `
    }
}