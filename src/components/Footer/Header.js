import React from 'react';
import style from '../Todo/Todo.module.css'

const filterArr = [
    {
        text: 'All',
        id: 'all'
    },
    {
        text: 'Active',
        id: 'active'
    },
    {
        text: 'Completed',
        id: 'completed'
    },
];

const Header = (props) => {
    return (
        <div className={style.wrap}>
            {filterArr.map(item => (
                <button onClick={() => {
                    props.changeFilter(item.id)
                }} key={item.id} className={item.id === props.currentFilter ? style.active : style.inactive}>{item.text}</button>
            ))}
        </div>
    )
};

export default Header