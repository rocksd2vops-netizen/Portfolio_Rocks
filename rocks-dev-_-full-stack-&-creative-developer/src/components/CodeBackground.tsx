import React, { useEffect, useRef, useState } from 'react';
import { getAssetUrl } from '../utils/assets.ts';

interface CodeSnippet {
  language: string;
  lines: string[];
}

const SNIPPETS: CodeSnippet[] = [
  {
    language: 'TypeScript / React',
    lines: [
      '// ROCKS DEV - High-Performance Reactive Pipeline',
      'interface EngineConfig {',
      '  developer: "ROCKS DEV";',
      '  stack: ["React", "TypeScript", "Node.js", "Python"];',
      '  status: "active" | "compiling" | "deployed";',
      '}',
      'export function useDigitalExperience(config: EngineConfig) {',
      '  const [state, setState] = useState({ latency: "1.2ms", frame: 60 });',
      '  useEffect(() => {',
      '    const socket = connectSocket("wss://engine.rocksdev.internal");',
      '    return () => socket.disconnect();',
      '  }, []);',
      '  return <Canvas renderPipeline={config.stack} />;',
      '}',
    ],
  },
  {
    language: 'Python',
    lines: [
      '# Intelligent Workflow Orchestration & Prompt Routing',
      'import asyncio',
      'from google.genai import types',
      '',
      'async def execute_prompt_workflow(payload: dict) -> dict:',
      '    client = genai.Client()',
      '    response = await client.aio.models.generate_content(',
      '        model="gemini-2.5-flash",',
      '        contents=payload["prompt"],',
      '        config=types.GenerateContentConfig(temperature=0.3)',
      '    )',
      '    return {"status": "ok", "insights": response.text}',
    ],
  },
  {
    language: 'PHP / SQL',
    lines: [
      '<?php',
      'namespace RocksDev\\Database;',
      '',
      'class SchemaOptimizer {',
      '    private \\PDO $pdo;',
      '    public function fetchActiveProjects(int $limit = 10): array {',
      '        $sql = "SELECT id, title, stack, updated_at',
      '                FROM projects WHERE status = :status',
      '                ORDER BY updated_at DESC LIMIT :lim";',
      '        $stmt = $this->pdo->prepare($sql);',
      '        $stmt->execute(["status" => "production", "lim" => $limit]);',
      '        return $stmt->fetchAll(\\PDO::FETCH_ASSOC);',
      '    }',
      '}',
    ],
  },
  {
    language: 'Terminal / Shell',
    lines: [
      '$ git clone https://github.com/rocksd2vops-netizen/portfolio.git',
      '[rocks-dev] Installing optimized production dependencies...',
      '✓ Vite bundle compiled in 184ms',
      '✓ Tailwind CSS v4 JIT compiler initialized',
      '✓ Running real-time telemetry stream at port 3000',
      '➜ Network: https://rocksdev.engineer [ready]',
      '$ docker compose up -d postgres-cluster redis-cache',
      '[rocks-dev] Serverless functions listening for webhooks...',
    ],
  },
];

export const CodeBackground: React.FC = () => {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Secondary stream on the right side for background depth
  const [rightSnippetIndex, setRightSnippetIndex] = useState(1);
  const [rightDisplayedLines, setRightDisplayedLines] = useState<string[]>([]);
  const [rightLineIndex, setRightLineIndex] = useState(0);
  const [rightCharIndex, setRightCharIndex] = useState(0);

  // Left Code Stream Typing Logic
  useEffect(() => {
    if (isPaused) return;

    const currentSnippet = SNIPPETS[activeSnippetIndex];
    const targetLines = currentSnippet.lines;

    const typingSpeed = isDeleting ? 12 : 28;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentLineIndex < targetLines.length) {
          const currentTargetLine = targetLines[currentLineIndex];
          if (currentCharIndex < currentTargetLine.length) {
            // Typing characters
            setDisplayedLines((prev) => {
              const updated = [...prev];
              if (updated[currentLineIndex] === undefined) {
                updated[currentLineIndex] = currentTargetLine[currentCharIndex];
              } else {
                updated[currentLineIndex] =
                  currentTargetLine.slice(0, currentCharIndex + 1);
              }
              return updated;
            });
            setCurrentCharIndex((c) => c + 1);
          } else {
            // Move to next line
            setCurrentLineIndex((l) => l + 1);
            setCurrentCharIndex(0);
          }
        } else {
          // Finished snippet, pause before backspacing / erasing
          const waitTimeout = setTimeout(() => {
            setIsDeleting(true);
          }, 3200);
          return () => clearTimeout(waitTimeout);
        }
      } else {
        // Erasing phase (character by character or line by line for natural code rhythm)
        if (displayedLines.length > 0) {
          const lastIdx = displayedLines.length - 1;
          const lastLine = displayedLines[lastIdx];
          if (lastLine && lastLine.length > 0) {
            setDisplayedLines((prev) => {
              const updated = [...prev];
              updated[lastIdx] = lastLine.slice(0, -2);
              return updated;
            });
          } else {
            setDisplayedLines((prev) => prev.slice(0, -1));
          }
        } else {
          // Reset for next snippet
          setIsDeleting(false);
          setCurrentLineIndex(0);
          setCurrentCharIndex(0);
          setActiveSnippetIndex((prev) => (prev + 1) % SNIPPETS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    activeSnippetIndex,
    currentLineIndex,
    currentCharIndex,
    isDeleting,
    displayedLines,
    isPaused,
  ]);

  // Right Stream Typing Logic
  useEffect(() => {
    if (isPaused) return;

    const targetLines = SNIPPETS[rightSnippetIndex].lines;

    const timeout = setTimeout(() => {
      if (rightLineIndex < targetLines.length) {
        const line = targetLines[rightLineIndex];
        if (rightCharIndex < line.length) {
          setRightDisplayedLines((prev) => {
            const updated = [...prev];
            updated[rightLineIndex] = line.slice(0, rightCharIndex + 1);
            return updated;
          });
          setRightCharIndex((c) => c + 1);
        } else {
          setRightLineIndex((l) => l + 1);
          setRightCharIndex(0);
        }
      } else {
        const resetTimer = setTimeout(() => {
          setRightDisplayedLines([]);
          setRightLineIndex(0);
          setRightCharIndex(0);
          setRightSnippetIndex((prev) => (prev + 1) % SNIPPETS.length);
        }, 4000);
        return () => clearTimeout(resetTimer);
      }
    }, 38);

    return () => clearTimeout(timeout);
  }, [rightSnippetIndex, rightLineIndex, rightCharIndex, isPaused]);

  // Syntax colorizer helper for code lines
  const colorizeLine = (line: string) => {
    if (!line) return null;

    if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
      return <span className="text-[#9696A5]/60 italic">{line}</span>;
    }
    if (line.trim().startsWith('$') || line.trim().startsWith('✓') || line.trim().startsWith('➜')) {
      return (
        <span className="text-emerald-400/80 font-semibold">
          {line.slice(0, 2)}
          <span className="text-[#F5F5F7]/80">{line.slice(2)}</span>
        </span>
      );
    }

    // Split words and colorize keywords
    const tokens = line.split(/(\s+|[{}()[\];,."'])/);
    return (
      <>
        {tokens.map((token, i) => {
          if (
            ['const', 'let', 'function', 'return', 'import', 'from', 'export', 'def', 'async', 'await', 'class', 'public', 'private', 'SELECT', 'FROM', 'WHERE', 'ORDER', 'BY', 'LIMIT'].includes(
              token
            )
          ) {
            return (
              <span key={i} className="text-[#8B5CF6] font-medium">
                {token}
              </span>
            );
          }
          if (['interface', 'types', 'EngineConfig', 'Tensor', 'PDO', 'Canvas'].includes(token)) {
            return (
              <span key={i} className="text-cyan-400/90">
                {token}
              </span>
            );
          }
          if (['useState', 'useEffect', 'connectSocket', 'generate_content', 'fetchAll', 'prepare'].includes(token)) {
            return (
              <span key={i} className="text-amber-300/90">
                {token}
              </span>
            );
          }
          if (token.startsWith('"') || token.startsWith("'")) {
            return (
              <span key={i} className="text-emerald-300/80">
                {token}
              </span>
            );
          }
          return <span key={i} className="text-[#F5F5F7]/75">{token}</span>;
        })}
      </>
    );
  };

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Deep atmospheric gradient backdrop */}
      <div className="absolute inset-0 bg-[#08080D]" />

      {/* Subtle purple radial illumination spots */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-[#A855F7]/8 rounded-full blur-[130px]" />
      <div className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] bg-[#8B5CF6]/8 rounded-full blur-[160px]" />

      {/* Local SVG Grid Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: `url(${getAssetUrl('images/backgrounds/matrix-grid.svg')})`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Left Code Column Stream (Atmospheric & secondary) */}
      <div className="absolute top-20 left-4 md:left-12 max-w-[420px] lg:max-w-[480px] opacity-20 filter blur-[0.6px] transition-opacity duration-700">
        <div className="font-mono text-[11px] md:text-xs leading-relaxed space-y-1">
          <div className="text-[10px] tracking-widest text-[#8B5CF6]/60 mb-2 font-mono">
            // {SNIPPETS[activeSnippetIndex].language}
          </div>
          {displayedLines.map((line, idx) => (
            <div key={idx} className="flex gap-3">
              <span className="text-[#9696A5]/30 select-none text-[10px] w-5 text-right font-mono">
                {idx + 1}
              </span>
              <div className="whitespace-pre overflow-hidden">
                {colorizeLine(line)}
                {idx === displayedLines.length - 1 && (
                  <span className="inline-block w-1.5 h-3 bg-[#A855F7] ml-0.5 animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Code Column Stream (Subtle Terminal & Backend Logic) */}
      <div className="hidden lg:block absolute top-36 right-8 max-w-[440px] opacity-15 filter blur-[0.7px]">
        <div className="font-mono text-xs leading-relaxed space-y-1">
          <div className="text-[10px] tracking-widest text-emerald-400/50 mb-2 font-mono">
            // {SNIPPETS[rightSnippetIndex].language}
          </div>
          {rightDisplayedLines.map((line, idx) => (
            <div key={idx} className="flex gap-3">
              <span className="text-[#9696A5]/30 select-none text-[10px] w-5 text-right font-mono">
                {idx + 1}
              </span>
              <div className="whitespace-pre overflow-hidden">
                {colorizeLine(line)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle vignette radial mask to guarantee that foreground text & elements are 100% legible */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#08080D]/50 to-[#08080D]/90" />
    </div>
  );
};
