import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: './coffee-mug.png',
}

const App = () => {
  return (
    <div>
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
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
