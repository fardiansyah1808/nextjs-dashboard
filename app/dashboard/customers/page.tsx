import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return <div className="text-2xl font-bold text-gray-800">Customers Page</div>;
}
