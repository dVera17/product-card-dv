import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

const useProduct = ({ onChange, product, value, initialValues }: UseProductArgs) => {
    const isMounted = useRef(false);

    const [counter, setCounter] = useState<number>(() =>
        initialValues?.count ?? value ?? 0
    );

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        if (initialValues?.maxCount && newValue > initialValues.maxCount) return;
        setCounter(newValue);

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => setCounter(initialValues?.count || 0);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }

        if (value !== undefined) {
            setCounter(value);
        }
    }, [value]);

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }
}

export default useProduct;