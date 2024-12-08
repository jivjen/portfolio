import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jival Jenson | Master of Adaptation, Conqueror of Tech Stacks',
  description: 'Personal portfolio of Jival Jenson, a versatile software engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}