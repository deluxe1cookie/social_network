import styles from './Users.module.css';
import {Link} from 'react-router-dom';
import React from 'react';

const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                if (Math.abs(p - props.currentPage) < 5) {
                    const linkStyle = styles.page + ((p === props.currentPage) ? (' ' + styles.selectedPage) : '');
                    return <Link to={'?page=' + p} key={p.id}
                                 className={linkStyle}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}
                    >{p} </Link>;
                }
            })}
        </div>
    );
};

export default Paginator;