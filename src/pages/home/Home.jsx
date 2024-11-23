import React, { useContext, useState } from 'react'
import styles from './Home.module.scss'
import computer from './assets/home-left-1.png.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faCode, faClock } from '@fortawesome/free-solid-svg-icons'
import { MainContext } from '../../context/context'
import Card from '../../components/card/Card'
import Layout from '../../components/layout/Layout'

const Home = () => {

    const { products } = useContext(MainContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(12);

    const lastIndexItem = currentPage * itemPerPage;
    const firstIndexItem = lastIndexItem - itemPerPage;

    const currentProducts = products.slice(firstIndexItem, lastIndexItem);

    let pages = [];

    for (let i = 1; i <= Math.ceil(products.length / itemPerPage); i++) {
        pages.push(i);
    }

    return (
        <Layout>
            <div className={styles.sectionOne}>
                <div className={styles.containerOne}>
                    <h2>Mass People <br />Oriented Software</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt.</p>
                    <div className={styles.buttonInFirstSection}>
                        <button className={styles.transparentButton}>Get Started</button><button className={styles.normalButton}>Download</button>
                    </div>
                </div>
                <img src={computer} alt="computer image" />
            </div>
            <div className={styles.sectionTwo}>
                <div className={styles.containerTwo}>
                    <div className={styles.howWorksTitle}>
                        <h2>How It work for you</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <div className={styles.services}>
                        <div className={styles.invidualService}>
                            <FontAwesomeIcon icon={faDesktop} />
                            <h4>Stunning Visuals</h4>
                            <p>Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola.</p>
                        </div>
                        <div className={styles.invidualService}>
                            <FontAwesomeIcon icon={faCode} />
                            <h4>Stunning Visuals</h4>
                            <p>Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola.</p>
                        </div>
                        <div className={styles.invidualService}>
                            <FontAwesomeIcon icon={faClock} />
                            <h4>Stunning Visuals</h4>
                            <p>Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sectionThree}>
                <div className={styles.containerThree}>
                    {currentProducts && currentProducts.map(item => <Card item={item} />)}
                </div>
                <div className={styles.pageNums}>
                    {pages && pages.map(item => {
                        return <button onClick={() => setCurrentPage(item)}>{item}</button>
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default Home