'use client'
import { ReactNode, useEffect } from 'react';

import { init, useSignal, backButton } from '@telegram-apps/sdk-react'

export const TelegramProvider = ({ children }: { children: ReactNode }) => {
    const isVisible = useSignal(backButton.isVisible);

    useEffect(() => {
        console.log('The button is', isVisible ? 'visible' : 'invisible');
    }, [isVisible]);

    useEffect(() => {
        backButton.show();
        return () => {
            backButton.hide();
        };
    }, []);

    init()

    return <div>{children}</div>

}