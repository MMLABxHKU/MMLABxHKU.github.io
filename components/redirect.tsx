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
    if (
        pathname.toLowerCase().startsWith('/sparsevnav')
        || pathname.toLowerCase().startsWith('/mm-vn')
    ) {
        redirect('/research/MM-VN')
    }
    if (
        pathname.toLowerCase().startsWith('/mm-hand')
    ) {
        redirect('/research/MM-Hand')
    }


    redirect('/')
    return (
        <main className='w-full'></main>
    )
}
