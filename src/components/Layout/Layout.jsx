import React from "react";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
