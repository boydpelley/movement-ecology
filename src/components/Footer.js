import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ascf from '../assets/images/sponsors/ascf.png';
import cfi from '../assets/images/sponsors/cfi.svg';
import dfo from '../assets/images/sponsors/dfo.webp';
import glfc from '../assets/images/sponsors/glfc.png';
import otn from '../assets/images/sponsors/otn-dal.png';
import parks from '../assets/images/sponsors/parks-can.svg';

const sponsors = [
  { src: ascf,  alt: 'The Foundation for Conservation of Atlantic Salmon', url: 'https://www.salmonconservation.ca/',       large: true },
  { src: parks, alt: 'Parks Canada',                                       url: 'https://parks.canada.ca/',                 large: true },
  { src: glfc,  alt: 'Great Lakes Fishery Comission',                      url: 'https://www.glfc.org/',                    large: true },
  { src: cfi,   alt: 'Canada Foundation for Innovation',                   url: 'https://www.innovation.ca/' },
  { src: dfo,   alt: 'Fisheries and Oceans Canada',                        url: 'https://www.dfo-mpo.gc.ca/index-eng.html', maxW: 240 },
  { src: otn,   alt: 'Ocean Tracking Network / Dalhousie University',      url: 'https://oceantrackingnetwork.org/' },

];

function SponsorLogo({ sponsor }) {
  const imgStyle = {};
  
  if (sponsor.maxW) imgStyle.maxWidth = `${sponsor.maxW}px`;

  const img = (
    <img
      src={sponsor.src}
      alt={sponsor.alt}
      className={sponsor.large ? 'is-large' : undefined}
      style={imgStyle}
      loading="lazy"
    />
  );
  return sponsor.url ? (
    <a className="sponsor-chip" href={sponsor.url} target="_blank" rel="noopener noreferrer" aria-label={sponsor.alt}>
      {img}
    </a>
  ) : (
    <span className="sponsor-chip">{img}</span>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer pt-5 pb-4 mt-5">
      <Container>
        <Row className="gy-4">
          <Col md={5}>
            <h6 className="mb-2">MER Group at Dalhousie University</h6>
            <p className="small mb-0">
              Marine animal movement ecology and ecophysiology research across Atlantic Canada.
              Dalhousie University, Halifax, Nova Scotia.
            </p>
          </Col>
          <Col md={3}>
            <h6 className="mb-2">Explore</h6>
            <ul className="list-unstyled small mb-0">
              <li><Link to="/our-group">Personnel</Link></li>
              <li><Link to="/projects">Research</Link></li>
              <li><Link to="/publications">Publications</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="mb-2">Contact</h6>
            <ul className="list-unstyled small mb-0">
              <li>Department of Biology</li>
              <li>Dalhousie University</li>
              <li>Halifax, NS, Canada</li>
              <li><a href="mailto:robert.lennox@dal.ca">robert.lennox@dal.ca</a></li>
            </ul>
          </Col>
        </Row>

        <div className="footer-partners">
          <p className="footer-partners__label">Partners &amp; funders</p>
          <div className="footer-sponsors">
            {sponsors.map((s) => <SponsorLogo key={s.alt} sponsor={s} />)}
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        <div className="small text-center text-md-start">
          © {year} Robert Lennox. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
