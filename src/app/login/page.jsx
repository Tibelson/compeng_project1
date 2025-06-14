'use client';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async e => {
        e.preventDefault();
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email }),
        });
        const data = await res.json();
        setMessage(res.ok ? `Welcome ${data.full_name}` : data.error);
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Login</h1>
            <form onSubmit={handleLogin} className="space-y-2">
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-2" required />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Login</button>
            </form>
            <p className="mt-2 text-blue-700">{message}</p>
        </div>
    );
}
