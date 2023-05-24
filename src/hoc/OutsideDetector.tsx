import React, { useRef, useEffect, ComponentType } from 'react';

interface OutsideDetectorProps {
  stateSetter: (value: boolean) => void;
  el?: keyof JSX.IntrinsicElements | ComponentType<any>;
  [prop: string]: any;
}

function useOutsideDetector(
  ref: React.RefObject<HTMLElement | null>,
  stateSetter: (value: boolean) => void
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        stateSetter(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, stateSetter]);
}

const OutsideDetector: React.FC<OutsideDetectorProps> = ({
  stateSetter,
  el,
  ...props
}) => {
  const Element = el || 'div';
  const wrapperRef = useRef<HTMLElement | null>(null);
  useOutsideDetector(wrapperRef, stateSetter);

  return <Element className="z-50" {...props} ref={wrapperRef} />;
};

export default OutsideDetector;
