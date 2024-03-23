import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const { userId } = auth();

    if (userId) {
        redirect('/tracker');
    }

    return <div className='h-full flex items-center justify-center'>{children}</div>;
}
