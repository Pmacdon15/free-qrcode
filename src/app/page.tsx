'use client'
import QRCode from "react-qr-code";
import { useState, useRef } from "react";
import { FaDownload , FaMagic} from 'react-icons/fa';

export default function Home() {

  const [qrCodeUrl, setQRCodeUrl] = useState<string>("www.google.com");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleGenerateQRCode = () => {
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
      const svg = document.querySelector('svg');
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
    <div className="flex flex-col justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <h1 className="flex flex-col items-center text-2xl mt-12 p-4 gap-4 w-5/6 md:w-3/6 border">Free Qr Code Generator</h1>
      <div className="flex flex-col items-center mt-12 p-4 gap-4 w-5/6 md:w-3/6 border">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-4 w-full">
            <input
              ref={inputRef}
              className="w-full border p-2"
              type="text"
              name="Url"
              placeholder="Enter a URL"
            />
            <button
              onClick={handleGenerateQRCode}
              className="border shadow-lg text-white bg-blue-600 p-4 flex items-center justify-between w-2/6 active:bg-blue-900 active:scale-105 transform transition-all duration-300 ease-in-out"
            >
              Generate Qr Code  <FaMagic />
            </button>
          </div>
            <button
            onClick={handleDownloadQrCode}
            className="border shadow-lg text-white bg-green-600 p-4 flex items-center justify-between w-full active:bg-green-900 active:scale-105 transform transition-all duration-300 ease-in-out"
            >
            <span className="flex-1 text-center">Download QR Code</span>
            <FaDownload />
            </button>
        </div>
        <QRCode value={`${qrCodeUrl}`} />
      </div>
    </div>
  );
}