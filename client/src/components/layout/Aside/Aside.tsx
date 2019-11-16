import * as React from 'react';
import { AsideHead } from './AsideHead/AsideHead';
import { AsideGalery } from './AsideGalery/AsideGalery';
import { AsideCalendar } from './AsideCalendar/AsideCalendar';
import './Aside.scss';

function Aside() {
    const calendarDate = {
        month: "sep",
        day: '07',
    };
    const calendarTitle = "September Hard Party";
    const calendarDescription = "Student disco-party";

    return (
        <aside className="page__aside-right aside-right">
            <AsideHead />
            <AsideCalendar
                date={calendarDate}
                title={calendarTitle}
                description={calendarDescription} />
            <AsideGalery />
        </aside>
    );
};

export { Aside };