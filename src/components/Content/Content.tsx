import React from 'react';
import { ParentComponentProps } from '../../interfaces/ParentComponentProps';
import styles from './Content.module.css';

export default function Content(props: ParentComponentProps) {
    return (
        <div className={styles.ContentComponent}>
        </div>
    );
}