import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import Button from "../Button/Button";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import styles from './ClassDetailsPage.module.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import ReadMoreReadLess from '../ReadMoreReadLess/ReadMoreReadLess';

export interface ClassDetailsPageProps {
    title: string;
    subtitle: string;
    startTime: Date;
    description: string;
    video?: string;
    image?: HTMLImageElement;
    name: string;
    experience: string;
    price: string | number;
    location: string;
    copyright: string;
}

export default function ClassDetailsPage(props: ClassDetailsPageProps) {
    const [days, hours, minutes] = useCountdown(props.startTime);

    return (
        <div className={styles.ClassDetailsPageComponent}>
            <div className={styles.leftSide}>
            <section className={styles.containerOne}>
                <div>
                    <h1 className={styles.title}>Chest Workout</h1>
                    <h2 className={styles.subtitle}>Beginner</h2>
                </div> 
                <div className={styles.countdown}>
                     <span>5d</span>:<span>11h</span>:<span>01m</span>
                 </div>
                <ReadMoreReadLess 
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Tristique odio a, tortor nisl. Nisi, porta diam quam 
                    lacus commodo amet nam. Laoreet tortor est feugiat non. 
                    Quam turpis facilisis bibendum libero. Dolor eget mattis 
                    vitae sit tempus tristique. Vitae leo posuere malesuada 
                    id in. Arcu odio sagittis orci curabitur laoreet ac, 
                    pharetra. Vulputate neque sagittis phasellus varius. 
                    Purus senectus ac etiam massa nunc nisl, nisl nullam. 
                    Mauris, praesent dictum proin feugiat turpis eu. Dui 
                    porttitor aliquet mattis volutpat amet, tellus elit 
                    risus nisi. Congue sit ultrices ultrices donec.'
                    textLimit={200}
                />
                <div className={styles.container}>
                    <div className={styles.containerTwo}>
                        <div className={styles.hexagon}> 
                            <div className={styles.hexagonOne}>
                                <div className={styles.hexagonTwo}>
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoContainer}>
                            <h3 className={styles.name}>Roger Botosh</h3>
                            <h4 className={styles.experience}>30 Years</h4>
                        </div>
                    </div>
                    <p className={styles.price}>$1.99</p>
                </div>
                <div className={styles.classContainer}>
                    <div className={styles.date}>
                        <CalendarMonthOutlinedIcon/>
                        <span className={styles.dateText}>27/06/2022</span>
                    </div>
                    <div className={styles.time}>
                        <ScheduleOutlinedIcon />
                        <span className={styles.timeText}>8:45PM</span>
                    </div>
                    <div className={styles.location}>
                        <PlaceOutlinedIcon />
                        <span className={styles.locationText}> 3, Bay area, California, USA</span>
                    </div>
                </div>
                <div className={styles.registerContainer}>
                    <div className={styles.textContainer}>
                        <p className={styles.registerSubtitle}>Total Amount</p>
                        <p className={styles.registerPrice}>$ 1.99</p>
                    </div>
                    <Button 
                        stretch={true}
                        backgroundColor="secondary">
                        Pay Now & Join Class
                    </Button>
                </div>
            </section>
            <VideoPlayer src={'/public/videos/rope-class.mp4'} />
            </div>
            <div className={styles.rightSide}>
                <p className={styles.copyright}>Copyright © 2020 Quixlab. All Rights Reserved.</p>
            </div>
            
        </div> 
    );
}