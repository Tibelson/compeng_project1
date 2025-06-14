// src/lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'comp_eng_db',
    password: '1Hope2recall',
    port: 5432,
});

export default pool;
