'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function EmailSubscribe() {
  const [email, setEmail] = useState('')
  const [valid, setValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    const isValid = emailRegex.test(email.trim())
    setValid(isValid && email.trim() !== '')
  }, [email])

  const handleSubmit = async () => {
    if (!valid) return
    setLoading(true)

    const payload = new URLSearchParams()
    payload.append('EMAIL', email)

    try {
      await fetch(
        'https://855a7d8a.sibforms.com/serve/MUIFAHz4QsK7zyKtesM3Mn2YS6UHyOiQq992Mnd5n8FgNeHOvKWagmN6o3rmeXQhFZbvI5MQ7rl83uMs_rhkRbwelvdJYb1OX9stK-cftukgDTm48-8GtbkWVmPNrnL4LSd5IWfAKvqhniQASRY7jCaeaVmRLwHo6RsaG9yVX6roIpRPJaOMRRwOC4dOFz6D49OBl_1HwAl-5jfVOg==',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: payload.toString(),
        }
      )
    } catch (err) {
      // ignore
    } finally {
      setEmail('')
      setSubscribed(true)
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && valid && !loading) {
      handleSubmit()
    }
  }

  return (
          <section className="w-full py-32 px-6" id="preorder">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Preorder & Stay Updated
            </h2>
            <p className="mt-6 text-neutral-400 text-lg">
            Subscribe to be among the first to experience MM-Hand and get official updates.
            </p>
  
            <div className="mt-14 relative rounded-2xl p-[2px] bg-gradient-to-tr from-purple-900 via-blue-900 to-green-900 animate-gradient">
              <div className="rounded-2xl backdrop-blur-2xl bg-black/20 border border-white/10 p-8">
              <form
  onSubmit={(e) => {
    e.preventDefault()
    handleSubmit()
  }}
  className="flex flex-col sm:flex-row gap-4"
>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    onKeyDown={handleKeyDown}
    required
    placeholder="Enter your email"
    className="flex-1 px-5 py-3 rounded-xl bg-black/20 border border-white/20 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
  />

  <div className="rounded-xl p-[2px] bg-gradient-to-tr from-purple-900 via-blue-900 to-green-900 animate-gradient">
    <div className="bg-black/20 backdrop-blur-xl rounded-xl px-6 py-3 hover:bg-white/10 transition animate-hover-scale">
      <button
        type="submit"
        disabled={!valid || loading}
        className={cn(
          "select-none w-full",
          (!valid || loading) && "opacity-50 cursor-not-allowed"
        )}
      >
        {loading ? "Submitting..." : subscribed ? "Subscribed ✓" : "Subscribe"}
      </button>
    </div>
  </div>
</form>

              </div>
            </div>
          </div>
        </section>
  )
}
