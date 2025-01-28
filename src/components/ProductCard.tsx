import React, { createContext, JSX } from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { InitialValues, OnChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    product: Product;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product,
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    )
}

export default ProductCard;