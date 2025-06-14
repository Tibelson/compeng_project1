// src/app/api/auth/register/route.js
import pool from '@/lib/db';

export async function POST(req) {
    const { student_id, full_name, level, email, phone } = await req.json();

    try {
        const result = await pool.query(
            'INSERT INTO students (student_id, full_name, level, email, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [student_id, full_name, level, email, phone]
        );

        return new Response(JSON.stringify(result.rows[0]), { status: 201 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
