import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import src_logo from "../../assets/ark_logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import src__logo_tg from "../../assets/telegram_icon.png";
import src__logo_watsapp from "../../assets/whatsapp_icon.png";
import src__logo_viber from "../../assets/viber_icon.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.layer_bgr}></div>
      <Container className={styles.container}>
        <Row className={styles.row_header}>
          <Col md={3} className={styles.logo}>
            <Link to="/">
              <img
                src={src_logo}
                className={styles.logoImg}
                alt="Логотип компании"
              />
            </Link>
          </Col>

          <Col md={6} className={styles.navigation_wrapper}>
            <Link to="/services">Услуги</Link>
            <Link to="/about">О компании</Link>
            <Link to="/contacts">Контакты</Link>
          </Col>
          <Col md={3} className={styles.social}>
            <Link to="/">
              <img
                src={src__logo_tg}
                className={styles.logoImg_tg}
                alt="telegram"
              />
            </Link>
            <Link to="/">
              <img
                src={src__logo_watsapp}
                className={styles.logoImg_watsapp}
                alt="watsapp"
              />
            </Link>
            <Link to="/">
              <img
                src={src__logo_viber}
                className={styles.logoImg_viber}
                alt="viber"
              />
            </Link>
          </Col>
        </Row>
        <Row className={styles.row_title}>
          <Col>
            <h1 className={styles.header__title} alt="company title name ARK">
              ARK - мы работаем для Вас
            </h1>
            <p className={styles.header__subtitle}>
              персональный подход. безопатность. прозрачность.
            </p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
