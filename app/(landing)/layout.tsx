import { Navbar } from '@/app/(landing)/_components/navbar';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='h-full'>
            <Navbar />
            {children}
        </main>
    );
}
