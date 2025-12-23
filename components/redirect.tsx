'use client'


import { redirect, usePathname } from 'next/navigation'



export default function Redirect() {



    const pathname = usePathname()

    
    // project
    if (
        pathname.toLowerCase().startsWith('/research/kai0')
    ) {
        redirect('/research/kai0')
    }



    redirect('/')
    return (
        <main className='w-full'></main>
    )
}
