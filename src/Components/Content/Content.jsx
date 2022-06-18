import React from 'react';
import classes from './Content.module.scss';
import rocket from "../../assets/img/rocket.png";

const Content = () => {
    return (
        <article className={classes.content}>
            <div className={classes.content__container}>
                <div className={classes.content__main}>
                    <div>
                        <div className={classes.content__article1}>
                            <div className={classes.content__article1__title}>
                                Falcon Heavy <br/> Overview
                            </div>
                            <div className={classes.content__article1__text}>
                                <div>
                                    HEIGHT <br/>
                                    DIAMETER <br/>
                                    MASS <br/>
                                    PAYLOAD TO LEO <br/>
                                    PAYLOAD TO GTO <br/>
                                    PAYLOAD TO MARS <br/>
                                </div>
                                <div>
                                    70 m / <span>229.6 ft</span> <br/>
                                    12.2 m / <span>39.9 ft</span> <br/>
                                    1,420,788 kg / <span>3,125,735 lb</span> <br/>
                                    63,800 kg / <span>140,660 lb</span> <br/>
                                    26,700 kg / <span>58,860 lb</span> <br/>
                                    16,800 kg / <span>37,040 lb</span> <br/>
                                </div>
                            </div>
                        </div>
                        <div className={classes.content__article2}>
                            <div className={classes.content__article2__title}>
                                UNMATCHED <br/> PERFORMANCE
                            </div>
                            <div className={classes.content__article2__text}>
                                With more than 5 million pounds of thrust at liftoff, Falcon Heavy is
                                the most capable rocket flying. By comparison, the liftoff thrust of
                                the Falcon Heavy equals approximately eighteen 747 aircraft at full
                                power. Falcon Heavy can lift the equivalent of a fully loaded 737
                                jetliner—complete with passengers, luggage and fuel—to orbit.
                            </div>
                        </div>
                    </div>
                    <div className={classes.content__image}>
                        <img src={rocket} alt="rocket"/>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Content;