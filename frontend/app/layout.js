export const metadata = {
  title: 'Do Dev ao Deploy',
  description: 'Django + Next.js + PostgreSQL + Nginx',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: 'sans-serif', margin: '2rem' }}>{children}</body>
    </html>
  );
}