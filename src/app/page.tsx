'use client'
import {
	Download,
	Link as LinkIcon,
	Palette,
	QrCode as QrCodeIcon,
	Sparkles,
} from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { useRef, useState } from 'react'

export default function Home() {
	const [qrCodeUrl, setQRCodeUrl] = useState<string>('https://www.patmac.ca')
	const [fgColor, setFgColor] = useState<string>('#8b5cf6') // Purple
	const [bgColor, setBgColor] = useState<string>('#ffffff') // White
	const inputRef = useRef<HTMLInputElement>(null)

	const handleGenerateQRCode = (e: React.FormEvent) => {
		e.preventDefault() // Prevent page reload

		if (inputRef.current) {
			const value = inputRef.current.value
			if (!value.startsWith('http://') && !value.startsWith('https://')) {
				inputRef.current.value = `https://${value}`
			}
			setQRCodeUrl(inputRef.current.value)
		}
	}

	const handleDownloadQrCode = () => {
		const svg = document.querySelector('#qrCode')
		if (svg) {
			const svgData = new XMLSerializer().serializeToString(svg)
			const canvas = document.createElement('canvas')
			const ctx = canvas.getContext('2d')
			const img = new Image()
			img.onload = () => {
				canvas.width = img.width
				canvas.height = img.height
				ctx?.drawImage(img, 0, 0)
				const pngFile = canvas.toDataURL('image/png')
				if (pngFile) {
					// Check if pngFile isn't empty
					const downloadLink = document.createElement('a')
					downloadLink.download = 'QRCode.png'
					downloadLink.href = pngFile
					downloadLink.click()
				} else {
					console.error('Failed to generate QR code image')
				}
			}
			img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
		}
	}

	return (
		<div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<div className="glass mt-8 flex w-full max-w-2xl flex-col items-center gap-8 rounded-3xl p-8 shadow-2xl">
				<div className="flex w-full flex-col gap-6">
					<InputForm
						inputRef={inputRef}
						onGenerate={handleGenerateQRCode}
					/>

					{/* Color Presets */}
					<div className="glass rounded-2xl p-4">
						<div className="mb-3 flex items-center gap-2 text-gray-300 text-sm">
							<Sparkles className="h-4 w-4" />
							Quick Styles
						</div>
						<div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
							<button
								className="glass rounded-lg p-3 transition-transform hover:scale-105"
								onClick={() => {
									setFgColor('#8b5cf6')
									setBgColor('#ffffff')
								}}
								title="Purple Haze"
								type="button"
							>
								<div
									className="h-8 w-full rounded"
									style={{
										background:
											'linear-gradient(135deg, #8b5cf6 0%, #ffffff 100%)',
									}}
								></div>
							</button>
							<button
								className="glass rounded-lg p-3 transition-transform hover:scale-105"
								onClick={() => {
									setFgColor('#3b82f6')
									setBgColor('#dbeafe')
								}}
								title="Ocean Blue"
								type="button"
							>
								<div
									className="h-8 w-full rounded"
									style={{
										background:
											'linear-gradient(135deg, #3b82f6 0%, #dbeafe 100%)',
									}}
								></div>
							</button>
							<button
								className="glass rounded-lg p-3 transition-transform hover:scale-105"
								onClick={() => {
									setFgColor('#f97316')
									setBgColor('#fff7ed')
								}}
								title="Sunset"
								type="button"
							>
								<div
									className="h-8 w-full rounded"
									style={{
										background:
											'linear-gradient(135deg, #f97316 0%, #fff7ed 100%)',
									}}
								></div>
							</button>
							<button
								className="glass rounded-lg p-3 transition-transform hover:scale-105"
								onClick={() => {
									setFgColor('#10b981')
									setBgColor('#ecfdf5')
								}}
								title="Forest"
								type="button"
							>
								<div
									className="h-8 w-full rounded"
									style={{
										background:
											'linear-gradient(135deg, #10b981 0%, #ecfdf5 100%)',
									}}
								></div>
							</button>
							<button
								className="glass rounded-lg p-3 transition-transform hover:scale-105"
								onClick={() => {
									setFgColor('#ec4899')
									setBgColor('#fdf2f8')
								}}
								title="Rose Gold"
								type="button"
							>
								<div
									className="h-8 w-full rounded"
									style={{
										background:
											'linear-gradient(135deg, #ec4899 0%, #fdf2f8 100%)',
									}}
								></div>
							</button>
							<button
								className="glass rounded-lg p-3 transition-transform hover:scale-105"
								onClick={() => {
									setFgColor('#06b6d4')
									setBgColor('#0f172a')
								}}
								title="Neon"
								type="button"
							>
								<div
									className="h-8 w-full rounded"
									style={{
										background:
											'linear-gradient(135deg, #06b6d4 0%, #0f172a 100%)',
									}}
								></div>
							</button>
						</div>
					</div>

					{/* Color Customization */}
					<div className="flex w-full flex-col gap-4 sm:flex-row">
						<div className="glass flex-1 rounded-2xl p-4">
							<label
								className="mb-2 flex items-center gap-2 text-gray-300 text-sm"
								htmlFor="fgColor"
							>
								<Palette className="h-4 w-4" />
								QR Color
							</label>
							<div className="flex items-center gap-2">
								<input
									className="h-12 w-12 cursor-pointer rounded-lg border-2 border-white/20"
									id="fgColor"
									onChange={(e) => setFgColor(e.target.value)}
									type="color"
									value={fgColor}
								/>
								<input
									className="glass flex-1 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
									onChange={(e) => setFgColor(e.target.value)}
									type="text"
									value={fgColor}
								/>
							</div>
						</div>

						<div className="glass flex-1 rounded-2xl p-4">
							<label
								className="mb-2 flex items-center gap-2 text-gray-300 text-sm"
								htmlFor="bgColor"
							>
								<Palette className="h-4 w-4" />
								Background
							</label>
							<div className="flex items-center gap-2">
								<input
									className="h-12 w-12 cursor-pointer rounded-lg border-2 border-white/20"
									id="bgColor"
									onChange={(e) => setBgColor(e.target.value)}
									type="color"
									value={bgColor}
								/>
								<input
									className="glass flex-1 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
									onChange={(e) => setBgColor(e.target.value)}
									type="text"
									value={bgColor}
								/>
							</div>
						</div>
					</div>

					<button
						className="group relative flex w-full transform items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-lg transition-all duration-300 ease-in-out hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/50 active:scale-95"
						onClick={handleDownloadQrCode}
						type="button"
					>
						<span className="flex items-center gap-3 font-semibold text-lg text-white">
							<Download className="h-5 w-5" />
							Download QR Code
						</span>
					</button>
				</div>
				<div className="glass rounded-2xl bg-white/10 p-8 shadow-xl">
					{qrCodeUrl && (
						<QRCodeSVG
							bgColor={bgColor}
							fgColor={fgColor}
							id="qrCode"
							imageSettings={{
								src: '',
								x: undefined,
								y: undefined,
								height: 0,
								width: 0,
								excavate: true,
							}}
							includeMargin={true}
							level="H"
							size={256}
							value={qrCodeUrl}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

function Header() {
	return (
		<div className="flex flex-col items-center gap-4 text-center">
			<div className="flex items-center gap-3">
				<QrCodeIcon
					className="h-12 w-12 text-purple-400"
					strokeWidth={2}
				/>
				<Sparkles className="h-8 w-8 animate-pulse text-cyan-400" />
			</div>
			<h1 className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text font-bold text-5xl text-transparent md:text-6xl">
				Free QR Code Generator
			</h1>
			<p className="max-w-md text-gray-300 text-lg">
				Create stunning QR codes instantly. Simple, fast, and completely
				free.
			</p>
		</div>
	)
}

interface InputFormProps {
	inputRef: React.RefObject<HTMLInputElement | null>
	onGenerate: (e: React.FormEvent) => void
}

function InputForm({ inputRef, onGenerate }: InputFormProps) {
	return (
		<form className="flex w-full flex-col gap-4 sm:flex-row">
			<div className="relative flex-1">
				<LinkIcon className="-translate-y-1/2 absolute top-1/2 left-4 h-5 w-5 text-gray-400" />
				<input
					className="glass w-full rounded-2xl py-4 pr-4 pl-12 text-white placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500"
					name="Url"
					placeholder="Enter a URL"
					ref={inputRef}
					type="text"
				/>
			</div>
			<button
				className="group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 shadow-lg transition-all duration-300 ease-in-out hover:from-cyan-600 hover:to-blue-600 hover:shadow-cyan-500/50 active:scale-95"
				onClick={(e) => onGenerate(e)}
				type="button"
			>
				<QrCodeIcon className="h-5 w-5 text-white" />
				<span className="font-semibold text-white">Generate</span>
			</button>
		</form>
	)
}
