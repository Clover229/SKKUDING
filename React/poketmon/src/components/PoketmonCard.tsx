import data from "../dataAxios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import styles from "./PoketmonCard.module.css";
type PoketmonDetailProps = {
  index: number;
};

export default function PoketmonCard({ index }: PoketmonDetailProps) {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      //axios는 알아서 JSON으로 변환해줌
      console.log(response.data);
    });
  }, []); //e데이터 한번만 가져오기

  const poketmondata = data[index];

  const handleClick = () => {
    navigate(`/DatailPage/${index}`);
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img
        className={styles["card img"]}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`}
        alt={poketmondata.name}
      />
      <div className={styles["info-wrapper"]}>
        <h1>{poketmondata.name}</h1>
        <div>Height: {poketmondata.height}</div>
        <div>Weight: {poketmondata.weight}</div>
        <div>Types: {poketmondata.types.join(", ")}</div>
      </div>
    </div>
  );
}
