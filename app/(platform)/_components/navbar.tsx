'use client'

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserButton } from '@clerk/nextjs';
import { useHasMounted } from '@/hooks/use-has-mounted';

export const Navbar = () => {

    const isMounted = useHasMounted();

    if (!isMounted) {
        return null;
    }

    return (
        <nav className='flex items-center justify-between h-6'>
            <ThemeToggle />
            <div className='flex gap-4 items-center justify-center'>
                <Button>Analytics</Button>
                <Button>Tracker</Button>
                <Button>Change Log</Button>
            </div>
            <UserButton afterSignOutUrl='/' />
        </nav>
    );
};
