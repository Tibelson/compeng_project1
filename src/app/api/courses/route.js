import pool from '@/lib/db';

export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM courses');
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
