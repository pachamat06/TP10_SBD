export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">pachamat.06</h1>
      <ul className="flex gap-6">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}