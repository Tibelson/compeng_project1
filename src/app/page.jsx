import '../styles/home.css';
import Image from 'next/image';

export default function HomePage() {
    return (
        <div className="home-container">
            <Image
                src="/university-of-ghana-seeklogo.png"
                alt="UG Logo"
                width={60}
                height={60}
            />
            <h1>COMPUTER ENGINEERING<br />STUDENT SYSTEM</h1>
            <p>Welcome to the Computer Engineering portal.</p>
            <div className="nav-links">
                <a href="/register">Register</a>
                <a href="/login">Login</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/enroll">Enroll</a>
            </div>
        </div>
    );
}