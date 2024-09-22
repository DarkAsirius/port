import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from "./Footer.module.scss";
import Container from "../../UI/Container";

const Footer = () => {
    const footerItems = [
        { value: "О нас", href: "about" },
        { value: "Ассортимент", href: "assorty" },
        { value: "Галерея", href: "gallery" },
        { value: "Акции", href: "sale" },
        { value: "Контакты", href: "contacts" },
        { value: "Как пройти?", href: "city" },
    ];

    return (
        <div className={styles.body}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <div className={styles.rows}>
                            <div className={styles.logo}>
                                <img src="/images/logo.jpg" alt="Logo" />
                            </div>
                            <div className={styles.row}>
                                {footerItems.slice(0, 3).map(item => (
                                    <ScrollLink 
                                        to={item.href}
                                        className={styles.link}
                                        key={item.value}
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                    >
                                        {item.value}
                                    </ScrollLink>
                                ))}
                            </div>
                            <div className={styles.row}>
                                {footerItems.slice(3).map(item => (
                                    <ScrollLink 
                                        to={item.href}
                                        className={styles.link}
                                        key={item.value}
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                    >
                                        {item.value}
                                    </ScrollLink>
                                ))}
                            </div>
                        </div>
                        <div className={styles.line}></div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
