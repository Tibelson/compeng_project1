import pool from '@/lib/db';

export async function GET() {
    try {
        const result = await pool.query('SELECT get_outstanding_fees()');
        const jsonData = result.rows[0].get_outstanding_fees;
        return new Response(JSON.stringify(jsonData), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
