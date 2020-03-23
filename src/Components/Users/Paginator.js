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
        <div className={styles.paginator}>
            <Link to={'?page=' + 1}
                  className={styles.page + ((1 === props.currentPage) ? (' ' + styles.selectedPage) : '')}
                  onClick={() => {
                      props.onPageChanged(1);
                  }}
            >&lt;&lt; </Link>

            {pages.map(p => {
                if (Math.abs(p - props.currentPage) < 3) {
                    const linkStyle = styles.page + ((p === props.currentPage) ? (' ' + styles.selectedPage) : '');
                    return <Link to={'?page=' + p} key={p.id}
                                 className={linkStyle}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}
                    >{p} </Link>;
                }
                return null;
            })}

            <Link to={'?page=' + pages[pages.length - 1]}
                  className={styles.page + ((pages[pages.length - 1] === props.currentPage) ? (' ' + styles.selectedPage) : '')}
                  onClick={() => {
                      props.onPageChanged(pages[pages.length - 1]);
                  }}
            >&gt;&gt; </Link>
        </div>
    );
};

export default Paginator;