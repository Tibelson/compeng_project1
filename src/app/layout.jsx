import './globals.css';
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
    title: 'Computer Engineering Student System',
    description: 'Manage students, fees, courses, lecturers, and TAs',
};


export default function RootLayout({ children }) {

    return (
        <html lang="en">
        <body className={comfortaa.className}>
        {children}
        </body>
        </html>
    );
}
