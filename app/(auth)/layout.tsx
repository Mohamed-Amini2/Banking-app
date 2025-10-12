export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            AUTH
          {children}
        </body>
      </html>
    );
  }
  