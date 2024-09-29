import '@/assets/styles/global.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
