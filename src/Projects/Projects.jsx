import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./Project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
let Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  var imageSlider = (event) => {
    console.log("Hello");
  };
  var noGit = () => {
    alert("Not an open source project ");
  };
  return (
    <div id="projectMain" className="sectionHeading">
      <h1 className="works AboutMeHeading WorkHeading">
        Some Things I've Built
      </h1>
      <div data-aos="fade">
        <div className="Projectcard1">
          <img
            onMouseEnter={imageSlider}
            className="scraperImage"
            src={process.env.PUBLIC_URL + "Scraper.png"}
          />
          <div className="ProjectDescBlock1">
            <p className="greenText FeaturedProjects">Featured Project</p>
            <h2 className="ProjectName">
              <b>NewsScraper</b>
            </h2>
            <div className="ProjectDesc">
              <p className="descproject">
                This is a npm package that helps to scrape data from news
                website Inshorts. I built this for my news Project.
              </p>
            </div>
            <p className="FrameWorks">JavaScript Cheerio</p>
            <a
              href="https://github.com/golfsierraAI/NewsScraper"
              target="_blank"
              className="icons"
            >
              <GitHubIcon />
            </a>
          </div>
          <div className="ProjectImageCover1" onMouseEnter={imageSlider}></div>
        </div>
      </div>
      <div data-aos="fade">
        <div className="Projectcard2">
          <img
            onMouseEnter={imageSlider}
            className="scraperImage"
            src={process.env.PUBLIC_URL + "AGNEWS.png"}
          />
          <div className="ProjectDescBlock2">
            <p className="greenText FeaturedProjects">Featured Project</p>
            <h2 className="ProjectName">
              <b>AG News</b>
            </h2>
            <div className="ProjectDesc">
              <p className="descproject">
                This is an app which shows breaking news on the basis of nine
                categories. It also has Machine Learning integrated so that we
                can see news according to our taste. It has user facility
              </p>
            </div>
            <p className="FrameWorks">ReactJs NodeJs Express MongoDB</p>
            <a
              href="https://github.com/golfsierraAI/News"
              target="_blank"
              className="icons"
            >
              <GitHubIcon />
            </a>
          </div>
          <div className="ProjectImageCover2" onMouseEnter={imageSlider}></div>
        </div>
      </div>
      <div data-aos="fade">
        <div className="Projectcard1">
          <img
            onMouseEnter={imageSlider}
            className="scraperImage"
            src={process.env.PUBLIC_URL + "Hrc.png"}
          />
          <div className="ProjectDescBlock1">
            <p className="greenText FeaturedProjects">Featured Project</p>
            <h2 className="ProjectName">
              <b>Receivable DashBoard</b>
            </h2>
            <div className="ProjectDesc">
              <p className="descproject">
                This is a recievables dashboard which I made during my intern in
                Highradius.It's not an open source project so I will not be able
                to share it's detail on a public platform, but we can discuss my
                role in this project.
              </p>
            </div>
            <p className="FrameWorks">ReactJs Java Python Flask MYSQL</p>
            <a onClick={noGit} className="icons">
              <GitHubIcon />
            </a>
          </div>
          <div className="ProjectImageCover1" onMouseEnter={imageSlider}></div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
