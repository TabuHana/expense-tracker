'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { Toggle } from '@/components/ui/toggle';
import { useHasMounted } from '@/hooks/use-has-mounted';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const isMounted = useHasMounted();

    if (!isMounted) {
        return null;
    }
    const onChange = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };
    return (
        <Toggle onPressedChange={() => onChange()}>
            {theme === 'dark' ? <SunIcon className='h-6 w-6' /> : <MoonIcon className='h-6 w-6' />}
        </Toggle>
    );
}
