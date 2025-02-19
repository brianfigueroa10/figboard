import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataFaqs } from "./faqs-data";

export function AccordionFaqs() {
  return (
    <Accordion type="single" collapsible>
      {dataFaqs.map(({ id, question, answer }) => (
        <AccordionItem key={id} value={question}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
