# Product-card-dv 

This is a release package in NPM

### Example

```js
            <ProductCard
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ count, isMaxCountReached, increaseBy, reset }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>
```
