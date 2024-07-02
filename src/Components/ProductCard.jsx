import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ name, description, image, price }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">{price}</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
