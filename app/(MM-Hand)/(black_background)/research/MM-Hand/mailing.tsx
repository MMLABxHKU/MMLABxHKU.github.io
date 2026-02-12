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
    <section className="w-full py-20 md:py-32 px-4 md:px-6 relative" id="preorder">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-500" />
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-500" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 mb-4">
            PREORDER & STAY UPDATED
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Subscribe to be among the first to experience MM-Hand 1.0 and get official updates.
          </p>
        </div>

        {/* Subscription form */}
        <div className="relative group">
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Form container */}
          <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-emerald-500/30 p-6 md:p-10">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-emerald-400/50 rounded-br-2xl" />
            
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Email input */}
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  required
                  placeholder="neural.interface@future.io"
                  className={cn(
                    "w-full px-6 py-4 rounded-xl bg-black/40 border transition-all duration-300",
                    "placeholder:text-gray-600 text-emerald-300 font-mono",
                    "focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50",
                    focused ? "border-emerald-500/50" : "border-emerald-500/20",
                    valid && !focused ? "border-cyan-500/50" : ""
                  )}
                />
                {/* Input status indicator */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                  {email && (
                    valid ? (
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    ) : (
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    )
                  )}
                </div>
              </div>

              {/* Submit button */}
              <div className="relative group/btn sm:w-auto">
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-0 transition-opacity duration-300",
                  valid && !loading && "group-hover/btn:opacity-60"
                )} />
                
                <button
                  type="submit"
                  disabled={!valid || loading}
                  className={cn(
                    "relative w-full sm:w-auto px-8 py-4 rounded-xl font-bold tracking-wider uppercase transition-all duration-300",
                    "border-2 text-sm",
                    valid && !loading
                      ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-500 text-emerald-300 hover:bg-emerald-500/30 hover:text-white"
                      : "bg-black/40 border-gray-700 text-gray-600 cursor-not-allowed"
                  )}
                >
                  <div className="flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                        <span>Processing</span>
                      </>
                    ) : subscribed ? (
                      <>
                        <span>✓ Confirmed</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </form>

            {/* Status message */}
            {subscribed && (
              <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <p className="text-emerald-400 text-sm font-mono">
                  Transmission successful. You're on the priority list.
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        </div>
      </div>
    </section>
  )
}
