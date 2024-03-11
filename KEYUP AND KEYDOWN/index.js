// Keydown Event
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    console.log('Key code:', event.keyCode);
    console.log('Shift key pressed:', event.shiftKey);
    console.log('Ctrl key pressed:', event.ctrlKey);
    console.log('Alt key pressed:', event.altKey);
  });
  
  // Keyup Event
  document.addEventListener('keyup', function(event) {
    console.log('Key released:', event.key);
    console.log('Key code:', event.keyCode);
    console.log('Shift key released:', event.shiftKey);
    console.log('Ctrl key released:', event.ctrlKey);
    console.log('Alt key released:', event.altKey);
  });

  
  