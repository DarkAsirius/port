import React from 'react';
import styles from "./About.module.scss"
import Container from "../../UI/Container";
import Cards from '../Cards';
import Show from "../../UI/Show";
import "../../../global.css";

const About = () => {
    return (
        <div className={styles.body} id={"about"}>
            <div className={styles.wrapper}>
                <Container>
                    <Show>
                        <div className={styles.about}>
                            <div className={styles.text}>
                                <h2>О НАС</h2>
                                <p>Уютная атмосфера В нашем чайном домике создана теплая и располагающая атмосфера, идеально подходящая для отдыха и общения. Наш интерьер тщательно продуман, чтобы создать ощущение комфорта и спокойствия, что делает его идеальным местом для отдыха и наслаждения чашечкой чая.
                                    Широкий ассортимент чая Мы гордимся нашей обширной коллекцией чаев со всего мира. В нашем меню есть что-то на любой вкус и предпочтения - от классических черных и зеленых чаев до экзотических травяных и фруктовых настоек. Наш квалифицированный персонал с радостью поможет гостям сориентироваться в нашем ассортименте и подобрать идеальную чашку.
                                </p>
                            </div>
                            <div>
                                <img src="images/About/about.webp" className={styles.imgAbout}></img>
                            </div>
                        </div>
                    </Show>
                </Container>
            </div>
        </div>
    );
};

export default About;