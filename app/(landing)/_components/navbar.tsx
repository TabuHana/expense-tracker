import Link from 'next/link';
import { auth } from '@clerk/nextjs';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export const Navbar = () => {
    const { userId } = auth();

    return (
        <nav className='flex items-center justify-between h-6 mt-4'>
            <ThemeToggle />
            {!userId && (
                <div className='flex gap-4'>
                    <Button
                        variant='outline'
                        size='sm'
                        className='gap-2'
                        asChild
                    >
                        <Link href='/sign-in'>Sign In</Link>
                    </Button>
                    <Button
                        variant='default'
                        size='sm'
                        className='gap-2'
                        asChild
                    >
                        <Link href='/sign-up'>Sign Up</Link>
                    </Button>
                </div>
            )}
            {userId && <h1 className='font-medium tracking-tighter text-lg'>Expense Tracker</h1>}
            {userId && (
                <Button
                    variant='ghost'
                    className='gap-2'
                    asChild
                >
                    <Link href='/tracker'>
                        Tracker <ArrowRightIcon />
                    </Link>
                </Button>
            )}
        </nav>
    );
};
