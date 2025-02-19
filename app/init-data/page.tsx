'use client';

import { useMemo } from 'react';
import { useSignal, initData/* , type User  */} from '@telegram-apps/sdk-react';
import Image from 'next/image';

/* function getUserRows(user: User) {
    return [
        { title: 'id', value: user.id.toString() },
        { title: 'username', value: user.username },
        { title: 'photo_url', value: user.photo_url },
        { title: 'last_name', value: user.last_name },
        { title: 'first_name', value: user.first_name },
        { title: 'is_bot', value: user.is_bot },
        { title: 'is_premium', value: user.is_premium },
        { title: 'language_code', value: user.language_code },
        { title: 'allows_to_write_to_pm', value: user.allows_write_to_pm },
        { title: 'added_to_attachment_menu', value: user.added_to_attachment_menu },
    ];
} */

export default function InitDataPage() {
    const initDataRaw = useSignal(initData.raw);
    const initDataState = useSignal(initData.state);

    const initDataRows = useMemo(() => {
        if (!initDataState || !initDataRaw) {
            return;
        }
        const {
            auth_date,
            hash,
            query_id,
            chat_type,
            chat_instance,
            can_send_after,
            start_param,
        } = initDataState;
        return [
            { title: 'raw', value: initDataRaw },
            { title: 'auth_date', value: auth_date.toLocaleString() },
            { title: 'auth_date (raw)', value: auth_date.getTime() / 1000 },
            { title: 'hash', value: hash },
            {
                title: 'can_send_after',
                value: initData.canSendAfterDate()?.toISOString(),
            },
            { title: 'can_send_after (raw)', value: can_send_after },
            { title: 'query_id', value: query_id },
            { title: 'start_param', value: start_param },
            { title: 'chat_type', value: chat_type },
            { title: 'chat_instance', value: chat_instance },
        ];
    }, [initDataState, initDataRaw]);

/*     const userRows = useMemo(() => {
        return initDataState && initDataState.user
            ? getUserRows(initDataState.user)
            : undefined;
    }, [initDataState]);

    const receiverRows = useMemo(() => {
        return initDataState && initDataState.receiver
            ? getUserRows(initDataState.receiver)
            : undefined;
    }, [initDataState]); */

/*     const chatRows = useMemo(() => {
        if (!initDataState?.chat) {
            return;
        }
        const {
            id,
            title,
            type,
            username,
            photo_url,
        } = initDataState.chat;

        return [
            { title: 'id', value: id.toString() },
            { title: 'title', value: title },
            { title: 'type', value: type },
            { title: 'username', value: username },
            { title: 'photo_url', value: photo_url },
        ];
    }, [initData]); */

    if (!initDataRows) {
        return (
            <div>
                <Image
                    alt="Telegram sticker"
                    src="https://xelene.me/telegram.gif"
                    style={{ display: 'block', width: '144px', height: '144px' }}
                />
            </div>
        );
    }
    return (
        <div>
            <div>
                {initDataRaw}
            </div>
        </div>
    );
};