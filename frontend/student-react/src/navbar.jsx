import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/dashboard">Dashboard</Link> |{' '}
      <Link to="/resources">Resources</Link> |{' '}
      <Link to="/submitresource">Submit Resource</Link> |{' '}
      <Link to="/experiences">Placement Experiences</Link> |{' '}
      <Link to="/shareexperience">Share Experience</Link>
    </nav>
  );
}

export default Navbar;