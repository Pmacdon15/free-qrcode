import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Free QR Code Generator',
	description:
		'Generate QR codes instantly - Simple, free, and no sign up required. Create and download QR codes for your URLs.',
	keywords: [
		'QR code generator',
		'Free QR code generator',
		'free QR code',
		'QR code creator',
		'URL QR code',
		'instant QR code',
		'free QR code creator',
		'free QR code maker',
		'QR code maker',
		'generate QR code free',
		'QR code for URL',
		'download QR code',
		'QR code online free',
		'free QR code download',
		'simple QR code generator',
		'no sign up QR code generator',
		'create QR code free',
		'free QR code tool',
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
