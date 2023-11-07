// pages/contact.tsx
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="mb-4 text-4xl font-bold">Kontakt</h1>
      <p className="mb-4">Wenn du Fragen hast, zögere nicht, mich zu kontaktieren!</p>
      <form className="flex flex-col w-full max-w-md">
        <label htmlFor="name" className="mb-2">Name:</label>
        <input type="text" id="name" className="mb-4 p-2 border border-gray-300" />

        <label htmlFor="email" className="mb-2">E-Mail:</label>
        <input type="email" id="email" className="mb-4 p-2 border border-gray-300" />

        <label htmlFor="message" className="mb-2">Nachricht:</label>
        <textarea id="message" rows={4} className="mb-4 p-2 border border-gray-300" />

        <button type="submit" className="p-2 bg-blue-500 text-white">Senden</button>
      </form>
      <Link href="/">
        <a className="mt-4 text-blue-500">Zurück zur Startseite</a>
      </Link>
    </div>
  );
}
