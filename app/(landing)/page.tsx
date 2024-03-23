import Link from 'next/link';
import { Teko } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const teko = Teko({ subsets: ['latin'] });

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center h-full gap-4'>
            <div className='flex flex-col items-center'>
                <h1 className={cn(teko.className, 'text-5xl font-semibold tracking-tight')}>Expense Tracker 💵</h1>
                <h4 className='text-muted-foreground tracking-wide text-center'>
                    A simple expense tracker <span className='text-foreground underline'>completely free.</span>
                </h4>
            </div>
            <Button asChild>
                <Link href='/sign-up'>Join for free</Link>
            </Button>
        </div>
    );
}
