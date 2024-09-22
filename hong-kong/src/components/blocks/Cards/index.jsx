import React from "react";
import styles from "./Cards.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const Cards = () => {
    return (
        <div className={styles.wrapper}>
            <Show initialX={0}>
                <Container>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div>
                            <img src="images/Cards/work_logo.png" alt="Work" className={styles.imgCard}></img>
                        </div>
                        <div className={styles.text}>
                            <p>Работаем с 11:00 до 23:00</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <img src="images/Cards/sale.png" alt="Sale" className={styles.imgCard}></img>
                        </div>
                        <div className={styles.text}>
                            <p>Скидки студентам до 50%</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <img src="images/Cards/tea.png" alt="Tea"  className={styles.imgCard}></img>
                        </div>
                        <div className={styles.text}>
                            <p>Лучшие сорта чая</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div >
                            <img src="images/Cards/atmos.png" alt="Atmos" className={styles.imgCard}></img>
                        </div>
                        <div className={styles.text}>
                            <p>Приятная атмосфера</p>
                        </div>
                    </div>
                </div>
                </Container>
            </Show>
        </div>
    );
}

export default Cards;