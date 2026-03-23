'use client'

import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

export default function MixpanelInit() {
  useEffect(() => {
    try {
      // Expose mixpanel globally for other scripts/code that may need it
      if (typeof window !== 'undefined') {
        window.mixpanel = mixpanel
      }

      // Initialize Mixpanel
      if (mixpanel && typeof mixpanel.init === 'function') {
        mixpanel.init('a23315f00db559a719782a1484ac00b8', { 
          debug: false,
          batch_size: 5,
          persistence: 'localStorage'
        })

        // Track page view with additional context
        mixpanel.track('Page Viewed', {
          path: typeof window !== 'undefined' ? window.location.pathname : '',
          hostname: typeof window !== 'undefined' ? window.location.hostname : '',
          timestamp: new Date().toISOString()
        })

        console.log('✅ Mixpanel initialized successfully')
      } else {
        console.warn('⚠️ Mixpanel library not available after import')
      }
    } catch (error) {
      console.error('❌ Error initializing Mixpanel:', error)
    }
  }, [])

  return null
}
