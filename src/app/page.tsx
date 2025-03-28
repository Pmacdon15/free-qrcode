'use client'
import QRCode from "react-qr-code";
import { useState, useRef } from "react";

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

  return (
    <div className="flex flex-col justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <h1 className="flex flex-col items-center text-2xl mt-12 p-4 gap-4 w-5/6 md:w-3/6 border">Free Qr Code Generator</h1>
      <div className="flex flex-col items-center mt-12 p-4 gap-4 w-5/6 md:w-3/6 border">
        <div className="flex gap-4 w-full ">
          <input 
            ref={inputRef} 
            className="w-full border p-2" 
            type="text" 
            name="Url" 
            placeholder="Enter a URL" 
          />
          <button 
            onClick={handleGenerateQRCode}
            className="border shadow-lg text-white bg-blue-600 p-4 w-2/6"
          >
            Generate Qr Code
          </button>
        </div>
        <QRCode value={`${qrCodeUrl}`} />
      </div>
    </div>
  );
}