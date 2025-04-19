import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/user-dashboard');
  };

  return (
    <button 
      onClick={handleClick}
      style={{ 
        cursor: 'pointer', 
        padding: '8px 16px', 
        backgroundColor: '#0A0A0A', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#2C2C2C'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#0A0A0A'}
    >
      Dashboard
    </button>
  );
};

export default Navbar;