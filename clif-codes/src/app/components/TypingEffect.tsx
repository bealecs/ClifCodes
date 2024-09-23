"use client";
import React, { useState, useEffect } from 'react';
import { Sometype_Mono } from 'next/font/google';

const font = Sometype_Mono({
    weight: "400",
    style: "normal",
    subsets: ["latin"]
  })

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = '<ClifCodes />';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 150); // Adjust typing speed by changing the interval time (150ms)
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className={`${font.className} font-mono text-gray-800 text-4xl lg:text-6xl flex my-4 lg:my-0`}>
        <h2>{displayText}</h2>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingEffect;
