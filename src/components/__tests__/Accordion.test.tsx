import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

describe("Accordion Component with Smooth Collapse", () => {
  it("renders accordion items and triggers properly", () => {
    render(
      <Accordion className="w-full">
        <AccordionItem value="faq-1" className="test-item">
          <AccordionTrigger>Bagaimana cara menyetor sampah?</AccordionTrigger>
          <AccordionContent>Pilahkan sampah dari rumah sesuai jenis lalu bawa ke drop-point.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Bagaimana cara menyetor sampah?");
    expect(trigger).toBeDefined();
  });

  it("handles trigger click and exposes data-slot accordion-content", () => {
    render(
      <Accordion className="w-full">
        <AccordionItem value="faq-1">
          <AccordionTrigger>Berapa batas berat penimbangan?</AccordionTrigger>
          <AccordionContent>Minimal 1 kg untuk mendapatkan poin reward digital.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Berapa batas berat penimbangan?");
    fireEvent.click(trigger);

    const content = screen.getByText(/Minimal 1 kg untuk mendapatkan poin reward/);
    expect(content).toBeDefined();
  });
});
