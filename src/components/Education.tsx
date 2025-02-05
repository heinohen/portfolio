import React from 'react';

const Education: React.FC = () => {




  return (
    <section id="education" className="section">
      <h2>Education</h2>

      <p>
        I hold a Bachelor's degree in Computer Science, which has provided me with a strong foundation in programming, data structures, and algorithms. 
        During my Bachelor's, I completed 25 ECTS credits in Digital Language Studies, 25 ECTS in Statistics, and 25 ECTS in Mathematics. 
        This diverse background has given me a well-rounded perspective on technology and its application to real-world challenges. 
        My Bachelor's studies also included foundational courses in JAVA OOP, relational database generation (SQL queries), distributed systems, and threading.
      </p>

      <p>
        Currently, I am pursuing a Master's degree in Computer Science, where I am focusing on several exciting areas: 
        <strong>Machine Learning, Natural Language Processing (NLP), Data Analytics, and Software Development</strong>. These subjects align with my passion for leveraging technology to solve real-world problems and provide data-driven insights. In the Master's program, I am diving deep into training and evaluating models, with practical experience using Hugging Face and other relevant libraries.
      </p>

      <div>
        <h3>Relevant Education:</h3>
        <ul>
          <li>✅ <strong>BSc Computer Science</strong>, University of Turku, 2022 - 2024
            <ul>
              <li>📚 <strong>Minors:</strong> Digital Language Studies (25 ECTS), Statistics (25 ECTS), Mathematics (25 ECTS)</li>
              <li>🖥️ <strong>Key Courses:</strong> JAVA OOP, Relational Databases (SQL), Distributed Systems, Threading</li>
            </ul>
            - <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Link to Curriculum 📜</a>
          </li>
          <li>🏫 <strong>MSc Computer Science</strong>, University of Turku, 2024 - Present
            <ul>
              <li>🤖 <strong>Key Focus Areas:</strong> Machine Learning, NLP (Hugging Face, model training and evaluation), Software Development (architecture, requirements engineering, testing)</li>
              <li>🔧 <strong>Software Development Tools:</strong> Agile, Scrum, Software Quality, and Testing</li>
            </ul>
            - <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Link to Curriculum 📜</a>
          </li>
        </ul>
      </div>

      <p>
        As part of my Bachelor's studies, I completed my thesis titled (in Finnish only):
        <br />
        <em>Heinonen, Henrik (2024). ICD-koodien automaattinen määritys luonnollisen kielen käsittelyn menetelmillä. Kandidaatin tutkielma, tietojenkäsittelytiede, Turun yliopisto, Teknillinen tiedekunta. (ohjaaja: Filip Ginter)</em>
        <br />
        You can access my thesis online via this link:
        <a href="https://urn.fi/URN:NBN:fi-fe2024060646337" target="_blank" rel="noopener noreferrer">
          Thesis Link
        </a>
      </p>

    </section>
  );
};

export default Education;
