export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
         I am senior  Data Analyst with over five years of experience  in analyzing data, creating predictive models and and helping businesses  to make data-driven decisions.I focus on improving SQL queries, automating data pipelines using Azure Data Factory,managing data warehouses,and optimizing application performance 
I’m skilled in Python, R, SQL, cloud platforms like AWS and Azure, and data visualization tools such as Power BI, Tableau, and QlikView. My expertise includes data cleaning, predictive analytics, ETL development, and creating real-time dashboards—all aimed at turning raw data into actionable insights. 
          </p>
        </div>
      </div>
    </section>
  );
}
