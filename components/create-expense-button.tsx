'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PlusIcon, UpdateIcon } from '@radix-ui/react-icons';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

const expenseSchema = z.object({
    icon: z.string(),
    type: z.enum(['EXPENSE', 'INCOME']),
    amount: z.string(),
});

type expenseSchemaType = z.infer<typeof expenseSchema>;

export const CreateExpenseButton = () => {
    const form = useForm<expenseSchemaType>({
        resolver: zodResolver(expenseSchema),
        defaultValues: {
            icon: '',
            type: 'EXPENSE',
            amount: '',
        },
    });

    const onSubmit = async (data: expenseSchemaType) => {
        console.log(data);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>
                    <PlusIcon className='h-6 w-6' /> Add new Expense
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className='flex flex-col items-center'>
                    <DialogTitle>Add a new expense</DialogTitle>
                    <DialogDescription>
                        Add a new expense or income to track your spending and earnings.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name='amount'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Amount</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='icon'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Icon</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='type'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Icon</FormLabel>
                                    <FormControl>
                                        <Tabs defaultValue='EXPENSE'>
                                            <TabsList className='grid w-full grid-cols-2'>
                                                <TabsTrigger value='EXPENSE'>Expense</TabsTrigger>
                                                <TabsTrigger value='INCOME'>income</TabsTrigger>
                                            </TabsList>
                                        </Tabs>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                <DialogFooter>
                    <Button
                        onClick={form.handleSubmit(onSubmit)}
                        disabled={form.formState.isSubmitting}
                        className='w-full mt-4'
                    >
                        {!form.formState.isSubmitting && <span>Save</span>}
                        {form.formState.isSubmitting && <UpdateIcon className='animate-spin' />}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
