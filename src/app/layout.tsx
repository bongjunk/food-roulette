import React from 'react';
import './globals.css';
import { RouletteProvider } from '../../context/context';
import { prefix } from '../../config/config';

export const metadata = {
  title: '점심메뉴 선정 룰렛',
  description: '점심을 고민하는 모든 직장인을 위한 메뉴 선정 룰렛',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouletteProvider value={{ prefix }}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </RouletteProvider>
  );
}
