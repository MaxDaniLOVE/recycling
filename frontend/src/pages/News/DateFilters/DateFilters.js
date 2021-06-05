import React from 'react';

const months = [
    { id: 1, label: 'Январь' },
    { id: 2, label: 'Февраль' },
    { id: 3, label: 'Март' },
    { id: 4, label: 'Апрель' },
    { id: 5, label: 'Май' },
    { id: 6, label: 'Июнь' },
    { id: 7, label: 'Июль' },
    { id: 8, label: 'Август' },
    { id: 9, label: 'Сентябрь' },
    { id: 10, label: 'Октябрь' },
    { id: 11, label: 'Ноябрь' },
    { id: 12, label: 'Декабрь' },
]

export const DateFilters = ({ activeYear, setActiveYear, activeMonth, setActiveMonth }) => (
    <div className="calendar__inner">
        <ul className="calendar__years-list">
            <li
                onClick={({ currentTarget: { id } }) => setActiveYear(+id)}
                id={2019}
                className={`calendar__years-item ${activeYear === 2019 && 'selected'}`}
            >
                2019
            </li>
            <li
                onClick={({ currentTarget: { id } }) => setActiveYear(+id)}
                id={2020}
                className={`calendar__years-item ${activeYear === 2020 && 'selected'}`}
            >
                2020
            </li>
            <li
                onClick={({ currentTarget: { id } }) => setActiveYear(+id)}
                id={2021}
                className={`calendar__years-item ${activeYear === 2021 && 'selected'}`}
            >
                2021
            </li>
        </ul>
        <ul className="calendar__monthes-list">
            {
                months.map(({ id, label }) => (
                    <li
                        key={id}
                        id={id}
                        className={`calendar__monthes-item ${activeMonth === id && 'selected'}`}
                        onClick={() => setActiveMonth(id)}
                    >
                        {label}
                    </li>
                ))
            }
        </ul>
    </div>
)
