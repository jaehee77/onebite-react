import React from 'react';

// Accordion 컴포넌트
const Accordion = ({ children }) => {
  return <div>a{children}</div>;
};

// Accordion.Item 컴포넌트
Accordion.Item = ({ value, children }) => {
  return <div>{children}</div>;
};
// 컴포넌트 개발자 도구에서 렌더링되어 보여짐
Accordion.Item.displayName = 'Accordion.Item';

// Accordion.Control 컴포넌트
Accordion.Control = ({ children, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
};

Accordion.Control.displayName = 'Accordion.Control';

// Accordion.Panel 컴포넌트
Accordion.Panel = ({ children, isOpen }) => {
  return isOpen ? (
    <div style={{ padding: '10px', backgroundColor: '#f4f4f4' }}>
      {children}
    </div>
  ) : null;
};

Accordion.Panel.displayName = 'Accordion.Panel';

export default Accordion;
