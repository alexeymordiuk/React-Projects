import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import styles from "../scss/Program.module.scss";

import { dateDevice } from "../dates/Program/dateDevice";
import { title } from "../dates/Program/title";
import { dateProgramm } from "../dates/Program/dateProgramm";
import { days } from "../dates/Program/days";
import { food } from "../dates/Program/programFood";

const Programm = () => {
  const [currentTab, setCurrentTab] = React.useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <section className={styles.programm}>
      <div className={styles.container}>
        <div className={styles.advantages}>
          {dateDevice.map(({ id, img, text }, i) => {
            return (
              <div className={styles.block} key={id}>
                <img src={img} alt="icon" />
                <p>{text}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.buttons}>
          <a href="/" className={styles.btn}>
            Nutrition programs
          </a>
          <a href="/" className={styles.btn__gray}>
            Special programs
          </a>
        </div>

        <div className={styles.titles}></div>

        <Tabs>
          <TabList className={styles.titles}>
            {title.map(({ id, title, subtitle }, i) => {
              return (
                <Tab key={id}>
                  <div className={styles.titles__about}>
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </Tab>
              );
            })}
          </TabList>

          <div className={styles.halfed}>
            {dateProgramm.map(
              (
                {
                  id,
                  title,
                  kalls,
                  text,
                  name,
                  day1,
                  day2,
                  day3,
                  food,
                  dashed1,
                  price1,
                  price2,
                  price3,
                  price4,
                  price5,
                },
                i
              ) => {
                return (
                  <TabPanel key={id} className={styles.tab}>
                    <div className={styles.about__programm}>
                      <div>
                        <h2>{title}</h2>
                        <p>{kalls} kl</p>
                      </div>
                      <p className={styles.text}>{text}</p>
                    </div>

                    <div className={styles.table}>
                      <div className={styles.col}>
                        <p>{name}</p>
                        <p>{day1}</p>
                        <p>{day2}</p>
                        <p>{day3}</p>
                        <p>{food}</p>
                      </div>

                      <div className={styles.col__inner}>
                        <div className={styles.col}>
                          <p>{dashed1}</p>
                          <p>-</p>
                          <p>{dashed1}</p>
                          <p>{dashed1}</p>
                          <p>{dashed1}</p>
                        </div>

                        <div className={styles.col}>
                          <p>{price1}</p>
                          <p>{price2}</p>
                          <p>{price3}</p>
                          <p>{price4}</p>
                          <p>{price5}</p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.button}>
                      <a href="/" className={styles.btn_primary}>
                        Order
                      </a>
                    </div>
                  </TabPanel>
                );
              }
            )}


            <div className={styles.days}>

              <div className={styles.tab__panel}>
                {days.map((tab, i, title) => (
                  <button
                    key={i}
                    id={tab.id}
                    disabled={currentTab === `${tab.id}`}
                    onClick={handleTabClick}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className={styles.content}>
                {food.map((tab, i, food1, time1, food2, time2, food3, time3, food4, time4, 
                food5, time6, menu, menu1, menu3, menu4, menu5, menu6, menu7, menu8, gramm1) => (
                  <div key={i}>
                    {currentTab === `${tab.id}` && (
                      <div className={styles.row}>
                        <div className={styles.col}>
                          <div>
                            <p>{tab.food1}</p>
                            <p>{tab.time1}</p>
                          </div>

                          <div>
                            <p>{tab.food2}</p>
                            <p>{tab.time2}</p>
                          </div>

                          <div>
                            <p>{tab.food3}</p>
                            <p>{tab.time3}</p>
                          </div>

                          <div>
                            <p>{tab.food4}</p>
                            <p>{tab.time4}</p>
                          </div>

                          <div>
                            <p>{tab.food5}</p>
                            <p>{tab.time6}</p>
                          </div>
                        </div>

                        <div className={styles.col}>
                          <div>
                            <p className={styles.food}>{tab.menu}</p>
                          </div>

                          <div>
                            <p>{tab.menu1}</p>
                            <p>{tab.menu3}</p>
                          </div>

                          <div>
                            <p>{tab.menu4}</p>
                            <p>{tab.menu5}</p>
                          </div>

                          <div>
                            <p className={styles.food}>{tab.menu6}</p>
                          </div>

                          <div>
                            <p>{tab.menu7}</p>
                            <p>{tab.menu8}</p>
                          </div>
                        </div>

                        <div className={styles.col}>
                          <div>
                            <p className={styles.food}>{tab.gramm1}</p>
                          </div>

                          <div>
                            <p>{tab.gramm1}</p>
                            <p>{tab.gramm1}</p>
                          </div>

                          <div>
                            <p>{tab.gramm1}</p>
                            <p>{tab.gramm1}</p>
                          </div>

                          <div>
                            <p className={styles.food}>{tab.gramm1}</p>
                          </div>

                          <div>
                            <p>{tab.gramm1}</p>
                            <p>{tab.gramm1}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Programm;
