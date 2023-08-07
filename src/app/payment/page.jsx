'use client';
import Image from 'next/image';

import { checkout } from '../../checkout';

export default function Home() {
  return (
    <main >
      <div>
       
        <button
          
          onClick={() => {
            checkout({
              lineItems: [
                { price: 'price_1Nc6k9SAtHhlAeTejeBOP2v7', quantity: 1 },
              ],
            });
          }}
        >
          Buy This image
        </button>
      </div>
    </main>
  );
}
