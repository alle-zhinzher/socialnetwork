import React from 'react';
import './Calendar.scss';

function Calendar(props: any) {
    return (
        <section className="calendar__img">
            <header className="calendar__img__header">{props.date.month}</header>
            <section className="calendar__img__date">{props.date.day}</section>
        </section>
    );
};

export { Calendar };