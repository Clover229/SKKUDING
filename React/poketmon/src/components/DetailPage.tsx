import PoketmonDetail from "./PoketmonDetail";
import data from "../dataAxios";
import { useParams } from "react-router-dom";

import styles from "./DetailPage.module.css";

// type PoketmonDetailProps = {
//     index: number;
// };

export default function DetailPage() {
  const a = useParams();
  const index = a.index !== undefined ? parseInt(a.index) : -1;

  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.imgbox}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              index + 1
            }.png`}
            alt={data[index].name}
          />
        </div>
        <PoketmonDetail index={index} />
      </section>
    </div>
  );
}
