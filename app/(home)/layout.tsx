'use client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:flex">
      {children}
    </div>
  );
}