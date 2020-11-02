const colorDatabase = ["red", "blue", "green", "pink"];

const sizeDatabase = ["xs", "small", "mid", "big", "xl"];

const rotateDatabase = [
  "rotate-20",
  "rotate-40",
  "rotate-60",
  "rotate-80",
  "rotate-100",
  "rotate-120",
  "rotate-140",
  "rotate-160",
  "rotate-240",
  "rotate-260",
  "rotate-280",
];

const iconDatabase = [
  {
    name: "cat",
    css: "fas fa-cat",
  },
  {
    name: "air freshener",
    css: "fas fa-air-freshener",
  },
  {
    name: "dog",
    css: "fas fa-dog",
  },
  {
    name: "spider",
    css: "fas fa-spider",
  },
  {
    name: "fish",
    css: "fas fa-fish",
  },
  {
    name: "arrow",
    css: "fas fa-arrow-right",
  },
  {
    name: "baby",
    css: "fas fa-baby",
  },
  {
    name: "battery",
    css: "fas fa-battery-full",
  },
  {
    name: "bomb",
    css: "fas fa-bomb",
  },
  {
    name: "bowling ball",
    css: "fas fa-bowling-ball",
  },
  {
    name: "bus",
    css: "fas fa-bus",
  },
  {
    name: "cloud",
    css: "fas fa-cloud",
  },
  {
    name: "church",
    css: "fas fa-church",
  },
  {
    name: "glasses",
    css: "fas fa-glasses",
  },
  {
    name: "gift",
    css: "fas fa-gift",
  },
  {
    name: "lightbulb",
    css: "fas fa-lightbulb",
  },
  {
    name: "leaf",
    css: "fas fa-leaf",
  },
  {
    name: "lemon",
    css: "fas fa-lemon",
  },
  {
    name: "star",
    css: "fas fa-star",
  },
  {
    name: "puzzle",
    css: "fas fa-puzzle-piece",
  },
  {
    name: "bottle",
    css: "fas fa-wine-bottle",
  },
  {
    name: "ambulance",
    css: "fas fa-ambulance",
  },
  {
    name: "anchor",
    css: "fas fa-anchor",
  },
  {
    name: "baby carriage",
    css: "fas fa-baby-carriage",
  },
  {
    name: "baseball ball",
    css: "fas fa-baseball-ball",
  },
  {
    name: "bed",
    css: "fas fa-bed",
  },
  {
    name: "bell",
    css: "fas fa-bell",
  },
  {
    name: "bicycle",
    css: "fas fa-bicycle",
  },
  {
    name: "birthday cake",
    css: "fas fa-birthday-cake",
  },
  {
    name: "blender",
    css: "fas fa-blender",
  },
  {
    name: "bone",
    css: "fas fa-bone",
  },
  {
    name: "book",
    css: "fas fa-book",
  },
  {
    name: "box",
    css: "fas fa-box-open",
  },
  {
    name: "bread slice",
    css: "fas fa-bread-slice",
  },
  {
    name: "building",
    css: "fas fa-building",
  },
  {
    name: "calendar",
    css: "fas fa-calendar-alt",
  },
  {
    name: "camera",
    css: "fas fa-camera",
  },
  {
    name: "maple leaf",
    css: "fab fa-canadian-maple-leaf",
  },
  {
    name: "car",
    css: "fas fa-car-side",
  },
  {
    name: "chair",
    css: "fas fa-chair",
  },
  {
    name: "chess",
    css: "fas fa-chess",
  },
  {
    name: "clock",
    css: "fas fa-clock",
  },
  {
    name: "cocktail",
    css: "fas fa-cocktail",
  },
  {
    name: "compass",
    css: "far fa-compass",
  },
  {
    name: "crown",
    css: "fas fa-crown",
  },
  {
    name: "scissors",
    css: "fas fa-cut",
  },
  {
    name: "dice",
    css: "fas fa-dice",
  },
  {
    name: "drum",
    css: "fas fa-drum",
  },
  {
    name: "egg",
    css: "fas fa-egg",
  },
  {
    name: "envelope",
    css: "fas fa-envelope-open",
  },
  {
    name: "fingerprint",
    css: "fas fa-fingerprint",
  },
  {
    name: "flag",
    css: "fas fa-flag",
  },
  {
    name: "diamond",
    css: "far fa-gem",
  },
  {
    name: "ghost",
    css: "fas fa-ghost",
  },
  {
    name: "globe",
    css: "fas fa-globe-americas",
  },
  {
    name: "emoji",
    css: "fas fa-grin-alt",
  },
  {
    name: "guitar",
    css: "fas fa-guitar",
  },
  {
    name: "hamburger",
    css: "fas fa-hamburger",
  },
  {
    name: "hammer",
    css: "fas fa-hammer",
  },
  {
    name: "hand",
    css: "fas fa-hand-paper",
  },
  {
    name: "cowboy hat",
    css: "fas fa-hat-cowboy",
  },
  {
    name: "heart",
    css: "far fa-heart",
  },
  {
    name: "headphones",
    css: "fas fa-headphones",
  },
  {
    name: "feather",
    css: "fas fa-feather-alt",
  },
  {
    name: "ice cream",
    css: "fas fa-ice-cream",
  },
  {
    name: "hourglass",
    css: "fas fa-hourglass-half",
  },
  {
    name: "igloo",
    css: "fas fa-igloo",
  },
  {
    name: "instagram",
    css: "fab fa-instagram",
  },
  {
    name: "keyboard",
    css: "far fa-keyboard",
  },
  {
    name: "laptop",
    css: "fas fa-laptop",
  },
  {
    name: "lungs",
    css: "fas fa-lungs",
  },
  {
    name: "map",
    css: "fas fa-map-marked-alt",
  },
  {
    name: "microphone",
    css: "fas fa-microphone-alt",
  },
  {
    name: "moon",
    css: "far fa-moon",
  },
  {
    name: "paint roller",
    css: "fas fa-paint-roller",
  },
  {
    name: "paperclip",
    css: "fas fa-paperclip",
  },
  {
    name: "pencil",
    css: "fas fa-pencil-alt",
  },
  {
    name: "phone",
    css: "fas fa-phone",
  },
  {
    name: "plane",
    css: "fas fa-plane",
  },
  {
    name: "ribbon",
    css: "fas fa-ribbon",
  },
  {
    name: "road",
    css: "fas fa-road",
  },
  {
    name: "robot",
    css: "fas fa-robot",
  },
  {
    name: "rocket",
    css: "fas fa-rocket",
  },
  {
    name: "shopping cart",
    css: "fas fa-shopping-cart",
  },
  {
    name: "shopping basket",
    css: "fas fa-shopping-basket",
  },
  {
    name: "shower",
    css: "fas fa-shower",
  },
  {
    name: "skull",
    css: "fas fa-skull",
  },
  {
    name: "mug",
    css: "fas fa-mug-hot",
  },
  {
    name: "socks",
    css: "fas fa-socks",
  },
  {
    name: "spray can",
    css: "fas fa-spray-can",
  },
  {
    name: "stethoscope",
    css: "fas fa-stethoscope",
  },
  {
    name: "suitcase",
    css: "fas fa-suitcase",
  },
  {
    name: "swimming pool",
    css: "fas fa-swimming-pool",
  },
  {
    name: "syringe",
    css: "fas fa-syringe",
  },
  {
    name: "thermometer",
    css: "fas fa-thermometer-half",
  },
  {
    name: "toilet paper",
    css: "fas fa-toilet-paper",
  },
  {
    name: "tractor",
    css: "fas fa-tractor",
  },
  {
    name: "trash",
    css: "far fa-trash-alt",
  },
  {
    name: "train",
    css: "fas fa-train",
  },
  {
    name: "traffic light",
    css: "fas fa-traffic-light",
  },
  {
    name: "trophy",
    css: "fas fa-trophy",
  },
  {
    name: "truck",
    css: "fas fa-truck",
  },
  {
    name: "twitter",
    css: "fab fa-twitter",
  },
  {
    name: "t-shirt",
    css: "fas fa-tshirt",
  },
  {
    name: "wi-fi",
    css: "fas fa-wifi",
  },
  {
    name: "umbrella",
    css: "fas fa-umbrella",
  },
];
