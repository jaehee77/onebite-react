import React from 'react';
import Accordion from './AccodianComponent';

export default function AccordionPage() {
  return (
    <>
      <Accordion>
        <Accordion.Item value="1">Item 1</Accordion.Item>
        <Accordion.Item value="2">Item 2</Accordion.Item>
        <Accordion.Item>
          아이템 333
          <Accordion.Panel isOpen={true}>패널입니다.</Accordion.Panel>
          <Accordion.Item value="2">
            Item 내부내부입니다
          </Accordion.Item>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
