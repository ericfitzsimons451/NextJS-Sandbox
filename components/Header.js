import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return(
    <div>
      <Link href="/">
        <a style={linkStyle} title="Home">Home</a>
      </Link>
      <Link href="/About">
        <a style={linkStyle} title="About">About</a>
      </Link>
    </div>
  )
}

export default Header;