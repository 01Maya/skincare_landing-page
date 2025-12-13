import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Olea Skin Care 🌿',
  description: 'Olea Skin Care Landing page-Clean and Minimal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
