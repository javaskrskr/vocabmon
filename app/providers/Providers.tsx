"use client";
import { ReactNode } from "react";
import { Session } from "next-auth";
import AuthProvider from "./AuthProvider";
import VocabmonProvider from "./VocamonProvider";

export default function Providers({
    children,
    cookie,
    session,
}: {
    children: ReactNode;
    cookie: string;
    session: Session;
}) {
    return (
        <AuthProvider session={session}>
            <VocabmonProvider cookie={cookie}>{children}</VocabmonProvider>
        </AuthProvider>
    );
}