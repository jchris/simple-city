import React from 'react';
import { useDrop } from 'react-dnd';
import styled from '@emotion/styled';
import EmojiCell from './Cell';

const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(32, 1fr);
  grid-template-columns: repeat(32, 1fr);
  width: 80%; // ensure board takes full width of its container
  height: 80vh; // keep the aspect ratio
  margin: 0 auto;
  padding: 3rem;
  background-color: #dfd;
`;

const Board = ({ cells, onDrop }) => {
  console.log('cells', cells);  
  return (
    <StyledBoard>
      {cells.map((row, i) => (
          row.map((cell, j) => (
            <EmojiCell
              key={j}
              x={j}
              y={i}
              emoji={cell}
              onDrop={onDrop}
            />
          ))
      ))}
    </StyledBoard>
  );
};

export default Board;
