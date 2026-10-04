'use client';

import { useEffect, useState } from 'react';

// DEV: http://localhost:8000 | PROD: vazio => caminho relativo /api/... (Nginx)
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/health/`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Erro ao consultar a API: {error}</p>;
  if (!data) return <p>Carregando...</p>;

  return (
    <main>
      <h1>Status da API: {data.status}</h1>
      <ul>
        {data.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
}