'use client';
import { useEffect, useState } from 'react';

export default function EnrollPage() {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [studentId, setStudentId] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/dashboard/students').then(res => res.json()).then(setStudents);
        fetch('/api/courses').then(res => res.json()).then(setCourses);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/enroll', {
            method: 'POST',
            body: JSON.stringify({ student_id: studentId, course_code: courseCode }),
        });

        const data = await res.json();
        setMessage(data.message || data.error);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4"> Enroll Student in Course</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block">Student:</label>
                    <select value={studentId} onChange={e => setStudentId(e.target.value)} className="border p-2 w-full">
                        <option value="">-- Select Student --</option>
                        {students.map(s => (
                            <option key={s.student_id} value={s.student_id}>
                                {s.full_name} (#{s.student_id})
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block">Course:</label>
                    <select value={courseCode} onChange={e => setCourseCode(e.target.value)} className="border p-2 w-full">
                        <option value="">-- Select Course --</option>
                        {courses.map(c => (
                            <option key={c.course_code} value={c.course_code}>
                                {c.course_code} - {c.course_title}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Enroll
                </button>
            </form>

            {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
    );
}
