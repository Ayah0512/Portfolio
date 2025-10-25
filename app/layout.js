import './globals.css';

export const metadata = {
    title: 'My Portfolio',
    description: 'Wwelcome to the portfolio of Aya Hasegawa.',
    };

    export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
    </html>
    );
}
