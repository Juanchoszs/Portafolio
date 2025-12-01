"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface CodeChar {
  id: number
  char: string
  x: number
  delay: number
}

export function CodeRain() {
  const [columns, setColumns] = useState<CodeChar[][]>([])

  useEffect(() => {
    const chars = "01{}<>/"
    const numColumns = 8
    const charsPerColumn = 6

    const newColumns: CodeChar[][] = []

    for (let i = 0; i < numColumns; i++) {
      const column: CodeChar[] = []
      for (let j = 0; j < charsPerColumn; j++) {
        column.push({
          id: i * charsPerColumn + j,
          char: chars[Math.floor(Math.random() * chars.length)],
          x: (i / numColumns) * 100,
          delay: Math.random() * 8,
        })
      }
      newColumns.push(column)
    }

    setColumns(newColumns)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      {columns.map((column, colIndex) => (
        <div
          key={colIndex}
          className="absolute top-0 h-full"
          style={{ left: `${column[0]?.x}%` }}
        >
          {column.map((item, charIndex) => (
            <motion.div
              key={item.id}
              className="text-blue-400 font-mono text-xs absolute"
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: ["0%", "800%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                delay: item.delay + charIndex * 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {item.char}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  )
}
