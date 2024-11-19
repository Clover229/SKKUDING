import data from "../dataAxios";
import PoketmonCard from "./PoketmonCard";
import PoketmonDetail from "./PoketmonDetail";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <section className={styles.content}>
      {data.map((poketmon, index) => (
        <PoketmonCard key={index} index={index} />
      ))}
    </section>
  );
}
