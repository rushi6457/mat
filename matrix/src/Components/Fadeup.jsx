import React, { useRef, useEffect, useState } from 'react';
import './Fadeup.css';

function FadeUp(props) {
  const ref = useRef();
    const[visible,setVisible] = useState(true)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, [props]);

  return (
    <div ref={ref} className={props.className}>
      {props.children}
    </div>
  );
}

export default FadeUp;
