// src/components/Navbar.jsx
export default function Navbar() {
    return (
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between">
          <h1 className="text-xl font-bold text-purple-600">Akshaya</h1>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-purple-600">Home</a></li>
            <li><a href="#about" className="hover:text-purple-600">About</a></li>
            <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  