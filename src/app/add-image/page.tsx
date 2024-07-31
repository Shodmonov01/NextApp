'use client';

import { useState } from 'react';

export default function AddImage() {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, description }),
    });
    setUrl('');
    setDescription('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Add New Image</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Image URL"
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border rounded p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Add Image</button>
      </form>
    </div>
  );
}
