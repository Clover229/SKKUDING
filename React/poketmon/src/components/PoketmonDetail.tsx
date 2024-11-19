//detail tables for datail pages

import data from "../dataAxios";
import styles from "./PoketmonDetail.module.css";

type PoketmonDetailProps = {
  index: number;
};

export default function PoketmonDetail({ index }: PoketmonDetailProps) {
  const poketmondata = data[index];

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>id</td>
          <td>{index + 1}</td>
        </tr>
        <tr>
          <td>name</td>
          <td>{poketmondata.name}</td>
        </tr>
        <tr>
          <td>height</td>
          <td>{poketmondata.height}</td>
        </tr>
        <tr>
          <td>weight</td>
          <td>{poketmondata.weight}</td>
        </tr>
        <tr>
          <td>types</td>
          <td>{poketmondata.types.join(", ")}</td>
        </tr>
        <tr>
          <td>base-Experience</td>
          <td>{poketmondata["base-Experience"]}</td>
        </tr>
        <tr>
          <td>abilities</td>
          <td>{poketmondata.abilities.join(", ")}</td>
        </tr>
        <tr>
          <td>hp</td>
          <td>{poketmondata.hp}</td>
        </tr>
        <tr>
          <td>attack</td>
          <td>{poketmondata.attack}</td>
        </tr>
        <tr>
          <td>defense</td>
          <td>{poketmondata.defense}</td>
        </tr>
        <tr>
          <td>special-attack</td>
          <td>{poketmondata["special-attack"]}</td>
        </tr>
        <tr>
          <td>special-defense</td>
          <td>{poketmondata["special-defense"]}</td>
        </tr>
        <tr>
          <td>speed</td>
          <td>{poketmondata.speed}</td>
        </tr>
      </tbody>
    </table>
  );
}
