import React from 'react';

function App() {
  return (
    <div className="container">
      <nav className="sidebar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="content">
        <section id="home" className="section">
          <h2>Home</h2>
          <p>Welcome to my portfolio!</p>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <p> que quis, porta sed quam. Suspendisse lobortis tempor libero et viverra. Vivamus scelerisque efficitur sem, id tempor sem. Nunc quis elit ex. Donec pellentesque tristique neque. Sed ut ullamcorper tellus, quis elementum enim. Fusce lacus dolor, malesuada ut ante quis, ullamcorper sagittis magna. Ut at dapibus tortor. Morbi dapibus justo quis ante faucibus, ac porta ante vulputate. Donec volutpat risus vel lectus scelerisque euismod. Nullam sit amet diam at sapien ultricies semper. Donec non urna quis orci dapibus cursus vel nec velit.

Vivamus sodales pharetra rhoncus. Nunc viverra nisi et pharetra fermentum. Aenean lacus metus, tempus nec diam semper, aliquam venenatis odio. Ut accumsan mi magna, sed tincidunt dolor mattis vitae. Etiam laoreet magna ut mi efficitur condimentum. Curabitur quis interdum ante, id pretium enim. Sed sollicitudin fermentum felis. Morbi dapibus, felis ut commodo dictum, lorem lorem pretium turpis, mattis bibendum ligula nibh vitae quam. Sed accumsan ante massa, porttitor iaculis diam scelerisque vitae. In quis viverra velit. Aenean </p>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <p>o!</p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <p>o!</p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Photo by <a href="https://unsplash.com/@fellowferdi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ferdinand Stöhr</a> on <a href="https://unsplash.com/photos/teal-and-pink-artwork-NFs6dRTBgaM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
