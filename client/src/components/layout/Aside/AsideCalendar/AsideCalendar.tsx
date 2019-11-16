import * as React from 'react';
import { Calendar } from './Calendar/Calendar';
import './AsideCalendar.scss';

function AsideCalendar(props: any) {
    return (
        <section className="aside-right__calendar calendar">
            <Calendar date={props.date} />
            <section className="calendar__heading heading">
                <h2 className="heading heading--middle heading--blue">{props.title}</h2>
                <h3 className="heading heading--small heading--grey">{props.description}</h3>
                <button className="calendar__heading__button">View All</button>
            </section>
        </section>
    );
};

export { AsideCalendar };