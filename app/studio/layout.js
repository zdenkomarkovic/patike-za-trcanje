export default function StudioLayout({ children }) {
  return (
    <html lang='en'>
      <body className='antialiased' data-path='/studio'>
        {children}
      </body>
    </html>
  );
}
