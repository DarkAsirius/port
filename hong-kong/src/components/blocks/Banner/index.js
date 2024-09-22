import React from 'react';
import styles from "./Banner.module.scss"
import Container from "../../UI/Container";
import Cards from "../Cards"
import Show from "../../UI/Show"


const Banner = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            <b> На Заре!
                                <p>Чайная в Ростове-на-Дону</p>
                            </b>
                        </div>
                        <div className={styles.subTitle}>
                            <p className={styles.subText}>Хорошая книга - хороший друг,</p>
                            <p className={styles.subText}>Хороший чай - хороший вечер!</p>
                        </div>
                        <div className={styles.button}>
                            <a href="#about">О нас</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;
