import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import InteractiveQuiz from "../InteractiveQuiz";
import { QUIZ_SEEDS } from "@/lib/constants";

describe("InteractiveQuiz Component", () => {
  it("should render the first question and its options", () => {
    render(<InteractiveQuiz questions={QUIZ_SEEDS} />);

    expect(screen.getByText(/pertanyaan 1 dari/i)).toBeInTheDocument();
    expect(
      screen.getByText(/apa tindakan pertama yang wajib dilakukan jika melihat kepulan asap/i)
    ).toBeInTheDocument();
  });

  it("should allow selecting an answer and progressing to the next question", () => {
    render(<InteractiveQuiz questions={QUIZ_SEEDS} />);

    const correctOption = screen.getByText(/segera catat lokasi\/koordinat dan lapor ke pos pendakian/i);
    fireEvent.click(correctOption);

    const confirmBtn = screen.getByRole("button", { name: /kunci jawaban/i });
    fireEvent.click(confirmBtn);

    const nextBtn = screen.getByRole("button", { name: /lanjutkan/i });
    fireEvent.click(nextBtn);

    // Now question 2 should be visible
    expect(screen.getByText(/pertanyaan 2 dari/i)).toBeInTheDocument();
  });
});
