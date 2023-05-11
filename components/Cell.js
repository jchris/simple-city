import React from 'react';
import styled from '@emotion/styled';
import { useDrag, useDrop } from 'react-dnd';

const Cell = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmojiContainer = styled.span`
  position: absolute;
  font-size: 2rem;
`;

const EmojiCell = ({ x, y, emoji, onDrop }) => {
  // const [{ isDragging }, dragRef] = useDrag({
  //   type: 'emoji',
  //   item: { x, y },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });

  const [, dropRef] = useDrop({
    accept: 'emoji',
    drop: (item) => onDrop(item, y, x),
  });

  return (
    <Cell
      ref={(node) => {
        // dragRef(node);
        dropRef(node);
      }}
      // style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <EmojiContainer>{emoji}</EmojiContainer>
    </Cell>
  );
};

export default EmojiCell;
