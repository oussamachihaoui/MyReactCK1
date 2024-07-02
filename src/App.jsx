import React from "react";
import Name from "./Components/Name";
import Descritption from "./Components/Descritption";
import Price from "./Components/Price";
import ImageUrl from "./Components/ImageUrl";
import ProductCard from "./Components/ProductCard";
import product from "./product";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Name />
          <Descritption />
          <Price />
          <ImageUrl />
        </Col>

        <Col>
          <ProductCard
            name={<Name />}
            description={<Descritption />}
            price={<Price />}
            image={product.imageURL}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
