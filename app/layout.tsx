import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Extension Memory Profiler — Find Which Chrome Extensions Eat RAM',
  description: 'Track memory usage per Chrome extension, detect leaks, and get actionable recommendations. Real-time monitoring for power users, developers, and IT admins.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="94255218-3fe9-43fa-a868-47b7e249ee56"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
