import { CreateExpenseButton } from '@/components/create-expense-button';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';

export default function Tracker() {
    return (
        <div className='flex flex-col h-full gap-4 items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-6xl'>$0</div>
                <p className='text-muted-foreground'>Spent this month</p>
            </div>
            <div>
                <CreateExpenseButton />
            </div>
        </div>
    );
}
