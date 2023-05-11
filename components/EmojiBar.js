import React from 'react'
import { useDrag } from 'react-dnd'
import styled from '@emotion/styled'

const EmojiBarContainer = styled.div`
  display: flex;
  background-color: #dcd;
  padding: 1rem;
  font-size: 2rem;
  justify-content: space-around;
`

const EmojiSet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const Emoji = ({ emoji }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'emoji',
    item: { emoji },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {emoji}
    </div>
  )
}

const EmojiBar = ({ emojisPrices }) => {
  return (
    <EmojiBarContainer>
      {[...emojisPrices.entries()].map(([price, emojis]) => (
        <EmojiSet key={price}>
          <div>{price}</div>
          {emojis.map((emoji, i) => (
            <Emoji key={i} emoji={emoji.emoji} />
          ))}
        </EmojiSet>
      ))}
    </EmojiBarContainer>
  )
}

export default EmojiBar
