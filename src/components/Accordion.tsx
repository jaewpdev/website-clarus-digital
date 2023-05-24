import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}

function Accordion({ children, isOpen, className }: AccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={classNames(
        'transition-all duration-300 overflow-hidden',
        className
      )}
      style={{ maxHeight: `${contentHeight}px` }}
      ref={contentRef}
    >
      {children}
    </div>
  );
}

export default Accordion;
