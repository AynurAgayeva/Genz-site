import { Col } from "react-bootstrap";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";

interface propsType {
  ptitle: string;
  pdesc: string;
  pphoto: string;
}
function SingleCard({ ptitle, pdesc, pphoto }: propsType) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <Col sm={12} md={4}>
      <div
        className="card blog-card b-0"
        style={{ border: "none" }}
        data-aos={"flip-left"}
      >
        <Card.Img className="card-photo" src={pphoto} />
        <Card.Body className="card-body b-0">
          <a href="">#Animal #Business #Fashion</a>
          <Card.Title className="card-title">{ptitle}</Card.Title>
          <img
            width={"30px"}
            src={"https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/Rectangle-634.png"}
            alt=""
          />
          <Card.Text>{pdesc.substring(0,120)}</Card.Text>

          <Button className="text-right" variant="primary">
            Read more
          </Button>
        </Card.Body>
      </div>
    </Col>
  );
}

export default SingleCard;
