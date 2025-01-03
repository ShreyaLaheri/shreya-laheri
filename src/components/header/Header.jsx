import './header.css';
import Photo from '../../assets/profilee.png'
import Resume from '../../assets/resume.pdf'

const Header = () =>{
  return(
    <header>
      	<div className="header-container">
			<div className="profile">
				<img src={Photo} alt="Profile Photo"/> 
			</div>
			<div className="cotent">
				<h1>Hi, I am <br />Shreya Laheri.</h1>
				<p>Front-end Developer</p>
				<div className="buttons">
					<a href={Resume} download={Resume}>
						<button className="button button1">Download Resume</button>
					</a>
					<a href="#contact">
						<button className="button button2">Contact Me</button>
					</a>
				</div>
				<p>Please feel free to read more about me, or you can check out my resume, projects or contact me.</p>
			</div>
      	</div>
    </header>
  )
}
export default Header;