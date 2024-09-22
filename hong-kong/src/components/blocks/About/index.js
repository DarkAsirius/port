import React from 'react';
import styles from "./About.module.scss"
import Container from "../../UI/Container";
import Cards from '../Cards';
import Show from "../../UI/Show";
import "../../../global.css";

const About = () => {
    return (
        <div className={styles.body} id={"about"}>
                <Container>
                    <Show>
                        <div className={styles.about}>
                            <div className={styles.text}>
                                <h2 className={styles.title}>&nbsp;&nbsp;&nbsp;&nbsp;О НАС</h2>
                                <ul>
                                    <li className={styles.list}>Уютная атмосфера</li> 
                                    <p className={styles.subText}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;В нашем чайном домике создана теплая и располагающая атмосфера, идеально подходящая для отдыха и общения. Наш интерьер тщательно продуман, чтобы создать ощущение комфорта и спокойствия, что делает его идеальным местом для отдыха и наслаждения чашечкой чая.</p>
                                    <li className={styles.list}>Широкий ассортимент чая</li>
                                    <p className={styles.subText}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Мы гордимся нашей обширной коллекцией чаев со всего мира. В нашем меню есть что-то на любой вкус и предпочтения - от классических черных и зеленых чаев до экзотических травяных и фруктовых настоек. Наш квалифицированный персонал с радостью поможет гостям сориентироваться в нашем ассортименте и подобрать идеальную чашку.</p>
                                </ul>
                            </div>
                            <div>
                                <img src="images/About/about.webp" className={styles.imgAbout}></img>
                            </div>
                        </div>
                    </Show>
                </Container>
            </div>
    );
};

export default About;