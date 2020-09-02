export function dijkstra(grid, startNode, endNode) {
    const unvisited = [];
    const visited = [];
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            let distance;
            if (startNode[0] === i && startNode[1] === j) {
                distance = 0;
            }
            else {
                distance = 'infinity';
            }
            unvisited.push([grid[i][j], distance, false, i, j]);
        }
    }
    while(unvisited.length !== 0) {
        unvisited.sort((a,b) => a[1] - b[1]);
        const closest = unvisited.unshift();
        if (closest[0] === 'wall') continue;
        else if(closest[1] === 'infinity') return visited;
        closest[2] = true;
        visited.push(closest);
        if (closest[0] === 'end') return visited;
        


    }
}