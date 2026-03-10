"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquareText,
  Workflow,
  BrainCircuit,
  Rocket,
  ArrowRight,
  Send,
  Play,
  Upload,
  Terminal,
  FileText,
  CheckCircle2,
  Loader2,
  Circle,
  AlertTriangle,
  Shield,
  Scale,
} from "lucide-react";
import { services, type Service } from "@/data/services";
import { AnimatedSection } from "@/components/AnimatedSection";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  MessageSquareText,
  Workflow,
  BrainCircuit,
  Rocket,
};

/* ── Demo 1: Knowledge Assistant (Chat) ─────────────────── */

const chatPresets = [
  {
    question: "What's our refund policy for enterprise clients?",
    answer:
      'Based on your Enterprise Agreement (Section 4.2): Enterprise clients can request a full refund within 30 days of purchase. After 30 days, pro-rata refunds are available. I found 3 relevant documents — want me to pull them up?',
    sources: ["enterprise-agreement.pdf", "refund-policy-v3.docx", "Q4-memo.md"],
  },
  {
    question: "How do I onboard a new team member?",
    answer:
      "Here's the onboarding checklist from your HR playbook: (1) Send IT access request form, (2) Schedule orientation with department lead, (3) Assign buddy from the team, (4) Complete compliance training within 7 days. I can auto-generate the access request if you'd like.",
    sources: ["hr-playbook.pdf", "onboarding-checklist.xlsx"],
  },
  {
    question: "What were last quarter's top support issues?",
    answer:
      "From your Zendesk data: The top 3 issues in Q4 were (1) Password reset failures — 342 tickets, (2) Billing discrepancies — 218 tickets, (3) API rate limiting — 187 tickets. Password resets spiked 40% after the auth migration in November. Want me to draft a root-cause summary?",
    sources: ["zendesk-export-q4.csv", "auth-migration-log.md"],
  },
  {
    question: "Summarize our NDA terms with Acme Corp.",
    answer:
      'Your NDA with Acme Corp (signed Jan 2025) includes: 2-year confidentiality period, mutual non-disclosure, carve-outs for publicly available info, and a $50K liquidated damages clause. Note: the auto-renewal clause triggers in 6 months — you may want to review before then.',
    sources: ["acme-nda-2025.pdf"],
  },
];

function KnowledgeAssistantDemo() {
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handlePresetClick = useCallback((index: number) => {
    setSelectedPreset(index);
    setShowResponse(false);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setShowResponse(true);
    }, 1400);
  }, []);

  const handleReset = useCallback(() => {
    setSelectedPreset(null);
    setShowResponse(false);
    setIsTyping(false);
  }, []);

  return (
    <div className="rounded-xl border border-[#1E293B] bg-[#0F172A] overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-2 text-xs text-white/50">
          nexus-ai — Knowledge Assistant
        </span>
      </div>

      <div className="p-5 font-mono text-sm min-h-[280px]">
        {selectedPreset === null ? (
          <div className="space-y-3">
            <p className="text-white/50 text-xs mb-4">
              Click a question to ask the AI assistant:
            </p>
            {chatPresets.map((preset, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handlePresetClick(i)}
                className="block w-full text-left px-3 py-2.5 rounded-md bg-white/5 hover:bg-white/10 text-[#6EE7B7] text-sm transition-colors duration-150"
              >
                <span className="text-white/40 mr-2">&gt;</span>
                {preset.question}
              </motion.button>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPreset}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* User message */}
              <div>
                <span className="text-[#6EE7B7]">you@client</span>
                <span className="text-white/40">:~$</span>
                <span className="ml-2 text-[#F1F5F9]">
                  {chatPresets[selectedPreset].question}
                </span>
              </div>

              {/* Typing indicator */}
              {isTyping && (
                <div className="rounded bg-white/5 p-3">
                  <span className="mb-1 block text-xs text-[#6EE7B7]">
                    nexus-ai →
                  </span>
                  <span className="inline-flex gap-1 text-white/60">
                    <span className="animate-pulse">●</span>
                    <span className="animate-pulse [animation-delay:0.2s]">●</span>
                    <span className="animate-pulse [animation-delay:0.4s]">●</span>
                  </span>
                </div>
              )}

              {/* AI response */}
              {showResponse && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="rounded bg-white/5 p-3 text-[#F1F5F9]/90">
                    <span className="mb-1 block text-xs text-[#6EE7B7]">
                      nexus-ai →
                    </span>
                    {chatPresets[selectedPreset].answer}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-white/30">Sources:</span>
                    {chatPresets[selectedPreset].sources.map((src) => (
                      <span
                        key={src}
                        className="text-xs bg-[#6EE7B7]/10 text-[#6EE7B7] px-2 py-0.5 rounded"
                      >
                        {src}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 py-3 flex items-center gap-3">
        {selectedPreset !== null ? (
          <button
            onClick={handleReset}
            className="ml-auto flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm px-4 py-2 rounded-md transition-colors"
          >
            Ask another question
          </button>
        ) : (
          <span className="text-white/30 text-xs font-mono">
            Select a question above to try it
          </span>
        )}
      </div>
    </div>
  );
}

/* ── Demo 2: Workflow Automation ─────────────────────────── */

const workflowSteps = [
  { label: "Reading emails...", icon: MessageSquareText, duration: 1200 },
  { label: "Extracting data...", icon: BrainCircuit, duration: 1000 },
  { label: "Updating CRM...", icon: Workflow, duration: 900 },
  { label: "Drafting reply...", icon: Send, duration: 1100 },
];

function WorkflowAutomationDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isDone, setIsDone] = useState(false);

  const runWorkflow = useCallback(() => {
    setIsRunning(true);
    setCurrentStep(0);
    setCompletedSteps([]);
    setIsDone(false);
  }, []);

  useEffect(() => {
    if (!isRunning || currentStep < 0) return;

    if (currentStep >= workflowSteps.length) {
      setIsDone(true);
      setIsRunning(false);
      return;
    }

    const timer = setTimeout(() => {
      setCompletedSteps((prev) => [...prev, currentStep]);
      setCurrentStep((prev) => prev + 1);
    }, workflowSteps[currentStep].duration);

    return () => clearTimeout(timer);
  }, [isRunning, currentStep]);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setCurrentStep(-1);
    setCompletedSteps([]);
    setIsDone(false);
  }, []);

  return (
    <div className="rounded-xl border border-[#1E293B] bg-[#0F172A] overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-2 text-xs text-white/50">
          nexus-ai — Workflow Automation
        </span>
      </div>

      <div className="p-5 font-mono text-sm min-h-[280px]">
        {currentStep < 0 && !isDone ? (
          <div className="flex flex-col items-center justify-center h-[240px] gap-4">
            <Workflow size={40} className="text-white/20" />
            <p className="text-white/40 text-center text-sm">
              Run the automation pipeline to see AI handle<br />
              a complete email-to-CRM workflow
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-white/40 text-xs mb-4">
              <span className="text-[#6EE7B7]">agent@nexus</span>:~$ run workflow
              --pipeline email-to-crm
            </div>

            {workflowSteps.map((step, i) => {
              const StepIcon = step.icon;
              const isActive = currentStep === i && !completedSteps.includes(i);
              const isComplete = completedSteps.includes(i);
              const isPending = !isActive && !isComplete;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors duration-300 ${
                    isActive
                      ? "bg-[#6EE7B7]/10"
                      : isComplete
                      ? "bg-white/5"
                      : "bg-transparent"
                  }`}
                >
                  <div className="shrink-0">
                    {isComplete ? (
                      <CheckCircle2 size={18} className="text-[#6EE7B7]" />
                    ) : isActive ? (
                      <Loader2
                        size={18}
                        className="text-[#FFBD2E] animate-spin"
                      />
                    ) : (
                      <Circle size={18} className="text-white/20" />
                    )}
                  </div>
                  <StepIcon
                    size={16}
                    className={
                      isComplete
                        ? "text-[#6EE7B7]/60"
                        : isActive
                        ? "text-[#FFBD2E]"
                        : "text-white/20"
                    }
                  />
                  <span
                    className={
                      isComplete
                        ? "text-[#F1F5F9]/70"
                        : isActive
                        ? "text-[#FFBD2E]"
                        : isPending
                        ? "text-white/25"
                        : "text-white/50"
                    }
                  >
                    {isComplete
                      ? step.label.replace("...", " — done")
                      : step.label}
                  </span>
                </motion.div>
              );
            })}

            {isDone && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 rounded-md bg-[#6EE7B7]/10 border border-[#6EE7B7]/20 px-4 py-3 text-[#6EE7B7]"
              >
                ✓ Done. 4 tasks completed in 4.2s
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <span className="text-white/30 text-xs font-mono">
          {isDone
            ? "Pipeline finished"
            : isRunning
            ? "Running pipeline..."
            : "Ready to run"}
        </span>
        <button
          onClick={isDone ? handleReset : runWorkflow}
          disabled={isRunning}
          className="ml-auto flex items-center gap-2 bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white/80 text-sm px-4 py-2 rounded-md transition-colors"
        >
          {isDone ? (
            "Run Again"
          ) : (
            <>
              <Play size={14} />
              Run
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ── Demo 3: Document Analysis ──────────────────────────── */

const sampleDocuments = [
  { name: "lease_agreement.pdf", size: "2.4 MB" },
  { name: "vendor_contract.pdf", size: "1.8 MB" },
  { name: "compliance_report.docx", size: "3.1 MB" },
];

const analysisInsights: Record<
  string,
  { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; text: string; type: "risk" | "term" | "compliance" }[]
> = {
  "lease_agreement.pdf": [
    { icon: AlertTriangle, label: "Risk Flag", text: "Clause 7.3 conflicts with local tenant protection laws — automatic renewal without 60-day notice.", type: "risk" },
    { icon: Scale, label: "Key Term", text: "Late fee structure set at 8%, exceeding the 5% statutory limit in your jurisdiction.", type: "term" },
    { icon: Shield, label: "Compliance", text: "Termination notice period is 15 days — your corporate policy requires minimum 30 days.", type: "compliance" },
    { icon: AlertTriangle, label: "Risk Flag", text: "Security deposit exceeds 2x monthly rent — may violate state housing regulations.", type: "risk" },
  ],
  "vendor_contract.pdf": [
    { icon: AlertTriangle, label: "Risk Flag", text: "Unlimited liability clause in Section 12 — recommend capping at contract value.", type: "risk" },
    { icon: Scale, label: "Key Term", text: "Auto-renewal for 3 years with only 90-day opt-out window.", type: "term" },
    { icon: Shield, label: "Compliance", text: "Data processing terms missing GDPR Article 28 required provisions.", type: "compliance" },
    { icon: Scale, label: "Key Term", text: "IP assignment clause covers all derivative works without time limitation.", type: "term" },
  ],
  "compliance_report.docx": [
    { icon: Shield, label: "Compliance", text: "SOC 2 Type II audit findings: 2 control gaps identified in access management.", type: "compliance" },
    { icon: AlertTriangle, label: "Risk Flag", text: "Penetration test from Q3 has 4 unresolved medium-severity findings.", type: "risk" },
    { icon: Shield, label: "Compliance", text: "HIPAA BAA missing for 3 sub-processors listed in Appendix B.", type: "compliance" },
    { icon: Scale, label: "Key Term", text: "Remediation deadline set for March 31 — 22 days remaining.", type: "term" },
  ],
};

function DocumentAnalysisDemo() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [visibleInsights, setVisibleInsights] = useState<number>(0);

  const handleDocSelect = useCallback((docName: string) => {
    setSelectedDoc(docName);
    setVisibleInsights(0);
    setIsAnalyzing(true);
  }, []);

  useEffect(() => {
    if (!isAnalyzing || !selectedDoc) return;

    const insights = analysisInsights[selectedDoc];
    if (!insights) return;

    // Start showing insights after initial "analyzing" delay
    const startTimer = setTimeout(() => {
      setIsAnalyzing(false);
      setVisibleInsights(1);
    }, 1200);

    return () => clearTimeout(startTimer);
  }, [isAnalyzing, selectedDoc]);

  useEffect(() => {
    if (isAnalyzing || !selectedDoc || visibleInsights === 0) return;

    const insights = analysisInsights[selectedDoc];
    if (!insights || visibleInsights >= insights.length) return;

    const timer = setTimeout(() => {
      setVisibleInsights((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [visibleInsights, isAnalyzing, selectedDoc]);

  const handleReset = useCallback(() => {
    setSelectedDoc(null);
    setIsAnalyzing(false);
    setVisibleInsights(0);
  }, []);

  const typeColorMap = {
    risk: "text-[#FF5F56]",
    term: "text-[#FFBD2E]",
    compliance: "text-[#6EE7B7]",
  };

  const typeBgMap = {
    risk: "bg-[#FF5F56]/10",
    term: "bg-[#FFBD2E]/10",
    compliance: "bg-[#6EE7B7]/10",
  };

  return (
    <div className="rounded-xl border border-[#1E293B] bg-[#0F172A] overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-2 text-xs text-white/50">
          nexus-ai — Document Analysis
        </span>
      </div>

      <div className="p-5 font-mono text-sm min-h-[280px]">
        {!selectedDoc ? (
          <div className="space-y-3">
            <p className="text-white/50 text-xs mb-4">
              Select a document to analyze:
            </p>
            {sampleDocuments.map((doc, i) => (
              <motion.button
                key={doc.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleDocSelect(doc.name)}
                className="flex items-center gap-3 w-full text-left px-3 py-3 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-150"
              >
                <Upload size={16} className="text-white/30 shrink-0" />
                <FileText size={16} className="text-[#6EE7B7]/60 shrink-0" />
                <span className="text-[#F1F5F9]/80">{doc.name}</span>
                <span className="text-white/25 text-xs ml-auto">{doc.size}</span>
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-white/40 text-xs mb-2">
              <span className="text-[#6EE7B7]">agent@nexus</span>:~$ analyze
              --file {selectedDoc}
            </div>

            {isAnalyzing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-[#FFBD2E] px-3 py-2"
              >
                <Loader2 size={16} className="animate-spin" />
                <span>Analyzing document...</span>
              </motion.div>
            )}

            {!isAnalyzing && visibleInsights > 0 && (
              <div className="space-y-2">
                {analysisInsights[selectedDoc]
                  ?.slice(0, visibleInsights)
                  .map((insight, i) => {
                    const InsightIcon = insight.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`rounded-md px-3 py-2.5 ${typeBgMap[insight.type]}`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <InsightIcon
                            size={14}
                            className={typeColorMap[insight.type]}
                          />
                          <span
                            className={`text-xs font-semibold uppercase tracking-wider ${typeColorMap[insight.type]}`}
                          >
                            {insight.label}
                          </span>
                        </div>
                        <p className="text-[#F1F5F9]/80 text-sm leading-relaxed">
                          {insight.text}
                        </p>
                      </motion.div>
                    );
                  })}

                {visibleInsights <
                  (analysisInsights[selectedDoc]?.length ?? 0) && (
                  <div className="flex items-center gap-2 text-white/30 px-3 py-1">
                    <Loader2 size={12} className="animate-spin" />
                    <span className="text-xs">Extracting more insights...</span>
                  </div>
                )}

                {visibleInsights >=
                  (analysisInsights[selectedDoc]?.length ?? 0) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-xs text-[#6EE7B7] px-3"
                  >
                    ✓ Analysis complete —{" "}
                    {analysisInsights[selectedDoc]?.length} insights extracted
                  </motion.div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <span className="text-white/30 text-xs font-mono">
          {!selectedDoc
            ? "Select a document"
            : isAnalyzing
            ? "Analyzing..."
            : "Analysis complete"}
        </span>
        {selectedDoc && (
          <button
            onClick={handleReset}
            className="ml-auto flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm px-4 py-2 rounded-md transition-colors"
          >
            Analyze Another
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Demo 4: Product Builder ────────────────────────────── */

const buildSteps = [
  { label: "Setting up auth...", complete: "Auth configured (OAuth + JWT)" },
  { label: "Connecting payments...", complete: "Stripe integration live" },
  { label: "Training AI model...", complete: "Model fine-tuned (97.3% accuracy)" },
  { label: "Deploying to production...", complete: "Deployed to edge network" },
];

function ProductBuilderDemo() {
  const [isBuilding, setIsBuilding] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isDone, setIsDone] = useState(false);

  const startBuild = useCallback(() => {
    setIsBuilding(true);
    setCurrentStep(0);
    setCompletedSteps([]);
    setIsDone(false);
  }, []);

  useEffect(() => {
    if (!isBuilding || currentStep < 0) return;

    if (currentStep >= buildSteps.length) {
      setTimeout(() => {
        setIsDone(true);
        setIsBuilding(false);
      }, 400);
      return;
    }

    const durations = [1400, 1100, 1800, 1200];
    const timer = setTimeout(() => {
      setCompletedSteps((prev) => [...prev, currentStep]);
      setCurrentStep((prev) => prev + 1);
    }, durations[currentStep]);

    return () => clearTimeout(timer);
  }, [isBuilding, currentStep]);

  const handleReset = useCallback(() => {
    setIsBuilding(false);
    setCurrentStep(-1);
    setCompletedSteps([]);
    setIsDone(false);
  }, []);

  return (
    <div className="rounded-xl border border-[#1E293B] bg-[#0F172A] overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-2 text-xs text-white/50">
          nexus-ai — Product Builder
        </span>
      </div>

      <div className="p-5 font-mono text-sm min-h-[280px]">
        {currentStep < 0 && !isDone ? (
          <div className="flex flex-col items-center justify-center h-[240px] gap-4">
            <Terminal size={40} className="text-white/20" />
            <p className="text-white/40 text-center text-sm">
              Watch AI build a full-stack product<br />
              from auth to deployment in seconds
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="text-white/40 text-xs mb-3">
              <span className="text-[#6EE7B7]">builder@nexus</span>:~$ npx
              create-ai-app --full-stack
            </div>

            {buildSteps.map((step, i) => {
              const isActive = currentStep === i && !completedSteps.includes(i);
              const isComplete = completedSteps.includes(i);

              if (!isActive && !isComplete && currentStep <= i) {
                return null;
              }

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 py-2"
                >
                  {isActive && (
                    <div className="flex items-center gap-2 text-[#FFBD2E]">
                      <Loader2 size={14} className="animate-spin" />
                      <span>{step.label}</span>
                    </div>
                  )}
                  {isComplete && (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#6EE7B7]" />
                      <span className="text-[#F1F5F9]/60 line-through decoration-white/20">
                        {step.label.replace("...", "")}
                      </span>
                      <span className="text-[#6EE7B7] text-xs ml-1">
                        {step.complete}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}

            {isDone && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-4 space-y-3"
              >
                <div className="rounded-md bg-[#6EE7B7]/10 border border-[#6EE7B7]/20 px-4 py-3">
                  <p className="text-[#6EE7B7] font-semibold">
                    ✓ Live at app.example.com
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    Full-stack AI product deployed in 5.5s
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white/5 rounded-md px-2 py-2">
                    <p className="text-[#6EE7B7] text-lg font-bold">99.9%</p>
                    <p className="text-white/30 text-xs">Uptime SLA</p>
                  </div>
                  <div className="bg-white/5 rounded-md px-2 py-2">
                    <p className="text-[#FFBD2E] text-lg font-bold">42ms</p>
                    <p className="text-white/30 text-xs">Avg latency</p>
                  </div>
                  <div className="bg-white/5 rounded-md px-2 py-2">
                    <p className="text-[#F1F5F9] text-lg font-bold">Auto</p>
                    <p className="text-white/30 text-xs">Scaling</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <span className="text-white/30 text-xs font-mono">
          {isDone
            ? "Build complete"
            : isBuilding
            ? "Building..."
            : "Ready to build"}
        </span>
        <button
          onClick={isDone ? handleReset : startBuild}
          disabled={isBuilding}
          className="ml-auto flex items-center gap-2 bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white/80 text-sm px-4 py-2 rounded-md transition-colors"
        >
          {isDone ? (
            "Build Again"
          ) : (
            <>
              <Rocket size={14} />
              Build
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ── Demo tabs configuration ────────────────────────────── */

const demoTabs = [
  {
    label: "Knowledge Assistant",
    icon: MessageSquareText,
    component: KnowledgeAssistantDemo,
  },
  {
    label: "Workflow Automation",
    icon: Workflow,
    component: WorkflowAutomationDemo,
  },
  {
    label: "Document Analysis",
    icon: BrainCircuit,
    component: DocumentAnalysisDemo,
  },
  {
    label: "Product Builder",
    icon: Rocket,
    component: ProductBuilderDemo,
  },
];

/* ── Main Services component ────────────────────────────── */

export default function Services() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [demoKey, setDemoKey] = useState(0);

  const handleDemoSwitch = (index: number) => {
    if (index !== activeDemo) {
      setActiveDemo(index);
      setDemoKey((prev) => prev + 1); // force remount to reset state
    }
  };

  const ActiveDemoComponent = demoTabs[activeDemo].component;

  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            What We Build
          </h2>
          <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">
            Real problems. Real solutions. Every project starts with your
            business challenge &mdash; not our tech stack.
          </p>
        </AnimatedSection>

        {/* Service cards — case-study style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((service: Service, i: number) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.title} delay={0.1 * (i + 1)}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card p-8 h-full group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-surface-alt rounded-xl p-3 shrink-0">
                      {Icon && (
                        <Icon
                          size={28}
                          className="text-foreground transition-colors duration-300 group-hover:text-muted"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted text-sm mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Problem → Solution → Result */}
                  <div className="space-y-3 mt-6">
                    <div className="flex gap-3">
                      <span className="text-muted text-xs font-semibold uppercase tracking-wider mt-0.5 shrink-0 w-16">
                        Problem
                      </span>
                      <p className="text-sm text-muted leading-relaxed">
                        {service.problem}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-foreground text-xs font-semibold uppercase tracking-wider mt-0.5 shrink-0 w-16">
                        Solution
                      </span>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {service.solution}
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-accent text-xs font-semibold uppercase tracking-wider mt-0.5 shrink-0 w-16">
                        Result
                      </span>
                      <p className="text-sm font-medium text-foreground leading-relaxed">
                        {service.result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Interactive Demo Section */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              See It in Action
            </h3>
            <p className="text-muted mt-3">
              Try interactive demos of our AI systems — click to explore.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            {/* Demo tabs */}
            <div className="flex gap-2 mb-4 flex-wrap justify-center">
              {demoTabs.map((tab, i) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.label}
                    onClick={() => handleDemoSwitch(i)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeDemo === i
                        ? "bg-foreground text-background"
                        : "bg-surface-alt text-muted hover:text-foreground"
                    }`}
                  >
                    <TabIcon size={14} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active demo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo + "-" + demoKey}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <ActiveDemoComponent />
              </motion.div>
            </AnimatePresence>

            {/* CTA below demo */}
            <div className="text-center mt-8">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-base"
              >
                Build Something Like This
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
