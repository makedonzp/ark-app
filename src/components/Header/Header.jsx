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
    <header
      className={styles.header}
      role="banner"
      itemScope
      itemType="http://schema.org/WPHeader"
    >
      <div className={styles.layer_bgr}></div>
      <Container className={styles.container}>
        <Row
          className={styles.row_header}
          itemScope
          itemType="http://schema.org/SiteNavigationElement"
        >
          <Col md={3} className={styles.logo}>
            <Link to="/" aria-label="Главная" itemProp="url">
              <img
                src={src_logo}
                className={styles.logoImg}
                alt="Логотип компании ARK"
                itemProp="logo"
              />
            </Link>
          </Col>

          <Col md={6} className={styles.navigation_wrapper}>
            <nav aria-label="Основная навигация">
              <Link to="/services" itemProp="url">
                Услуги
              </Link>
              <Link to="/about" itemProp="url">
                О компании
              </Link>
              <Link to="/contacts" itemProp="url">
                Контакты
              </Link>
            </nav>
          </Col>
          <Col md={3} className={styles.social}>
            <div
              aria-label="Социальные сети"
              itemScope
              itemType="http://schema.org/Organization"
              className={styles.logo_social}
            >
              <Link to="/" aria-label="Telegram" itemProp="sameAs">
                <img
                  src={src__logo_tg}
                  className={styles.logoImg_tg}
                  alt="Telegram"
                  itemProp="image"
                />
              </Link>
              <Link to="/" aria-label="WhatsApp" itemProp="sameAs">
                <img
                  src={src__logo_watsapp}
                  className={styles.logoImg_watsapp}
                  alt="WhatsApp"
                  itemProp="image"
                />
              </Link>
              <Link to="/" aria-label="Viber" itemProp="sameAs">
                <img
                  src={src__logo_viber}
                  className={styles.logoImg_viber}
                  alt="Viber"
                  itemProp="image"
                />
              </Link>
            </div>
          </Col>
        </Row>
        <Row className={styles.row_title}>
          <Col>
            <h1 className={styles.header__title} itemProp="headline">
              ARK - мы работаем для Вас
            </h1>
            <p className={styles.header__subtitle} itemProp="description">
              персональный подход. безопасность. прозрачность.
            </p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
