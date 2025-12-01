"use client"

import { motion } from "framer-motion"
import { Terminal } from "lucide-react"
import { useEffect, useState } from "react"

const commands = [
  "$ git commit -m 'Build amazing features'",
  "$ npm run innovation",
  "$ docker-compose up success",
  "$ kubectl apply -f awesome.yaml",
  "$ git push origin main",
]

export function TerminalWindow() {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const command = commands[currentCommand]
    let currentIndex = 0

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex <= command.length) {
          setDisplayText(command.substring(0, currentIndex))
          currentIndex++
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
            setCurrentCommand((prev) => (prev + 1) % commands.length)
          }, 2000)
        }
      }, 80)

      return () => clearInterval(typingInterval)
    }
  }, [currentCommand, isTyping])

  return (
    <motion.div
      className="w-full max-w-lg bg-slate-950 border border-slate-700 rounded-lg shadow-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-3 flex items-center gap-2 text-slate-400">
          <Terminal className="w-3 h-3" />
          <span className="text-xs font-mono">bash</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm text-green-400 h-32">
        <div className="space-y-2">
          <div className="text-blue-400">juan@developer:~$</div>
          <div className="flex items-center">
            <span>{displayText}</span>
            <motion.span
              className="inline-block w-2 h-4 ml-1 bg-green-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>
          {!isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-500"
            >
              ✓ Success
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
