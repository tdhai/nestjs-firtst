import { ConnectionOptions } from "typeorm"

export const config: ConnectionOptions = {
    type: "postgres",
    host: "locahost",
    port: 5432,
    username: 'mediumclone',
    password: '123123',
    database: 'mediumclone'
}