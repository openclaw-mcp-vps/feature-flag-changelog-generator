import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FlagLog — Auto-generate changelogs from feature flag deployments',
  description: 'Connect to LaunchDarkly, Split, and other feature flag services to automatically generate user-facing changelogs when flags are enabled. AI-powered release notes for product teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="91780eff-77ca-4e11-b0d4-770693667913"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
