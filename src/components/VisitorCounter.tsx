import { useEffect, useState } from 'react';

function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/visitor-count')
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  return (
    <div className="visitor-counter">
      {count !== null ? `👀 ${count} visitors` : 'Loading...'}
    </div>
  );
}

export default VisitorCounter;