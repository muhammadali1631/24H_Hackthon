import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion"
  

const Faqs = () => {
  return (
    <Accordion type="single" collapsible className='text-xl'>
    <AccordionItem value="item-1">
      <AccordionTrigger>Return Policy Available?</AccordionTrigger>
      <AccordionContent className='text-xl'>
        Yes. If product wrong or damage product we will return.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Do I need an account to place an order?</AccordionTrigger>
      <AccordionContent className='text-xl'>
      No, you can check out as a guest. However, creating an account allows you to track orders and save your details for future purchases.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>What are the shipping charges?</AccordionTrigger>
      <AccordionContent className='text-xl'>
      Shipping charges vary based on your location and the total weight of your order. Free shipping is available on orders over 100$.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}

export default Faqs