'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PlusIcon, UpdateIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

const expenseSchema = z.object({
    icon: z.string(),
    type: z.enum(['EXPENSE', 'INCOME']),
    amount: z.coerce.number().min(1, "Min amount is 1"),
});

type expenseSchemaType = z.infer<typeof expenseSchema>;

export const CreateExpenseButton = () => {
    const todaysDate = format(new Date(), 'E MMMM dd yyyy');

    const form = useForm<expenseSchemaType>({
        resolver: zodResolver(expenseSchema),
        defaultValues: {
            icon: '',
            type: 'EXPENSE',
            amount: 0,
        },
    });

    const onSubmit = async (data: expenseSchemaType) => {
        console.log(data);
    };

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant='outline'>
                    <PlusIcon className='h-6 w-6' /> Add new Expense
                </Button>
            </DrawerTrigger>
            <DrawerContent className='p-6 h-full flex flex-col items-center justify-center'>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-5'
                    >
                        <div className='w-full mx-auto text-center text-sm text-muted-foreground'>
                            Today at {todaysDate}
                        </div>
                        <FormField
                            control={form.control}
                            name='type'
                            render={({ field }) => (
                                <FormItem className='max-w-lg mx-auto'>
                                    <FormControl>
                                        <Tabs defaultValue='EXPENSE'>
                                            <TabsList className='grid w-full grid-cols-2'>
                                                <TabsTrigger
                                                    {...field}
                                                    value='EXPENSE'
                                                >
                                                    Expense
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    {...field}
                                                    value='INCOME'
                                                >
                                                    Income
                                                </TabsTrigger>
                                            </TabsList>
                                        </Tabs>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='amount'
                            render={({ field }) => (
                                <FormItem className='max-w-xl mx-auto'>
                                    <FormControl>
                                        <Input
                                            placeholder='0'
                                            type='text'
                                            className='text-5xl'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
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
                        <div className='w-full flex items-center justify-center gap-4'>
                            <DrawerClose asChild>
                                <Button
                                    className='flex-1'
                                    size='lg'
                                    variant='outline'
                                >
                                    Cancel
                                </Button>
                            </DrawerClose>
                            <Button
                                className='flex-1'
                                size='lg'
                                onClick={form.handleSubmit(onSubmit)}
                                disabled={form.formState.isSubmitting}
                            >
                                {!form.formState.isSubmitting && <span>Save</span>}
                                {form.formState.isSubmitting && <UpdateIcon className='animate-spin' />}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DrawerContent>
        </Drawer>
    );
};
