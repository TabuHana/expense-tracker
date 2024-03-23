import { Navbar } from '@/app/(platform)/_components/navbar';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='h-full '>
            <Navbar />
            {children}
        </main>
    );
}
