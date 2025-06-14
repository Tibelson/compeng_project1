import pool from '@/lib/db';

export async function POST(req) {
    try {
        const { student_id, course_code } = await req.json();

        await pool.query(
            'INSERT INTO courses_enrollments (student_id, course_code) VALUES ($1, $2)',
            [student_id, course_code]
        );

        return new Response(JSON.stringify({ message: '✅ Student enrolled successfully!' }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
