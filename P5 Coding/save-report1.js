// import all the images
function preload() {
    screen = loadImage('./assets/Save_Project1.png');
   // button = loadImage('./assets/Inputfill.png');
    
      
    }
  function setup() {
    createCanvas(386, 1295);
    // create a link
    link = createA('./Projects.html', '');
    
    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 386, 1295);


      // input
     img = createImg('./assets/Inputfill.png');
      img.position(74,390);
      img.size(255,56);

        // input
     img = createImg('./assets/savee.png').parent(link);
     img.position(98,475);
     img.size(188,53);
    }