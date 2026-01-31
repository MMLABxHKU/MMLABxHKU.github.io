'use client'


import { redirect, usePathname } from 'next/navigation'



export default function Redirect() {



    const pathname = usePathname()

    
    // project
    if (
        pathname.toLowerCase().startsWith('/kai0')
        || pathname.toLowerCase().startsWith('/research/kai0')
    ) {
        if (
            pathname.toLowerCase().startsWith('/research/kai0rl')
            || pathname.toLowerCase().startsWith('/research/kai0-rl')
            || pathname.toLowerCase().startsWith('/kai0rl')
            || pathname.toLowerCase().startsWith('/kai0-rl')
        ) {
            redirect('https://opendrivelab.com/kai0-RL')
        } else {
            redirect('/research/kai0/')
        }
    }
    if (
        pathname.toLowerCase().startsWith('/foldanything')
    ) {
        redirect('/research/kai0/')
    }
    if (
        pathname.toLowerCase().startsWith('/sparsevnav')
        || pathname.toLowerCase().startsWith('/mm-vn')
        || pathname.toLowerCase().startsWith('/research/mm-vn')
    ) {
        redirect('/research/MM-VN')
    }
    if (
        pathname.toLowerCase().startsWith('/mm-hand')
        || pathname.toLowerCase().startsWith('/research/mm-hand')
    ) {
        redirect('/research/MM-Hand')
    }
    if (
        pathname.toLowerCase().startsWith('/egohumanoid')
        || pathname.toLowerCase().startsWith('/kaidata')
        || pathname.toLowerCase().startsWith('/research/egohumanoid')
        || pathname.toLowerCase().startsWith('/research/kaidata')
    ) {
        redirect('https://opendrivelab.com/EgoHumanoid')
    }


    redirect('/')
    return (
        <main className='w-full'></main>
    )
}
