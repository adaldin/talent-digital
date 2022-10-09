import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Carousel from "react-bootstrap/Carousel";
import SlidePic1 from "../../assets/pexels-cottonbro-5083396.jpg";
import SlidePic2 from "../../assets/pexels-karolina-grabowska-4977484.jpg";
import SlidePic3 from "../../assets/pexels-mizuno-k-12899121.jpg";

function Home() {
  const { user } = useAuth();
  return (
    <>
      <Row className="min-vh-100 my-4">
        <Carousel pause="hover">
          <Carousel.Item className="text-center">
            <img
              className="img-fluid rounded mx-auto"
              src={SlidePic1}
              alt="First slide"
            />
            <Carousel.Caption>
              <Link
                to={user ? "/dropper" : "/login"}
                className="text-decoration-none text-success"
              >
                <h3>Just DDrop</h3>
              </Link>
              <p className="text-success">
                Carga tus archivos de forma instantánea
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img
              className="img-fluid rounded mx-auto"
              src={SlidePic2}
              alt="Second slide"
            />
            <Carousel.Caption className="text-white">
              <h3 className="text-success">DDrop-it on Drive</h3>
              <p className="text-success">
                Log in your Google account and upload your files on Drive
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img
              className="img-fluid rounded"
              src={SlidePic3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="text-success">Choose the right extension</h3>
              <p className="text-success">Upload a JPG, JSON or PDF files</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  );
}
export default Home;
