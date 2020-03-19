import React from "react";
import styles from './FormsControls.module.css';

export const Element = (Element) => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <Element className={styles.formControl + ' ' + (hasError && styles.error)} {...input} {...props} />
            <div>
                {hasError && <span className={styles.error}>{meta.error}</span>}
            </div>
        </div>
    );
};