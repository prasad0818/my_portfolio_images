export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Shekar J</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Senior Data Engineer</span>{" "}
            {/* <br />
            Developer */}
          </h1>
          {/* <p className="hero--section-description">
          I recently earned my Master’s in Computer Science from Western Illinois University and have a solid foundation in working with both structured and unstructured data, machine learning, and business intelligence tools. I have experience in designing  and  implementing scalable data solutions using AWS, Azure, and  SQL. I excel in writing advanced SQL queries & and optimized SQL queries which improved data processing speeds by 40%. and implementing data security measures to enhance data integrity. I’m deeply passionate about using data analytics and machine learning to solve complex business challenges. I’m excited to bring my skills to a dynamic team and contribute to impactful, data-driven solutions. "</p> */}
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
        <img src="./img/logo.jpg" alt="Logo" />
      </div>
    </section
  );
}
