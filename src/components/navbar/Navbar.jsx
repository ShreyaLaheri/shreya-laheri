import './navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
		<ul>
			<li><a href="#contact">Contact</a></li>
			<li><a href="#resume">Resume</a></li>
			<li><a href="#about">About</a></li>
			<li><a class="active" href="#home">Home</a></li>
		</ul>
    </div>
  );
}

export default Navbar;