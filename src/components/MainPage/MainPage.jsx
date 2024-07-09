import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MainPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div
      className={styles.mainPage}
      itemScope
      itemType="http://schema.org/WebPage"
    >
      <Container className={styles.container}>
        <Row className={styles.row_content}>
          <Col
            md={6}
            className={styles.content_new}
            itemProp="mainContentOfPage"
            itemScope
            itemType="http://schema.org/WebPageElement"
          >
            <Link className={styles.link_build} to="/new" itemProp="url">
              <h2 className={styles.content__title} itemProp="headline">
                новостройки
              </h2>
            </Link>
          </Col>

          <Col
            md={6}
            className={styles.content_build}
            itemProp="mainContentOfPage"
            itemScope
            itemType="http://schema.org/WebPageElement"
          >
            <Link className={styles.link_build} to="/build" itemProp="url">
              <h2 className={styles.content__title} itemProp="headline">
                под застройку
              </h2>
            </Link>
          </Col>
        </Row>
        <Row className={styles.row_title_section}>
          <Col>
            <h3 className={styles.main__title} itemProp="about">
              почему новострой?
            </h3>
          </Col>
        </Row>
        <Row className={styles.row_cards_section}>
          <Col
            md={6}
            sm={12}
            className={styles.card_section}
            itemProp="mainContentOfPage"
            itemScope
            itemType="http://schema.org/BlogPosting"
          >
            <h3 className={styles.main__title_section} itemProp="headline">
              "Это Ваша Инвестиция в Комфорт и Будущее"
            </h3>
            <p className={styles.main__subtitle_section} itemProp="articleBody">
              <strong>Ваш будущий дом в новостройке</strong> — это не просто
              стены и потолок, это место, где каждый уголок будет наполнен
              теплом и уютом. Представьте, как вы впервые войдете в свою новую
              квартиру, где все абсолютно новое, созданное специально для вас.
              Это ваш шанс начать жизнь с чистого листа.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Современные планировки</strong>— это возможность жить в
              пространстве, разработанном с учетом ваших потребностей. Открытые
              кухни, просторные балконы, большие окна — все это создает ощущение
              свободы и гармонии.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Энергоэффективность</strong> новостроек не только снижает
              ваши ежемесячные расходы на коммунальные услуги, но и подчеркивает
              вашу заботу об окружающей среде. Это дома нового поколения, где
              каждая деталь работает на ваш комфорт и экономию.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Безопасность</strong> — один из ключевых факторов при
              выборе жилья. В новостройках вы найдете продуманные системы
              безопасности, которые позволят вам чувствовать себя защищенным в
              любое время суток.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Гарантия качества</strong> — это ваша уверенность в
              завтрашнем дне. Вы можете быть спокойны, зная, что ваш новый дом
              построен с использованием последних технологий и материалов. И,
              конечно же, инвестиционный потенциал.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Новостройки</strong> — это не только удобство и комфорт,
              но и мудрое вложение средств, которое со временем только
              увеличится в цене.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Выбор новостройки</strong> — это выбор в пользу будущего,
              где каждый день будет наполнен новыми возможностями и радостью от
              жизни в доме вашей мечты.
            </p>
          </Col>
          <Col
            md={6}
            sm={12}
            className={styles.card_section}
            itemProp="mainContentOfPage"
            itemScope
            itemType="http://schema.org/BlogPosting"
          >
            <h3 className={styles.main__title_section} itemProp="headline">
              "Земельные Участки": - Ваше Идеальное Будущее"
            </h3>
            <p className={styles.main__subtitle_section} itemProp="articleBody">
              <strong>Ваш участок</strong> — это место, где будущий дом оживет,
              наполнившись уютом и теплом. Представьте тот момент, когда вы
              впервые ступите на свою землю, где всё будет готово для воплощения
              вашего уникального проекта. Это ваша возможность начать
              строительство с нуля.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Индивидуальные проекты</strong> — это возможность
              построить дом, разработанный с учетом ваших потребностей.
              Просторные дворы, большие сады, панорамные виды — все это создает
              ощущение свободы и гармонии.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Экологичность</strong> - это не только предоставляет вам
              возможность жить в гармонии с природой, но и подчеркивает вашу
              заботу об окружающей среде. Это места для жизни нового поколения,
              где каждая деталь участка может быть адаптирована под ваш комфорт
              и экологические стандарты.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Безопасность</strong> — один из ключевых факторов при
              выборе места для строительства. На вашем участке вы можете создать
              продуманные системы безопасности, которые позволят вам чувствовать
              себя защищенным в любое время суток.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Гарантия качества</strong> — это ваша уверенность в
              будущем вашего дома. Вы можете быть спокойны, зная, что ваш дом
              будет построен с использованием последних технологий и материалов.
              И, конечно же, инвестиционный потенциал.
            </p>
            <p className={styles.main__subtitle_section}>
              {" "}
              <strong>Земельные участки</strong> — это не только возможность
              создать уникальное жилище, но и мудрое вложение средств, которое
              со временем только увеличится в цене.{" "}
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Выбор участка под постройку</strong> — это выбор в пользу
              будущего, где каждый день будет наполнен новыми возможностями и
              радостью от жизни в доме вашей мечты. Это ваш шанс создать нечто
              уникальное, что будет отражать вашу личность и стиль жизни.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Инвестиционный потенциал</strong> земельных участков
              особенно высок, так как они предоставляют возможность для
              строительства домов, которые будут соответствовать самым
              современным требованиям комфорта и экологичности. Со временем
              стоимость таких участков может только расти, что делает их
              привлекательным вложением для любого инвестора.
            </p>
            <p className={styles.main__subtitle_section}>
              <strong>Создание идеального дома</strong> — это возможность
              воплотить в жизнь вашу мечту о собственном жилье. Будь то
              современный минимализм или классическая элегантность, каждый
              аспект вашего нового дома может быть тщательно продуман и
              реализован в соответствии с вашими желаниями и потребностями. В
              конечном итоге, выбор между новостройкой и земельным участком
              зависит от ваших личных предпочтений, жизненных целей и
              инвестиционных планов. Оба варианта предлагают свои уникальные
              преимущества и возможности для создания дома вашей мечты.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
