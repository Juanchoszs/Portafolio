"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface CodeLine {
  text: string
  indent: number
  color: string
}

export function FloatingCodeWindow() {
  const [currentLine, setCurrentLine] = useState(0)

  const codeLines: CodeLine[] = [
    { text: "function buildAmazingThings() {", indent: 0, color: "text-pink-400" },
    { text: "const passion = true;", indent: 1, color: "text-blue-300" },
    { text: "const skills = ['React', 'TypeScript', 'Node.js'];", indent: 1, color: "text-blue-300" },
    { text: "", indent: 0, color: "" },
    { text: "return skills.map(skill => {", indent: 1, color: "text-purple-400" },
    { text: "return createInnovation(skill);", indent: 2, color: "text-green-400" },
    { text: "});", indent: 1, color: "text-purple-400" },
    { text: "}", indent: 0, color: "text-pink-400" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="relative w-full max-w-md bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-3 text-xs text-slate-400 font-mono">innovation.ts</span>
      </div>

      {/* Code Content */}
      <div className="p-4 font-mono text-sm space-y-1 h-48 overflow-hidden">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            className={`${line.color} transition-opacity duration-300`}
            style={{ paddingLeft: `${line.indent * 1.5}rem` }}
            animate={{
              opacity: index <= currentLine ? 1 : 0.3,
            }}
          >
            {line.text || <span className="invisible">.</span>}
          </motion.div>
        ))}
      </div>

      {/* Cursor Blink */}
      <motion.div
        className="absolute bottom-4 w-2 h-4 bg-blue-400"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{
          left: `${4 + codeLines[currentLine]?.indent * 1.5}rem`,
          bottom: `${4 + (codeLines.length - currentLine - 1) * 1.5}rem`,
        }}
      />
    </motion.div>
  )
}
