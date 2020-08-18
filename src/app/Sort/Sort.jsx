import React, { Component } from 'react';
import './Sort.scss';
import { quickSortAlg, bubbleSortAlg, insertionSortAlg, mergeSortAlg } from './SortFunctions';

class Sort extends Component {
  state = {
    array: [],
    speed: 41,
    speedText: 1,
    sortType: "Choose a Sorting Algorithm",
    button: false
  }
  
  componentDidMount() {
    this.setArray();
  }
  
  render() { 
    const { array } = this.state;
    return (
      <div className="app-container">
        <h2>{ this.state.sortType }</h2>
        <div className="array">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                height: `${value}px`,
              }}></div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={() => this.setArray()} disabled={this.state.button}>Generate New Array</button>
          <button onClick={() => this.mergeSort()} disabled={this.state.button}>Merge Sort</button>
          <button onClick={() => this.quickSort()} disabled={this.state.button}>Quick Sort</button>
          <button onClick={() => this.bubbleSort()} disabled={this.state.button}>Bubble Sort</button>
          <button onClick={() => this.insertionSort()} disabled={this.state.button}>Insertion Sort</button>
          <div className="speed">
            <button className="down" onClick={() => this.setSpeed(10, -1)}>-</button>
            <div className="text">x{ this.state.speedText }</div>
            <button className="up"onClick={() => this.setSpeed(-10, 1)}>+</button>
          </div>
        </div>
      </div>
    );
  }

  setArray() {
    const array = [];
    for (let i = 0; i < 120; i++) {
      array.push(randInterval(5, 500));
      if(this.state.array.length > 0) {
        const arrayBars = document.getElementsByClassName('array-bar');
        arrayBars[i].style.backgroundColor = 'rgb(196, 135, 231)';
      }
    }
    this.setState({
      array,
      sortType: 'Choose a Sorting Algorithm'
    });
  }

  setSpeed(num, inc) {
    if(this.state.speed+num < 0 || this.state.speed+num> 50) {
      num = 0;
      inc = 0;
    }
    this.setState({
      speed: this.state.speed += num,
      speedText: this.state.speedText += inc
    })
  }

  mergeSort() {
    this.setState({
      sortType: 'Merge Sort',
      button: true
    });
    for (let i = 0; i < this.state.array.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      arrayBars[i].style.backgroundColor = 'rgb(196, 135, 231)';
      arrayBars[i].style.height = `${this.state.array[i]}px`;
    }
    const animations = mergeSortAlg(this.state.array);
    for (let i=0; i<animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const j = animations[i][0];
      setTimeout(() => {
        if(i>0 && animations[i-1][2]) {
          arrayBars[animations[i-1][2]].style.backgroundColor = 'rgb(196, 135, 231)';
          arrayBars[animations[i-1][3]].style.backgroundColor = 'rgb(196, 135, 231)';
        }
        if(animations[i][2]) {
          arrayBars[animations[i][2]].style.backgroundColor = 'red';
          arrayBars[animations[i][3]].style.backgroundColor = 'red';
        }
        arrayBars[j].style.height = `${animations[i][1]}px`;
        if(i+1 === animations.length) {
          for (let i=0; i<this.state.array.length; i++) {
            setTimeout(() => {
              arrayBars[i].style.backgroundColor = 'green';
              if (i+1 === this.state.array.length) this.setState({ button: false });
            }, i*this.state.speed);
          }
        }
      }, i*this.state.speed);
    }

  }

  quickSort() {
    this.setState({
      sortType: 'Quick Sort',
      button: true
    });
    for (let i = 0; i < this.state.array.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      arrayBars[i].style.backgroundColor = 'rgb(196, 135, 231)';
      arrayBars[i].style.height = `${this.state.array[i]}px`;
    }
    const animations = quickSortAlg(this.state.array);
    for (let i=0; i<animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const high = animations[i][0];
      const j = animations[i][1];
      const k = animations[i][2];
      console.log(animations[i]);
      setTimeout(() => {
        if (high === -1) {
          if(animations[i-1][0] !== -1) {
            arrayBars[animations[i-1][0]].style.backgroundColor = 'rgb(196, 135, 231)';
            arrayBars[animations[i-1][1]].style.backgroundColor = 'rgb(196, 135, 231)';
            arrayBars[animations[i-1][2]].style.backgroundColor = 'rgb(196, 135, 231)';
          }
          else arrayBars[animations[i-1][1]].style.backgroundColor = 'rgb(196, 135, 231)';
          arrayBars[j].style.backgroundColor = 'blue';
          arrayBars[j].style.height = `${animations[i][3]}px`;
          arrayBars[k].style.height = `${animations[i][4]}px`;
        }
        else {
          if (i>0) {
            if(animations[i-1][0] === -1) arrayBars[animations[i-1][1]].style.backgroundColor = 'rgb(196, 135, 231)';
            else {
              arrayBars[animations[i-1][1]].style.backgroundColor = 'rgb(196, 135, 231)';
              arrayBars[animations[i-1][2]].style.backgroundColor = 'rgb(196, 135, 231)';
            }
          }
          arrayBars[high].style.backgroundColor = 'green';
          arrayBars[j].style.backgroundColor = 'red';
          arrayBars[j].style.height = `${animations[i][3]}px`;
          arrayBars[k].style.backgroundColor = 'red';
          arrayBars[k].style.height = `${animations[i][4]}px`;
        }
        if(i+1 === animations.length) {
          for (let j=0; j<this.state.array.length; j++) {
            setTimeout(() => {
              if(j === 0) arrayBars[animations[i][1]].style.backgroundColor = 'rgb(196, 135, 231)';
              if (j+1 === this.state.array.length) this.setState({ button: false });
              arrayBars[j].style.backgroundColor = 'green';
            }, j*this.state.speed);
          }
        }
      }, i*this.state.speed);
    }
  }

  bubbleSort() {
    this.setState({
      sortType: 'Bubble Sort',
      button: true
    });
    for (let i = 0; i < this.state.array.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      arrayBars[i].style.backgroundColor = 'rgb(196, 135, 231)';
      arrayBars[i].style.height = `${this.state.array[i]}px`;
    }
    const animations = bubbleSortAlg(this.state.array);
    for (let i=0; i<animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const j = animations[i][0];
      const k = animations[i][1];
      setTimeout(() => {
        if(j>0) arrayBars[j-1].style.backgroundColor = 'rgb(196, 135, 231)';
        if (animations[i][2] === -1) {
          arrayBars[j].style.backgroundColor = 'rgb(196, 135, 231)';
          arrayBars[k].style.backgroundColor = 'rgb(196, 135, 231)';
          if(animations[i][3]) {
            arrayBars[j].style.height = `${animations[i][3]}px`;
            arrayBars[k].style.height = `${animations[i][4]}px`;
          }
        }
        else {
          arrayBars[j].style.backgroundColor = 'red';
          arrayBars[k].style.backgroundColor = 'red';
          if(animations[i][3]) {
            arrayBars[j].style.height = `${animations[i][3]}px`;
            arrayBars[k].style.height = `${animations[i][4]}px`;
          }
        }
        if(i+1 === animations.length) {
          for (let i=0; i<this.state.array.length; i++) {
            setTimeout(() => {
              if (i+1 === this.state.array.length) this.setState({ button: false });
              arrayBars[i].style.backgroundColor = 'green';
            }, i*this.state.speed);
          }
        }
      }, i*this.state.speed);
    }
  }

  insertionSort() {
    this.setState({
      sortType: 'Insertion Sort',
      button: true
    });
    for (let i = 0; i < this.state.array.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      arrayBars[i].style.backgroundColor = 'rgb(196, 135, 231)';
      arrayBars[i].style.height = `${this.state.array[i]}px`;
    }
    const animations = insertionSortAlg(this.state.array);
    for (let i=0; i<animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const key = animations[i][0];
      const comp = animations[i][1];
      setTimeout(() => {
        if(i>0) arrayBars[animations[i-1][1]].style.backgroundColor = 'rgb(196, 135, 231)';
        arrayBars[key].style.backgroundColor = 'green';
        arrayBars[comp].style.backgroundColor = 'red';
        arrayBars[comp+1].style.height = `${animations[i][2]}px`;
        arrayBars[comp].style.height = `${animations[i][3]}px`;
        if(i+1 === animations.length) {
          for (let i=0; i<this.state.array.length; i++) {
            setTimeout(() => {
              if (i+1 === this.state.array.length) this.setState({ button: false });
              arrayBars[i].style.backgroundColor = 'green';
            }, i*this.state.speed);
          }
        }
      }, i*this.state.speed);
    }
  }
}

function randInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
 
export default Sort;
