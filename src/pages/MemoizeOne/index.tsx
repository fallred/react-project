import memoize from 'memoize-one';

const computeExpensiveValue = (a, b) => {
  // Expensive computation here
};

const memoizedValue = memoize(computeExpensiveValue);

// Usage
const result = memoizedValue(a, b);