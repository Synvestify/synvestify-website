import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Synvestify — Synchronizing Your Investments',
  description: 'Synvestify offers expert mutual fund distribution, tax planning, insurance advisory, and retirement planning. Serving 100+ clients across India, USA, UK & Canada.',
  keywords: 'mutual fund distributor, tax planning India, insurance advisor, retirement planning, SIP investment, NRI investment India',
  openGraph: {
    title: 'Synvestify — Grow Wealth with Purpose & Clarity',
    description: 'Unbiased, research-backed financial advisory. Pan India, USA, UK & Canada.',
    url: 'https://www.synvestify.in',
    siteName: 'Synvestify',
    type: 'website',
  },
  alternates: { canonical: 'https://www.synvestify.in' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D0RPKB2CRJ" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-D0RPKB2CRJ');` }} />

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FinancialService',
          name: 'Synvestify', url: 'https://www.synvestify.in',
          telephone: '+91-9599698871', email: 'support@synvestify.in',
          address: { '@type': 'PostalAddress', streetAddress: '14-F Nivedita Enclave A-6 Paschim Vihar', addressLocality: 'New Delhi', postalCode: '110063', addressCountry: 'IN' },
          serviceType: ['Mutual Fund Distribution', 'Tax Planning', 'Insurance Planning', 'Retirement Planning', 'Wealth Management'],
          areaServed: ['India', 'USA', 'UK', 'Canada'],
        })}} />
      </head>

      <body>{children}</body>

      {/* Truxl SDK */}
      <Script
        src="https://sdk.truxl.com/javascript/truxl-0.1.0.umd.js"
        strategy="afterInteractive"
      />

      {/* Truxl Init */}
      <Script
        id="truxl-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: `
          function initTruxl() {
            if (window.truxl && window.truxl.TruxlClient) {
              window._truxl = new window.truxl.TruxlClient({
                projectToken: 'YOUR_PROJECT_TOKEN',
                clientSecret: 'YOUR_CLIENT_SECRET',
                apiEndpoint: 'https://ingestion.api.truxl.com',
                batchSize: 20,
                flushInterval: 5000,
                maxQueueSize: 10000,
                retryAttempts: 5,
                retryBaseDelay: 1000,
                transport: 'http',
                track_pageview: true,
                autocapture: true,
                debug: true,
              });
            } else {
              setTimeout(initTruxl, 100);
            }
          }
          initTruxl();
        `}}
      />

    </html>
  )
}