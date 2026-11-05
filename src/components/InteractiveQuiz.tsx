"use client";

import React, { useState } from "react";
import { QuizQuestion } from "@/types";
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, HelpCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
      <Card className="p-6 sm:p-8 text-center space-y-6 shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
          <Award className="h-9 w-9" aria-hidden="true" />
        </div>

        <div>
          <Badge variant="outline" className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground border-border">
            Hasil Uji Kesiapsiagaan
          </Badge>
          <CardTitle className="text-2xl sm:text-3xl font-black text-foreground">
            {isPass ? "Lulus : Duta Rimba Siaga Api Ciremai" : "Perlu Pendalaman Materi Konservasi"}
          </CardTitle>
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
          <Button
            type="button"
            onClick={handleRestart}
            className="h-11 px-6 text-sm font-bold gap-2 shadow-sm"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            <span>Ulangi Kuis Edukasi</span>
          </Button>
        </div>
      </Card>
    );
  }

  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <Card className="p-6 sm:p-8 shadow-sm">
      {/* Progress Header */}
      <CardHeader className="p-0 pb-4 border-b border-border mb-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Pertanyaan {currentIndex + 1} dari {questions.length}
            </span>
          </div>
          <Badge variant="secondary" className="text-xs font-bold text-primary tabular-nums">
            Skor Sementara: {score}
          </Badge>
        </div>
        <Progress value={progressPercent} className="h-1.5" />
      </CardHeader>

      {/* Question */}
      <CardContent className="p-0 mb-6 space-y-6">
        <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
          {currentQ.question}
        </h3>

        {/* Options */}
        <div className="space-y-3" role="radiogroup" aria-label={currentQ.question}>
          {currentQ.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            const isCorrect = opt.isCorrect;

            let btnClass = "border-border bg-background hover:bg-muted/40 text-foreground";
            if (showFeedback) {
              if (isCorrect) {
                btnClass = "border-emerald-500 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200";
              } else if (isSelected && !isCorrect) {
                btnClass = "border-destructive bg-destructive/10 text-destructive";
              }
            } else if (isSelected) {
              btnClass = "border-primary bg-primary/10 text-foreground ring-1 ring-primary";
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
                  <XCircle className="h-5 w-5 text-destructive shrink-0" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Callout */}
        {showFeedback && (
          <Alert className="border-border bg-muted/60 text-xs leading-relaxed space-y-1">
            <AlertDescription className="text-muted-foreground text-xs leading-relaxed">
              <strong className="font-bold text-foreground block mb-0.5">Penjelasan Ilmiah CircuLife :</strong>
              {currentQ.explanation}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>

      {/* Action Button */}
      <CardFooter className="p-0 pt-4 flex justify-end border-t border-border">
        {!showFeedback ? (
          <Button
            type="button"
            disabled={!selectedOptionId}
            onClick={handleConfirmAnswer}
            className="h-11 px-6 text-xs sm:text-sm font-bold shadow-sm"
          >
            <span>Kunci Jawaban</span>
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleNextQuestion}
            className="h-11 px-6 text-xs sm:text-sm font-bold gap-2 shadow-sm"
          >
            <span>{currentIndex + 1 < questions.length ? "Lanjutkan" : "Lihat Nilai Akhir"}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
