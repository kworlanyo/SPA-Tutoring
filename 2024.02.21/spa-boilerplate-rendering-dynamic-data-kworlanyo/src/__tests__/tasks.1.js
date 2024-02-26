import ReactDOM from 'react-dom/client';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../App';

// NOTE: This tests file is a relic from create-react app and not currently in use.

describe('Render object data', () => {
  it('Data from `customer` object is rendered on the page', () => {
    const container = document.createElement('div');
    document.body.append(container);
    act(() => {
      ReactDOM.createRoot(container).render(<App />);
    });

    const h1 = container.querySelector('h1');
    const h2 = container.querySelector('h2');
    expect(h1).not.toBe(null);
    expect(h2).not.toBe(null);
    expect(h1.textContent).toMatch(/bob/i);
    expect(h2.textContent).toMatch(/dylan/i);
  });
});
