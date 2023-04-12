function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  function moveDodgerRight() {
    const RightNumbers = dodger.style.Left.replace("px", "");
    const Right = parseInt(RightNumbers, 10);
  
    if (Right > 0) {
      dodger.style.Left = `${Left + 1}px`;
    }
  }