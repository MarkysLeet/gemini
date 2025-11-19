"use client";

export default function Footer() {
  return (
    <footer className="w-full p-8 flex justify-between items-center">
      <p>&copy; {new Date().getFullYear()} Grozan Studio</p>
      <div>
        <a href="mailto:grozantwink@gmail.com" className="mr-4">grozantwink@gmail.com</a>
        <a href="tel:+905418462550">+90 541 846 25 50</a>
      </div>
    </footer>
  );
}
