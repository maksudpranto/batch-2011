import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer shadow-lg mt-auto">
      <div className="container footer-content">
        <div className="footer-info">
          <Link href="/" className="logo-footer">
            Batch <span>'11</span>
          </Link>
          <p>Connecting the legends of high school batch 2011.</p>
        </div>
        <div className="footer-links">
          <div className="footer-group">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Batch</Link></li>
              <li><Link href="/members">Members Directory</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div className="footer-group">
            <h3>Support</h3>
            <ul>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/keystatic">Admin Access</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} High School Batch 11. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
