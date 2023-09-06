export const Socials = () => {
  return (
    <div>
      <div class="social-links">
            <a href="https://twitter.com/username" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/username" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://www.linkedin.com/username" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
    </div>
  );
}

export const Home = () => {
  return (
    <div>
      <header id="header">
          <div class="container">

          <h1><a href="index.html">May Peralta</a></h1>
          <h2>I'm a passionate <span>full-stack web developer</span> from Miami</h2>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link active" href="#home">Home</a></li>
              <li><a class="nav-link" href="#portfolio">Portfolio</a></li>
              <li><a class="nav-link" href="https://google.com">Resume</a></li>
              <li><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <Socials />
        </div>
      </header>
  </div>
  );
}
