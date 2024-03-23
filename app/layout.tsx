import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/providers/theme-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Expense Tracker',
    description: 'Expense Tracker. Tracky your expenses and income monthly.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html
                lang='en'
                suppressHydrationWarning
            >
                <body className={inter.className}>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='light'
                        enableSystem={false}
                        themes={['light', 'dark']}
                        disableTransitionOnChange
                    >
                        <div className='container h-full p-4 max-w-7xl overflow-hidden'>{children}</div>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
