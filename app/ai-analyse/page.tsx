"use client";

// pages/ai-analyse.tsx

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Info } from "lucide-react";

const models = ["openai", "claude", "gemini", "mistral", "groq"];
const techniques = ["zero-shot", "few-shot", "instruction", "contextual", "chain-of-thought"];
const fewShotVariants = [
  {
    value: "transform-to-question",
    label: "Transform to Question",
    description: "Turn statements into yes/no questions using example patterns."
  },
  {
    value: "ask-through-structure",
    label: "Ask Through Structure",
    description: "Ask a friendly intro question, give context, then end with a follow-up."
  },
  {
    value: "empathy-pattern",
    label: "Empathy Pattern",
    description: "Respond with empathy, acknowledge the problem, offer a next step."
  },
  {
    value: "persona-rewrite",
    label: "Persona Rewrite",
    description: "Rephrase the input in the tone of a warm, cheerful neighbor."
  },
];

export default function AiAnalysePage() {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("openai");
  const [selectedTechnique, setSelectedTechnique] = useState("zero-shot");
  const [fewShotVariant, setFewShotVariant] = useState("transform-to-question");
  const [result, setResult] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const selectedVariant = fewShotVariants.find(v => v.value === fewShotVariant);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/llm/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          model: selectedModel,
          technique: selectedTechnique,
          few_shot_config:
            selectedTechnique === "few-shot"
              ? { variant: fewShotVariant }
              : undefined,
        }),
      });
      const data = await response.json();
      setResult((prev) => [
        ...prev,
        {
          model: selectedModel,
          technique: selectedTechnique,
          tokens: data.tokens,
          quality: data.quality,
          output: data.output,
        },
      ]);
    } catch (error) {
      console.error("Error generating:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 mt-30">
      <Card>
        <CardHeader>
          <CardTitle>LLM Prompt Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="flex gap-4 flex-wrap">
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Choose Model" />
              </SelectTrigger>
              <SelectContent>
                {models.map((model) => (
                  <SelectItem key={model} value={model}>{model}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedTechnique} onValueChange={setSelectedTechnique}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Choose Technique" />
              </SelectTrigger>
              <SelectContent>
                {techniques.map((tech) => (
                  <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {selectedTechnique === "few-shot" && (
              <div className="space-y-1">
                <Select value={fewShotVariant} onValueChange={setFewShotVariant}>
                  <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Few-shot Variant" />
                  </SelectTrigger>
                  <SelectContent>
                    {fewShotVariants.map((v) => (
                      <SelectItem key={v.value} value={v.value}>{v.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedVariant && (
                  <div className="text-sm text-muted-foreground flex items-start gap-1">
                    <Info className="w-4 h-4 mt-0.5" />
                    <span>{selectedVariant.description}</span>
                  </div>
                )}
              </div>
            )}

            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Generating..." : "Generate"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {result.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Technique</TableHead>
                  <TableHead>Tokens</TableHead>
                  <TableHead>Quality</TableHead>
                  <TableHead>Output</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.model}</TableCell>
                    <TableCell>{row.technique}</TableCell>
                    <TableCell>{row.tokens}</TableCell>
                    <TableCell>{"★".repeat(Math.round(row.quality))}</TableCell>
                    <TableCell className="max-w-[300px] whitespace-pre-wrap">{row.output}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}