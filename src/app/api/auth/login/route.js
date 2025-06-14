// src/app/api/auth/login/route.js
import pool from '@/lib/db';

export async function POST(req) {
    const { email } = await req.json();

    try {
        const result = await pool.query(
            'SELECT * FROM students WHERE email = $1',
            [email]
        );

        if (result.rows.length === 0) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(result.rows[0]), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
