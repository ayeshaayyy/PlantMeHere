// import all the images
function preload() {
    screen = loadImage('./assets/Save_Report.png');
    button = loadImage('./assets/save-btn.png');
    cancel = loadImage('./assets/cancel.png');
    
      
    }
  function setup() {
    createCanvas(386, 1295);
    // create a link
    link = createA('./delscreen.html', '');
    save = createA('./save-report.html', '');
    
    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 386, 1295);

      // save button
      img = createImg('./assets/save-btn.png').parent(save);
      img.position(23,1153);
      img.size(340,58);
// cancel btn
      img = createImg('./assets/cancel.png').parent(link);
      img.position(23,1226);
      img.size(340,58);
    }