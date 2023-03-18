import React, {useState} from 'react';

function DateTime(props) {
    console.log('222', props);
    return (
        <p className="date">{props.date}</p>
    )
}

function DateTimePretty(props) {
    const {date, oper} = {...props};
    const nowDate = new Date('2018-03-03 12:12:00');
    const lastDate = new Date(date);
    const sDay = 24 * 60 * 60 * 1000;
    const sHour = 1 * 60 * 60 * 1000;
    const difference = nowDate.getTime() - lastDate.getTime();
    let dateToOper = null;
    if ( difference > sDay) {
        dateToOper = Math.floor(difference / sDay) + ' дней';
    } else if (difference < sHour) {
        dateToOper = Math.floor(difference /  (60 * 1000)) + ' минут';
    } else {
        dateToOper = Math.floor(difference / sHour)  + ' часов';
    }
    return oper({date: dateToOper + ' ' + 'назад'});
}

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            {/* <DateTime date={props.date} /> */}
            <DateTimePretty date={props.date} oper={DateTime}/>
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-02 15:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}