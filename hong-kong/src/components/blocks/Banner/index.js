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
                                <p></p>Чайная в Ростове-на-Дону
                            </b>
                        </div>
                        <div className={styles.subTitle}>
                        Хорошая книга - хороший друг,
                        Хороший чай - хороший вечер!
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
