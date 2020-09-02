import React, { Component } from 'react';
import './Path.scss';

class Path extends Component {
  state = {
    grid: [],
    type: 'node',
    startNode: [7, 6],
    endNode: [7, 28],
    selectedButton: null
  }

  componentDidMount() {
    this.setGrid();
  }

  render() {
    const { grid } = this.state;
    return (
      <div className="app-container">
        <h2>Path Finding</h2>
        <div className="grid">
          {grid.map((row, rowInd) => (
            <div className="grid-row" key={rowInd}>
              {row.map((cell, colInd) => (
                <div
                  className={`grid-cell ${cell}`}
                  key={colInd}
                  id={`${rowInd}-${colInd}`}
                  onClick={() => this.setNodeType(this.state.type, rowInd, colInd)}
                  >
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={() => this.runAlg()}>Run Algorithm</button>
          <button className={this.state.selectedButton === 'start' ? 'selected' : ''} onClick={() => this.onClick('start')}>Start Node</button>
          <button className={this.state.selectedButton === 'end' ? 'selected' : ''} onClick={() => this.onClick('end')}>End Node</button>
          <button className={this.state.selectedButton === 'wall' ? 'selected' : ''} onClick={() => this.onClick('wall')}>Wall Node</button>
          <button className={this.state.selectedButton === 'node' ? 'selected' : ''} onClick={() => this.onClick('node')}>Reset Node</button>
        </div>
      </div>
    );
  }

  onClick(type) {
    this.setState({
      type: type,
      selectedButton: type
    })
  }

  runAlg() {
    this.setState({
      selectedButton: null
    })
  }

  setGrid() {
    const grid = [];
    for (let i = 0; i < 15; i++) {
      let row = [];
      for (let j=0; j< 35; j++) {
        if (i === this.state.startNode[0] && j === this.state.startNode[1]) {
          row.push('start');
        }
        else if (i === this.state.endNode[0] && j === this.state.endNode[1]) {
          row.push('end');
        }
        else {
          row.push('node');
        }
      }
      grid.push(row);
    }
    this.setState({
      grid
    });
  }

  setNodeType(type, row, col) {
    let grid = this.state.grid.slice();
    let startNode = this.state.startNode;
    let endNode = this.state.endNode;

    switch(type) {
      case 'start':
        grid[startNode[0]][startNode[1]] = 0;
        startNode = [row, col];
        grid[row][col] = type;
        break;
      case 'end':
        grid[endNode[0]][endNode[1]] = 0;
        endNode = [row, col];
        grid[row][col] = type;
        break;
      case 'wall':
        if (!(grid[row][col] === 'start' || grid[row][col] === 'end')) {
          grid[row][col] = type;
        }
        break;
      case 'node':
        if (!(grid[row][col] === 'start' || grid[row][col] === 'end')) {
          grid[row][col] = type;
        }
        break;
      default:
        break;
    }
    this.setState({
      grid,
      startNode,
      endNode
    });
  }
}
 
export default Path;