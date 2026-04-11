import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <Link href="/" className="logo">
          Batch <span>'11</span>
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/members">Members</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/keystatic" className="btn btn-primary admin-btn">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
