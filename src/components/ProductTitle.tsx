import React, { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { productContext } from './ProductCard';

export interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: React.CSSProperties
}

export const ProductTitle = ({ title = '', className = '', style }: ProductTitleProps) => {
    const { product } = useContext(productContext);
    return <span style={style} className={`${styles.productDescription} ${className}`}>{title ? title : product.title}</span>
}