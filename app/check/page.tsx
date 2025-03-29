'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Check() {
  const router = useRouter();
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;

    router.push(`/result?address=${encodeURIComponent(address.trim())}`);
  };

  return (
    <div className="h-screen bg-indigo-700 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10">
        <h2 className="max-w-xl text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Paste an address to see what it’s like to live there
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="address" className="sr-only">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              placeholder="Enter your address to check"
              autoComplete="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="min-w-0 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/75 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Check
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
