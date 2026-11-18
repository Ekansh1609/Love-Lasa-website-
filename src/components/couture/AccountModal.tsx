'use client';

import React, { useState } from 'react';
import { useCouture } from '@/context/CoutureContext';

export function AccountModal() {
  const { isAccountOpen, setIsAccountOpen, showToast } = useCouture();
  const [email, setEmail] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAccountOpen(false);
    showToast('Signed in to Love Lasa Clienteling');
    setEmail('');
    setPasscode('');
  };

  return (
    <div
      id="account-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsAccountOpen(false);
      }}
      className={`modal-backdrop fixed inset-0 z-[65] bg-obsidian/80 backdrop-blur-xs flex items-center justify-center p-5 ${
        isAccountOpen ? 'is-open' : ''
      }`}
    >
      <div className="bg-ivory text-obsidian w-full max-w-md p-8 border border-obsidian/15 relative shadow-2xl">
        <button
          id="close-account-modal"
          type="button"
          onClick={() => setIsAccountOpen(false)}
          className="absolute top-5 right-5 p-1.5 text-obsidian/60 hover:text-crimson focus:outline-none"
          aria-label="Close Account"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <p className="text-[10px] uppercase tracking-[0.28em] text-crimson font-medium mb-2">
          Clienteling
        </p>
        <h3 className="font-serif text-3xl font-light text-obsidian mb-6">
          Love Lasa Account
        </h3>
        <form id="account-form" onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="acc-email"
              className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5"
            >
              Email
            </label>
            <input
              id="acc-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="client@lovelasa.com"
              className="w-full bg-transparent border-b border-obsidian/25 py-2 text-sm text-obsidian focus:outline-none focus:border-crimson"
            />
          </div>
          <div>
            <label
              htmlFor="acc-pass"
              className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5"
            >
              Passcode
            </label>
            <input
              id="acc-pass"
              type="password"
              required
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent border-b border-obsidian/25 py-2 text-sm text-obsidian focus:outline-none focus:border-crimson"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-crimson text-ivory text-[10px] uppercase tracking-[0.26em] hover:bg-crimson-light transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
