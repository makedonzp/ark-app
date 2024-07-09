import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__contaiiner}>
        <Row>
          <Col sm={12} md={4}>
            <p className={styles.footer__text}>
              © 2024 ARK. Все права защищены.
            </p>
          </Col>
          <Col sm={12} md={4}>
            <p className={styles.footer__text}>
              Все материалы данного сайта являются собственностью компании ARK
            </p>
          </Col>
          <Col sm={12} md={4}>
            <p className={styles.footer__text}>
              Работа в соответствии с законодательством РФ ФЗ 214
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
