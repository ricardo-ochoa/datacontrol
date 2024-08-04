import React from 'react';
import Link from 'next/link';
import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="mt-4 mb-4 text-left flex">
                    <svg className="h-5 w-5 text-gray-700 mr-1 align-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
                    <Link href="/" className="text-black hover:underline">Regresar al Inicio</Link>
                </div>
                <div className="flex h-20 w-full items-end rounded-lg bg-emerald-50 p-3 md:h-36">
                    <div className="w-full text-white md:w-full">
                        <AcmeLogo />
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}
