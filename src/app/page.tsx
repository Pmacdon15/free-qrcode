'use client'
import QRCode from "react-qr-code";
import { useState, useRef } from "react";
import { Download, QrCode as QrCodeIcon, Sparkles, Link as LinkIcon } from 'lucide-react';

export default function Home() {

  const [qrCodeUrl, setQRCodeUrl] = useState<string>("https://www.patmac.ca");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleGenerateQRCode = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    
    if (inputRef.current) {
      const value = inputRef.current.value;
      if (!value.startsWith('http://') && !value.startsWith('https://')) {
        inputRef.current.value = 'https://' + value;
      }
      setQRCodeUrl(inputRef.current.value);
    }
  };
  const handleDownloadQrCode = () => {
    {
      const svg = document.querySelector('#qrCode');
      if (svg) {
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);
          const pngFile = canvas.toDataURL('image/png');
          const downloadLink = document.createElement('a');
          downloadLink.download = 'QRCode.png';
          downloadLink.href = pngFile;
          downloadLink.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
      }
    }
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-[family-name:var(--font-geist-sans)] py-12 px-4">
      <Header />
      <div className="flex flex-col items-center mt-8 p-8 gap-8 w-full max-w-2xl glass rounded-3xl shadow-2xl">
        <div className="flex flex-col gap-6 w-full">
          <InputForm inputRef={inputRef} onGenerate={handleGenerateQRCode} />          
          <button
            onClick={handleDownloadQrCode}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center justify-center gap-3 w-full hover:from-purple-700 hover:to-blue-700 active:scale-95 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50"
          >
            <span className="flex items-center gap-3 text-white font-semibold text-lg">
              <Download className="w-5 h-5" />
              Download QR Code
            </span>
          </button>
        </div>
        <div className="p-8 glass rounded-2xl shadow-xl bg-white/10">
          <QRCode id="qrCode" className="shadow-sm" value={`${qrCodeUrl}`} />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-3">
        <QrCodeIcon className="w-12 h-12 text-purple-400" strokeWidth={2} />
        <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Free QR Code Generator
      </h1>
      <p className="text-gray-300 text-lg max-w-md">
        Create stunning QR codes instantly. Simple, fast, and completely free.
      </p>
    </div>
  )
}

interface InputFormProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  onGenerate: (e: React.FormEvent) => void;
}

function InputForm({ inputRef, onGenerate }: InputFormProps) {
  return(
    <form className="flex flex-col sm:flex-row gap-4 w-full">
      <div className="relative flex-1">
        <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          className="w-full glass rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          type="text"
          name="Url"
          placeholder="Enter a URL"
        />
      </div>
      <button
        onClick={(e) => onGenerate(e)}
        className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-blue-600 active:scale-95 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-cyan-500/50 whitespace-nowrap"
      >
        <QrCodeIcon className="w-5 h-5 text-white" />
        <span className="text-white font-semibold">Generate</span>
      </button>
    </form>
  )
}

