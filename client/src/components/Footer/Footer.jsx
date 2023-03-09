import "../Footer/footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className="containerpadre">
      <div className="footer-content">
        <h1 className="h1footer animate__animated animate__bounceIn animate__slower animate__infinite">
          Simple Service
        </h1>
        <p className="footerP">
          Simple Service is a project developed by advanced Henry'students. It
          was released on March 2023, with the main objective of providing a
          platform where costumers can find the best service for their needs. To
          be able to purchase , it is neccesary to be registered by creating a
          free account.
        </p>
        <br />
        <h2 className="h2FootOur">Our Team</h2>
        <div className="socials">
          <div className="boxFooter">
            <h5 className="h5Foot">Antonela Ruiz Diaz</h5>
            <p className="devFoot">Web Developer</p>
            <div className="iconsFoot">
              <a className="ia" href="https://github.com/maggieruizdiaz22">
                <BsGithub className="i" size={45} />
              </a>
              <a
                className="ia"
                href="https://www.linkedin.com/in/magali-ruiz-diaz-25b768265/"
              >
                <BsLinkedin className="i" size={45} />
              </a>
            </div>
          </div>

          <div className="boxFooter">
            <h5 className="h5Foot">Ayelén Llampa</h5>
            <p className="devFoot">Front Developer</p>
            <div className="iconsFoot">
              <a className="ia" href="https://github.com/Ash19-88">
                <BsGithub className="i" size={45} />
              </a>
              <a
                className="ia"
                href="https://www.linkedin.com/in/ayelen-llampa1988/"
              >
                <BsLinkedin className="i" size={45} />
              </a>
            </div>
          </div>

          <div className="boxFooter">
            <h5 className="h5Foot">Christian Rosero</h5>
            <p className="devFoot">Web Developer</p>
            <div className="iconsFoot">
              <a className="ia" href="https://github.com/Larva-Soup">
                <BsGithub className="i" size={45} />
              </a>
              <a
                className="ia"
                href="https://www.linkedin.com/in/christian-rosero-052068269"
              >
                <BsLinkedin className="i" size={45} />
              </a>
            </div>
          </div>

          <div className="boxFooter">
            <h5 className="h5Foot">Edwards Ardila</h5>
            <p className="devFoot">Web Developer</p>
            <div className="iconsFoot">
              <a className="ia" href="https://github.com/Edwards0307">
                <BsGithub className="i" size={45} />
              </a>
              <a
                className="ia"
                href="https://www.linkedin.com/in/edwards-alexis-ardila-martinez-042980149/"
              >
                <BsLinkedin className="i" size={45} />
              </a>
            </div>
          </div>

          <div className="boxFooter">
            <h5 className="h5Foot">Jason Valderrama</h5>
            <p className="devFoot">Web Developer</p>
            <div className="iconsFoot">
              <a className="ia" href="https://github.com/Jasoonn02">
                <BsGithub className="i" size={45} />
              </a>
              <a
                className="ia"
                href="https://www.linkedin.com/in/jason-valderrama-b50587221"
              >
                <BsLinkedin className="i" size={45} />
              </a>
            </div>
          </div>

          <div className="boxFooter">
            <h5 className="h5Foot">Luciana Heredia</h5>
            <p className="devFoot">Front Developer</p>
            <div className="iconsFoot">
              <a className="ia" href="https://github.com/LuHeredia">
                <BsGithub className="i" size={45} />
              </a>
              <a
                className="ia"
                href="https://www.linkedin.com/in/luciana-heredia-4b8622198/"
              >
                <BsLinkedin className="i" size={45} />
              </a>
            </div>
          </div>

          <div className="boxFooter">
            <h5 className="h5Foot">Pedro González</h5>
            <p className="devFoot">Web Developer</p>
            <div className="iconsFoot">
              <a className="ia" href="https://github.com/PDG94">
                <BsGithub className="i" size={45} />
              </a>
              <a
                className="ia"
                href="https://www.linkedin.com/in/pedro-gonzalez-4468ba24a/"
              >
                <BsLinkedin className="i" size={45} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="pFooterBottom">
            copyright &copy;{year}
            <a className="aCopyright" href="deployAcá">
              SimpleService
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
