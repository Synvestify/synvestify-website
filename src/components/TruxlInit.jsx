'use client'

import { useEffect } from 'react'

export default function TruxlInit() {
  useEffect(() => {
    try {
      // Check if TruxlClient is available globally
      if (typeof window !== 'undefined' && window.TruxlClient) {
        const truxl = new window.TruxlClient({
          // Required - Replace with your actual values
          projectToken: process.env.NEXT_PUBLIC_TRUXL_PROJECT_TOKEN || 'YOUR_PROJECT_TOKEN',
          clientSecret: process.env.NEXT_PUBLIC_TRUXL_CLIENT_SECRET || 'YOUR_CLIENT_SECRET',

          // Optional
          apiEndpoint: 'https://ingestion.api.truxl.com',
          batchSize: 20,
          flushInterval: 5000,
          maxQueueSize: 10000,
          retryAttempts: 5,
          retryBaseDelay: 1000,
          transport: 'http',
          track_pageview: true,
          autocapture: false,
          debug: false,
        })

        // Expose globally for other components
        window.truxl = truxl
        console.log('✅ Truxl analytics initialized')
      } else {
        console.warn('⚠️ Truxl SDK not available. Please add the Truxl script tag.')
      }
    } catch (error) {
      console.error('❌ Truxl initialization failed:', error)
    }
  }, [])

  return null
}
