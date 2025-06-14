'use client';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [outstandingFees, setOutstandingFees] = useState([]);

    useEffect(() => {
        fetch('/api/dashboard/students').then(res => res.json()).then(setStudents);
        fetch('/api/dashboard/courses').then(res => res.json()).then(setCourses);
        fetch('/api/dashboard/fees').then(res => res.json()).then(setOutstandingFees);
    }, []);

    return (
        <div className="p-6 space-y-8">
            <h1 className="text-2xl font-bold"> Dashboard</h1>

            {/* Students */}
            <section>
                <h2 className="text-xl font-semibold mb-2">Students</h2>
                <ul className="list-disc ml-5">
                    {students.map(s => (
                        <li key={s.student_id}>{s.full_name} (Level {s.level})</li>
                    ))}
                </ul>
            </section>

            {/* Course Enrollments */}
            <section>
                <h2 className="text-xl font-semibold mb-2"> Course Enrollments</h2>
                <ul className="list-disc ml-5">
                    {courses.map(c => (
                        <li key={`${c.student_id}-${c.course_code}`}>
                            Student #{c.student_id} → {c.course_code}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Outstanding Fees */}
            <section>
                <h2 className="text-xl font-semibold mb-2"> Outstanding Fees</h2>
                <ul className="list-disc ml-5">
                    {outstandingFees.map(f => (
                        <li key={f.student_id}>
                            Student #{f.student_id} owes GHS {f.outstanding}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
