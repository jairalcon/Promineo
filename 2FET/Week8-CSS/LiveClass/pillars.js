function pillars(numPill, dist, width) {
    if(numPill === 1) {
      return 0;
    }
    return ((numPill - 1) * dist * 100) + ((numPill - 2) * width);
  }
  
  
  
  // [  ]   [  ]
  
  
  
  // [  ]   [  ]   [  ]   [  ]
  
  // numPill = 4
  // dist = 3
  // width = 2
  
  // 3 * dist
  // 2 * width
  
  
  // [  ]   [  ]   [  ]
  
  // numPill = 3
  // dist = 3
  // width = 2
  
  // 2 * dist
  // 1 * width