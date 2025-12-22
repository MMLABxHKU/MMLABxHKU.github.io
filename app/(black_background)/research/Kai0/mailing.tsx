'use client'

import { useState, useEffect } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"


const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



export function EmailSubscribe() {

    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false)
    const [loading, setLoading] = useState(false)
    const [placeholder, setPlaceholder] = useState('email');
    useEffect(() => {
        const isValid = emailRegex.test(email.trim())
        setValid(isValid && email.trim() !== '')
    }, [email])

    const handleSubmit = async () => {
        if (!valid) return
        setLoading(true)

        const payload = new URLSearchParams();
        payload.append('EMAIL', email);

        try {
            const res = await fetch('https://855a7d8a.sibforms.com/serve/MUIFAHvMRnDHa-jw4GgbBzFCpeKTBcfAAdQ3_WHz5m5GOJugx2h3srw6PTCk83XziouQJcGG2pJTjzn4OKE0Cv7LIso36yIAoGhqLEpoirjTXqBTLUJZADYRdK4TthSDzVc7sqE4-OzpB2lRvhyVQnlWN6z6TG6IxUH-x8_8TwoB_XseDAtD1XHWvYaTmmZjHg53ufU6HK5VoTa60A==', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: payload.toString(),
            })
        } catch (err) {
        } finally {
            setEmail('')
            setPlaceholder("subscribed");
            setLoading(false)
        }
    }

    const handleFocus = () => {
        if (placeholder === "subscribed") {
            setPlaceholder("email");
        }
    };

    return (
        <div className="w-full flex flex-row gap-3 items-center">
            <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocus}
                className='rounded-sm h-6 focus-visible:ring-0'
            />
            <Button onClick={handleSubmit} disabled={!valid || loading} className='h-6 p-2 font-fore bg-blackground rounded-sm'>
                {loading ? '...' : "subscribe"}
            </Button>
        </div>
    )
}
