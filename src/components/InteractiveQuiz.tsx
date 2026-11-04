"use client";

import React, { useState } from "react";
import { QuizQuestion } from "@/types";
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, HelpCircle } from "lucide-react";

interface InteractiveQuizProps {
  questions: QuizQuestion[];
}

export default function InteractiveQuiz({ questions }: InteractiveQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!questions || questions.length === 0) {
    return null;
  }

  const currentQ = questions[currentIndex];

  const handleSelectOption = (id: string) => {
    if (showFeedback) return;
    setSelectedOptionId(id);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOptionId) return;

    const chosenOption = currentQ.options.find((opt) => opt.id === selectedOptionId);
    if (chosenOption && chosenOption.isCorrect) {
      setScore((prev) => prev + 1);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedOptionId(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setShowFeedback(false);
    setScore(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    const isPass = score >= Math.ceil(questions.length * 0.75);

    return (
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-center space-y-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-forest-800 dark:bg-forest-900/60 dark:text-emerald-300 mx-auto">
          <Award className="h-9 w-9" aria-hidden="true" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
            Hasil Uji Kesiapsiagaan
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-foreground">
            {isPass ? "Lulus : Duta Rimba Siaga Api Ciremai" : "Perlu Pendalaman Materi Konservasi"}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            {isPass
              ? "Luar biasa! Pemahaman Anda mengenai mitigasi kebakaran hutan dan etika pendakian di lereng Ciremai sangat baik."
              : "Tetap semangat! Pelajari kembali SOP Rimba Bebas Api sebelum melakukan pendakian ke kawasan puncak Ciremai."}
          </p>
        </div>

        <div className="inline-flex items-center gap-3 rounded-xl bg-muted/50 border border-border px-6 py-4">
          <span className="text-sm font-medium text-muted-foreground">Skor Akhir :</span>
          <span className="text-3xl font-black text-foreground tabular-nums">
            {score} / {questions.length}
          </span>
        </div>

        <div>
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-sm hover:opacity-95"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            <span>Ulangi Kuis Edukasi</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
      {/* Progress Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Pertanyaan {currentIndex + 1} dari {questions.length}
          </span>
        </div>
        <span className="text-xs font-bold text-primary tabular-nums">
          Skor Sementara: {score}
        </span>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
          {currentQ.question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6" role="radiogroup" aria-label={currentQ.question}>
        {currentQ.options.map((opt) => {
          const isSelected = selectedOptionId === opt.id;
          const isCorrect = opt.isCorrect;

          let btnClass = "border-border bg-background hover:bg-muted/40 text-foreground";
          if (showFeedback) {
            if (isCorrect) {
              btnClass = "border-emerald-500 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-200";
            } else if (isSelected && !isCorrect) {
              btnClass = "border-red-500 bg-red-50 text-red-950 dark:bg-red-950/40 dark:text-red-200";
            }
          } else if (isSelected) {
            btnClass = "border-primary bg-primary/5 text-foreground ring-1 ring-primary";
          }

          return (
            <button
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={showFeedback}
              onClick={() => handleSelectOption(opt.id)}
              className={`w-full min-h-[52px] p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${btnClass}`}
            >
              <span>{opt.text}</span>
              {showFeedback && isCorrect && (
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" aria-hidden="true" />
              )}
              {showFeedback && isSelected && !isCorrect && (
                <XCircle className="h-5 w-5 text-red-600 shrink-0" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Callout */}
      {showFeedback && (
        <div className="rounded-xl bg-muted/60 border border-border p-4 mb-6 text-xs leading-relaxed space-y-1">
          <span className="font-bold text-foreground block">Penjelasan Resmi TNGC :</span>
          <p className="text-muted-foreground">{currentQ.explanation}</p>
        </div>
      )}

      {/* Action Button */}
      <div className="flex justify-end pt-2 border-t border-border">
        {!showFeedback ? (
          <button
            type="button"
            disabled={!selectedOptionId}
            onClick={handleConfirmAnswer}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-xs sm:text-sm font-bold text-white shadow-sm hover:opacity-95 disabled:opacity-40"
          >
            <span>Kunci Jawaban</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNextQuestion}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-xs sm:text-sm font-bold text-white shadow-sm hover:opacity-95"
          >
            <span>{currentIndex + 1 < questions.length ? "Lanjutkan" : "Lihat Nilai Akhir"}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
