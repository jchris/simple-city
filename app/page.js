'use client'
import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import EmojiBar from '../components/EmojiBar'
import Board from '../components/Board'
import {tiles, transportation} from './emojis'

const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

// const randomEmoji = () => {
//   const emojis = ['🌳', '🌳', '🌳', '🪨', '🏜️', '']
//   return emojis[Math.floor(Math.random() * emojis.length)]
// }

const App = () => {
  const [cells, setCells] = useState(Array.from({ length: 32 }, () => Array.from({ length: 32 }, () => '')))

  const handleDrop = (item, x, y) => {
    console.log(item, x, y)
    const newCells = [...cells]
    newCells[x][y] = item.emoji
    setCells(newCells)
  }

  const emojisPrices = new Map();
  tiles.forEach(tile => {
    if (emojisPrices.has(tile.price)) {
      emojisPrices.get(tile.price).push(tile)
    } else {
      emojisPrices.set(tile.price, [tile])
    }
  })

  // const emojisPrices = {
  //   20: ['🌳', '🏠', '🏢'],
  //   40: ['🏥', '🚗', '🚦'],
  //   100: ['🛤️']
  // }
  console.log('cells', cells)
  return (
    <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
      <EmojiBar emojisPrices={emojisPrices} />
      <Board cells={cells} onDrop={handleDrop} />
    </DndProvider>
  )
}

export default App
