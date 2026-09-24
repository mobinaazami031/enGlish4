/* =========================================================
   ROBO: MISSION FUTURE
   SCRIPT.JS
   ========================================================= */

"use strict";

/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE_KEY = "roboMissionFuture_v5";

const defaultState = {
  currentMission: 0,
  currentLesson: 0,
  totalXP: 0,
  totalScore: 0,
  unlockedMission: 0,
  soundOn: true,
  voiceRate: 0.7
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!saved || typeof saved !== "object") {
      return { ...defaultState };
    }

    return {
      ...defaultState,
      ...saved
    };
  } catch (error) {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = (id) => document.getElementById(id);

const screens = [
  "homeScreen",
  "howToPlayScreen",
  "mapScreen",
  "missionScreen",
  "gameArea",
  "quizArea",
  "completeArea",
  "finalScreen"
];

function showScreen(id) {
  screens.forEach((screenId) => {
    const el = $(screenId);

    if (el) {
      el.classList.toggle("active", screenId === id);
    }
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function setText(id, value) {
  const el = $(id);

  if (el) {
    el.textContent = value;
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================================
   MISSION DATA
   ========================================================= */

const missions = [

  /* =======================================================
     MISSION 01
     ======================================================= */

  {
    title: "CLEAN ENERGY",
    subtitle: "Power the future with clean energy.",
    icon: "☀️",
    gameTitle: "SOLAR RUSH",

    guide: {
      objective:
        "Collect all three clean-energy cells before the storm reaches you.",
      steps: [
        "Move Robo with LEFT and RIGHT.",
        "Use JUMP to reach higher energy cells.",
        "Collect the yellow solar cells.",
        "Avoid the storm clouds.",
        "Collect all 3 cells to complete the game."
      ]
    },

    lessons: [

      {
        title: "WHAT IS CLEAN ENERGY?",
        icon: "☀️",

        text:
          "Clean energy comes from natural sources. It can help reduce pollution and protect our planet.",

        easy:
          "Clean energy comes from nature. It can make less pollution.",

        key:
          "Clean energy can come from natural sources.",

        vocabulary: [
          ["energy", "انرژی"],
          ["clean", "پاک"],
          ["natural", "طبیعی"],
          ["pollution", "آلودگی"]
        ]
      },

      {
        title: "SOLAR POWER",
        icon: "🌞",

        text:
          "Solar power uses energy from the sun. Solar panels change sunlight into electricity.",

        easy:
          "Solar power uses the sun. Solar panels make electricity from sunlight.",

        key:
          "Solar panels use sunlight to make electricity.",

        vocabulary: [
          ["solar", "خورشیدی"],
          ["sunlight", "نور خورشید"],
          ["panel", "پنل"],
          ["electricity", "برق"]
        ]
      },

      {
        title: "WIND POWER",
        icon: "🌬️",

        text:
          "Wind power uses moving air to make electricity. Wind turbines can produce clean energy.",

        easy:
          "Wind power uses moving air. Wind turbines make electricity.",

        key:
          "Wind turbines can turn wind into electricity.",

        vocabulary: [
          ["wind", "باد"],
          ["turbine", "توربین"],
          ["air", "هوا"],
          ["power", "نیرو"]
        ]
      }

    ],

    quiz: {
      question: "Which source of energy uses sunlight?",

      options: [
        "Wind energy",
        "Solar energy",
        "Coal",
        "Oil"
      ],

      answer: 1,

      explanation:
        "Solar energy uses sunlight to make electricity."
    }
  },


  /* =======================================================
     MISSION 02
     ======================================================= */

  {
    title: "ARTIFICIAL INTELLIGENCE",
    subtitle: "Teach Robo how intelligent technology works.",
    icon: "🤖",
    gameTitle: "AI MEMORY LAB",

    guide: {
      objective:
        "Match all AI concepts with their identical partners.",

      steps: [
        "Click one card.",
        "Click a second card.",
        "Try to find the matching symbol.",
        "A correct pair gives you XP.",
        "Match all four pairs to finish."
      ]
    },

    lessons: [

      {
        title: "WHAT IS AI?",
        icon: "🤖",

        text:
          "Artificial intelligence, or AI, is technology that can learn from information and perform tasks.",

        easy:
          "AI is smart computer technology. It can learn from information.",

        key:
          "AI can use information to perform tasks.",

        vocabulary: [
          ["artificial", "مصنوعی"],
          ["intelligence", "هوش"],
          ["technology", "فناوری"],
          ["task", "کار / وظیفه"]
        ]
      },

      {
        title: "DATA AND PATTERNS",
        icon: "🧠",

        text:
          "AI systems can study large amounts of data. They look for patterns and use them to make decisions.",

        easy:
          "AI studies data. It finds patterns and uses them.",

        key:
          "AI can learn patterns from data.",

        vocabulary: [
          ["data", "داده"],
          ["pattern", "الگو"],
          ["learn", "یاد گرفتن"],
          ["decision", "تصمیم"]
        ]
      },

      {
        title: "AI AROUND US",
        icon: "📱",

        text:
          "AI is used in many everyday tools. It can help with maps, recommendations, translation, and voice assistants.",

        easy:
          "We use AI in everyday life. It can help us with maps, apps, and voices.",

        key:
          "AI is already part of many everyday technologies.",

        vocabulary: [
          ["everyday", "روزمره"],
          ["map", "نقشه"],
          ["recommendation", "پیشنهاد"],
          ["assistant", "دستیار"]
        ]
      }

    ],

    quiz: {
      question: "What can AI find in data?",

      options: [
        "Patterns",
        "Rain",
        "Buildings",
        "Cars"
      ],

      answer: 0,

      explanation:
        "AI can study data and find patterns in it."
    }
  },


  /* =======================================================
     MISSION 03
     ======================================================= */

  {
    title: "SMART HOME",
    subtitle: "Connect smart technology to the right place.",
    icon: "🏠",
    gameTitle: "SMART HOME FIX",

    guide: {
      objective:
        "Connect every smart device to the room where it belongs.",

      steps: [
        "Click a smart device.",
        "Then click the correct room.",
        "A correct connection gives you points.",
        "A wrong connection costs one life.",
        "Connect all four devices to finish."
      ]
    },

    lessons: [

      {
        title: "WHAT IS A SMART HOME?",
        icon: "🏠",

        text:
          "A smart home uses connected technology to control devices and make daily life easier.",

        easy:
          "A smart home has connected devices. They can make life easier.",

        key:
          "A smart home connects technology inside a home.",

        vocabulary: [
          ["smart", "هوشمند"],
          ["home", "خانه"],
          ["connected", "متصل"],
          ["control", "کنترل کردن"]
        ]
      },

      {
        title: "SMART DEVICES",
        icon: "💡",

        text:
          "Smart lights, smart locks, smart refrigerators, and other devices can connect to a network.",

        easy:
          "Smart lights, locks, and fridges can connect to a network.",

        key:
          "Smart devices can communicate through a network.",

        vocabulary: [
          ["device", "دستگاه"],
          ["light", "چراغ"],
          ["lock", "قفل"],
          ["refrigerator", "یخچال"]
        ]
      },

      {
        title: "WHY SMART HOMES?",
        icon: "⚡",

        text:
          "Smart homes can save time and energy. They can also help people control devices more easily.",

        easy:
          "Smart homes can save time and energy. They are easier to control.",

        key:
          "Smart technology can make homes more convenient.",

        vocabulary: [
          ["save", "صرفه‌جویی کردن"],
          ["convenient", "راحت"],
          ["control", "کنترل کردن"],
          ["energy", "انرژی"]
        ]
      }

    ],

    quiz: {
      question: "What does a smart home use?",

      options: [
        "Connected technology",
        "Only paper",
        "Only water",
        "Old books"
      ],

      answer: 0,

      explanation:
        "A smart home uses connected technology to control devices."
    }
  },


  /* =======================================================
     MISSION 04
     ======================================================= */

  {
    title: "SELF-DRIVING CARS",
    subtitle: "Learn how future cars understand the road.",
    icon: "🚗",
    gameTitle: "FUTURE ROAD",

    guide: {
      objective:
        "Choose the correct lane for Robo's self-driving car.",

      steps: [
        "Read the road instruction.",
        "Look at the three lanes.",
        "Choose LEFT, MIDDLE, or RIGHT.",
        "A correct choice gives you points.",
        "Complete all five road situations."
      ]
    },

    lessons: [

      {
        title: "WHAT IS A SELF-DRIVING CAR?",
        icon: "🚗",

        text:
          "A self-driving car can use computers and sensors to understand the road and control the vehicle.",

        easy:
          "A self-driving car uses computers and sensors. They help the car understand the road.",

        key:
          "Self-driving cars use technology to understand their surroundings.",

        vocabulary: [
          ["self-driving", "خودران"],
          ["sensor", "حسگر"],
          ["vehicle", "وسیله نقلیه"],
          ["road", "جاده"]
        ]
      },

      {
        title: "SEEING THE ROAD",
        icon: "👁️",

        text:
          "Cameras and sensors can detect roads, vehicles, people, and traffic signs.",

        easy:
          "Cameras and sensors help the car see roads, cars, people, and signs.",

        key:
          "Sensors help a car understand objects around it.",

        vocabulary: [
          ["camera", "دوربین"],
          ["detect", "تشخیص دادن"],
          ["traffic", "ترافیک"],
          ["sign", "تابلو / علامت"]
        ]
      },

      {
        title: "SAFETY",
        icon: "🛡️",

        text:
          "Safety is very important for self-driving technology. Cars need to make careful decisions in changing situations.",

        easy:
          "Safety is very important. The car must make careful decisions.",

        key:
          "Safety is a central part of self-driving technology.",

        vocabulary: [
          ["safety", "ایمنی"],
          ["careful", "محتاط"],
          ["situation", "موقعیت"],
          ["decision", "تصمیم"]
        ]
      }

    ],

    quiz: {
      question: "What helps a self-driving car see the road?",

      options: [
        "Cameras and sensors",
        "A backpack",
        "A pencil",
        "A book"
      ],

      answer: 0,

      explanation:
        "Cameras and sensors help the car detect things around it."
    }
  },


  /* =======================================================
     MISSION 05
     ======================================================= */

  {
    title: "ENVIRONMENT",
    subtitle: "Use smart ideas to protect our planet.",
    icon: "🌍",
    gameTitle: "ECO RESCUE",

    guide: {
      objective:
        "Sort every item into the correct recycling category.",

      steps: [
        "Choose a waste item.",
        "Choose the correct recycling bin.",
        "A correct answer gives you points.",
        "A wrong answer costs one life.",
        "Sort all four items to complete the rescue."
      ]
    },

    lessons: [

      {
        title: "TECHNOLOGY AND NATURE",
        icon: "🌍",

        text:
          "Technology can help people protect nature by saving energy, reducing waste, and monitoring the environment.",

        easy:
          "Technology can help protect nature. It can save energy and reduce waste.",

        key:
          "Technology can support a healthier environment.",

        vocabulary: [
          ["nature", "طبیعت"],
          ["protect", "محافظت کردن"],
          ["reduce", "کاهش دادن"],
          ["waste", "زباله"]
        ]
      },

      {
        title: "SMART RECYCLING",
        icon: "♻️",

        text:
          "Recycling means collecting and processing materials so they can be used again.",

        easy:
          "Recycling means using materials again instead of throwing them away.",

        key:
          "Recycling helps materials get a second use.",

        vocabulary: [
          ["recycle", "بازیافت کردن"],
          ["material", "مواد"],
          ["again", "دوباره"],
          ["plastic", "پلاستیک"]
        ]
      },

      {
        title: "A GREENER FUTURE",
        icon: "🌱",

        text:
          "A greener future needs smart choices. Clean energy, recycling, and less waste can help the planet.",

        easy:
          "We can help the planet with clean energy, recycling, and less waste.",

        key:
          "Small smart choices can help create a greener future.",

        vocabulary: [
          ["green", "سبز"],
          ["future", "آینده"],
          ["choice", "انتخاب"],
          ["planet", "سیاره"]
        ]
      }

    ],

    quiz: {
      question: "Why is recycling useful?",

      options: [
        "It helps materials be used again.",
        "It creates more waste.",
        "It wastes all materials.",
        "It stops people from using technology."
      ],

      answer: 0,

      explanation:
        "Recycling lets useful materials be collected and used again."
    }
  }

];

/* =========================================================
   GAME STATE
   ========================================================= */

let gameState = {
  type: null,
  score: 0,
  lives: 3,
  energy: 100,
  finished: false,
  cleanup: null,

  solar: {
    collected: 0,
    x: 9,
    jumping: false
  },

  memory: {
    flipped: [],
    matched: 0,
    locked: false
  },

  smart: {
    selectedDevice: null,
    completed: 0
  },

  road: {
    round: 0,
    position: 1
  },

  eco: {
    selectedWaste: null,
    completed: 0
  }
};

/* =========================================================
   AUDIO
   ========================================================= */

let speechQueueId = 0;

function speak(text, rate = state.voiceRate) {
  if (!state.soundOn) return;

  if (!("speechSynthesis" in window)) {
    showToast("🔊", "Voice is not supported by this browser.");
    return;
  }

  speechQueueId++;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "en-US";
  utterance.rate = Math.max(0.55, Math.min(1.15, rate));
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function speakLesson() {
  const mission = missions[state.currentMission];
  const lesson = mission.lessons[state.currentLesson];

  speak(
    `${lesson.title}. ${lesson.text}`,
    state.voiceRate
  );
}

function speakEasyEnglish() {
  const mission = missions[state.currentMission];
  const lesson = mission.lessons[state.currentLesson];

  speak(
    `${lesson.title}. Easy English. ${lesson.easy}`,
    state.voiceRate
  );
}

function speakFinal() {
  speak(
    "Congratulations, Future Explorer! You completed all five missions. You learned about clean energy, artificial intelligence, smart homes, self-driving cars, and the environment.",
    0.72
  );
}

/* =========================================================
   SOUND UI
   ========================================================= */

function updateSoundButton() {
  const btn = $("soundBtn");

  if (!btn) return;

  btn.textContent = state.soundOn ? "🔊" : "🔇";
}

function toggleSound() {
  state.soundOn = !state.soundOn;

  if (!state.soundOn) {
    stopSpeaking();
  }

  saveState();
  updateSoundButton();

  showToast(
    state.soundOn ? "🔊" : "🔇",
    state.soundOn ? "Voice ON" : "Voice OFF"
  );
}

/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;

function showToast(icon, message) {
  const toast = $("toast");
  const toastIcon = $("toastIcon");
  const toastMessage = $("toastMessage");

  if (!toast) return;

  if (toastIcon) toastIcon.textContent = icon;
  if (toastMessage) toastMessage.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

/* =========================================================
   TOP BAR
   ========================================================= */

function updateTopBar() {
  setText(
    "missionNumber",
    `MISSION ${String(state.currentMission + 1).padStart(2, "0")}`
  );

  setText("xpDisplay", state.totalXP);

  updateSoundButton();
}

/* =========================================================
   HOME / HOW TO PLAY
   ========================================================= */

function openHome() {
  stopSpeaking();
  showScreen("homeScreen");

  setText("progressText", "HOME");
}

function openHowToPlay() {
  showScreen("howToPlayScreen");
  setText("progressText", "GUIDE");
}

function startMissionSequence() {
  startMission(0);
}

function startMission(index) {
  if (index < 0 || index >= missions.length) return;

  if (index > state.unlockedMission) {
    showToast("🔒", "Complete the previous mission first.");
    return;
  }

  state.currentMission = index;
  state.currentLesson = 0;

  saveState();

  renderMission();
  showScreen("missionScreen");

  setText(
    "progressText",
    `LESSON 1 / ${missions[index].lessons.length}`
  );
}

/* =========================================================
   MISSION MAP
   ========================================================= */

function renderMissionMap() {
  const cards = document.querySelectorAll(".mission-card");

  cards.forEach((card) => {
    const index = Number(card.dataset.mission);

    const unlocked = index <= state.unlockedMission;

    card.classList.toggle("locked", !unlocked);
    card.classList.toggle("unlocked", unlocked);

    const status = card.querySelector(".mission-status-label");

    if (status) {
      if (index < state.unlockedMission) {
        status.textContent = "COMPLETE";
      } else if (index === state.unlockedMission) {
        status.textContent = "READY";
      } else {
        status.textContent = "LOCKED";
      }
    }
  });
}

function openMap() {
  stopSpeaking();
  renderMissionMap();
  showScreen("mapScreen");

  setText("progressText", "MAP");
}

/* =========================================================
   MISSION RENDER
   ========================================================= */

function renderMission() {
  const mission = missions[state.currentMission];
  const lesson = mission.lessons[state.currentLesson];

  setText(
    "missionEyebrow",
    `MISSION ${String(state.currentMission + 1).padStart(2, "0")} • ${mission.title}`
  );

  setText("missionTitle", mission.title);
  setText("missionSubtitle", mission.subtitle);

  setText(
    "roboMessage",
    `Mission ${state.currentMission + 1} online. Let's learn about ${mission.title.toLowerCase()}.`
  );

  setText(
    "lessonCounter",
    `${state.currentLesson + 1} / ${mission.lessons.length}`
  );

  const progress =
    ((state.currentLesson + 1) / mission.lessons.length) * 100;

  const progressBar = $("lessonProgressBar");

  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }

  setText("lessonIcon", lesson.icon);
  setText("lessonTitle", lesson.title);
  setText("lessonText", lesson.text);
  setText("keyIdea", lesson.key);

  renderVocabulary(lesson);
  renderLessonButtons();

  setText(
    "progressText",
    `LESSON ${state.currentLesson + 1} / ${mission.lessons.length}`
  );

  updateTopBar();
}

/* =========================================================
   VOCABULARY
   ========================================================= */

function renderVocabulary(lesson) {
  const container = $("vocabulary");

  if (!container) return;

  container.innerHTML = "";

  lesson.vocabulary.forEach(([word, meaning]) => {
    const item = document.createElement("button");

    item.type = "button";
    item.className = "vocab-item";

    item.innerHTML = `
      <span class="vocab-word">${escapeHTML(word)}</span>
      <span class="vocab-meaning">${escapeHTML(meaning)} 🔊</span>
    `;

    item.addEventListener("click", () => {
      speak(word, 0.65);
      showToast("🔊", word);
    });

    container.appendChild(item);
  });
}

/* =========================================================
   LESSON BUTTON
   ========================================================= */

function renderLessonButtons() {
  const btn = $("startGameBtn");

  if (!btn) return;

  const lastLesson =
    state.currentLesson === missions[state.currentMission].lessons.length - 1;

  btn.textContent = lastLesson
    ? "START MISSION GAME 🎮"
    : "NEXT LESSON →";
}

/* =========================================================
   NEXT LESSON
   ========================================================= */

function nextLessonOrGame() {
  const mission = missions[state.currentMission];

  if (state.currentLesson < mission.lessons.length - 1) {
    state.currentLesson++;

    saveState();
    renderMission();

    speakLesson();

    return;
  }

  startMissionGame();
}

/* =========================================================
   EASY ENGLISH
   ========================================================= */

function openEasyEnglish() {
  const mission = missions[state.currentMission];
  const lesson = mission.lessons[state.currentLesson];

  const modal = $("easyEnglishModal");
  const text = $("easyEnglishText");

  if (text) {
    text.textContent = lesson.easy;
  }

  if (modal) {
    modal.classList.add("active");
  }

  setTimeout(() => {
    speakEasyEnglish();
  }, 180);
}

function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove("active");
}

/* =========================================================
   MISSION GUIDE
   ========================================================= */

function showMissionGuide() {
  const mission = missions[state.currentMission];
  const modal = $("missionGuideModal");
  const body = modal?.querySelector(".dynamic-guide-body");

  if (!modal || !body) return;

  body.innerHTML = `
    <p>
      <strong>🎯 Objective</strong><br>
      ${escapeHTML(mission.guide.objective)}
    </p>

    <ul>
      ${mission.guide.steps
        .map((step) => `<li>${escapeHTML(step)}</li>`)
        .join("")}
    </ul>
  `;

  modal.classList.add("active");
}

/* =========================================================
   GENERAL GUIDE
   ========================================================= */

function showGeneralGuide() {
  const modal = $("guideModal");

  if (modal) {
    modal.classList.add("active");
  }
}

/* =========================================================
   ASK ROBO
   ========================================================= */

function askRobo() {
  const mission = missions[state.currentMission];
  const lesson = mission.lessons[state.currentLesson];

  speak(
    `Here is the key idea. ${lesson.key}`,
    0.68
  );

  showToast("🤖", "Robo is speaking...");
}

/* =========================================================
   GAME START
   ========================================================= */

function startMissionGame() {
  const mission = missions[state.currentMission];

  stopSpeaking();

  gameState = {
    type: state.currentMission,
    score: 0,
    lives: 3,
    energy: 100,
    finished: false,
    cleanup: null,

    solar: {
      collected: 0,
      x: 9,
      jumping: false
    },

    memory: {
      flipped: [],
      matched: 0,
      locked: false
    },

    smart: {
      selectedDevice: null,
      completed: 0
    },

    road: {
      round: 0,
      position: 1
    },

    eco: {
      selectedWaste: null,
      completed: 0
    }
  };

  setText("gameTitle", mission.gameTitle);

  updateGameHUD();

  showScreen("gameArea");

  setText("progressText", "MISSION GAME");

  const board = $("gameBoard");

  if (!board) return;

  board.innerHTML = "";

  if (state.currentMission === 0) {
    createSolarRush(board);
  }

  if (state.currentMission === 1) {
    createAIMemory(board);
  }

  if (state.currentMission === 2) {
    createSmartHome(board);
  }

  if (state.currentMission === 3) {
    createFutureRoad(board);
  }

  if (state.currentMission === 4) {
    createEcoRescue(board);
  }

  updateGenericControls();

  speak(
    mission.guide.objective,
    0.7
  );
}

/* =========================================================
   GAME HUD
   ========================================================= */

function updateGameHUD() {
  setText("scoreDisplay", gameState.score);

  const lives = "❤️".repeat(Math.max(0, gameState.lives));

  setText(
    "livesDisplay",
    lives || "💔"
  );

  setText("energyDisplay", gameState.energy);
}

/* =========================================================
   SCORE / LIFE
   ========================================================= */

function addGameScore(points) {
  gameState.score += points;
  updateGameHUD();

  showToast("⭐", `+${points} points`);
}

function loseLife(reason) {
  gameState.lives--;

  updateGameHUD();

  showToast("💔", reason);

  if (gameState.lives <= 0) {
    gameOver();
  }
}

function gameOver() {
  if (gameState.finished) return;

  gameState.finished = true;

  stopGameTimers();

  const board = $("gameBoard");

  if (!board) return;

  const overlay = document.createElement("div");

  overlay.className = "game-over-overlay";

  overlay.innerHTML = `
    <div class="game-over-box">
      <div class="game-over-icon">💥</div>

      <h3>MISSION FAILED</h3>

      <p>
        Robo needs another try.
      </p>

      <button class="primary-btn" id="restartGameInternal" type="button">
        TRY AGAIN 🔄
      </button>
    </div>
  `;

  board.appendChild(overlay);

  const restart = $("restartGameInternal");

  if (restart) {
    restart.addEventListener("click", () => {
      startMissionGame();
    });
  }
}

function stopGameTimers() {
  if (gameState.cleanup && typeof gameState.cleanup === "function") {
    gameState.cleanup();
  }

  gameState.cleanup = null;
}

/* =========================================================
   GENERIC CONTROLS
   ========================================================= */

function updateGenericControls() {
  const controls = document.querySelector(".game-controls");

  if (!controls) return;

  const solar = state.currentMission === 0;

  controls.style.display = solar ? "flex" : "none";
}

function movePlayer(direction) {
  if (state.currentMission !== 0) return;
  if (gameState.finished) return;

  const player = $("gamePlayer");

  if (!player) return;

  gameState.solar.x += direction * 5;

  gameState.solar.x = Math.max(
    2,
    Math.min(91, gameState.solar.x)
  );

  player.style.left = `${gameState.solar.x}%`;

  checkSolarCollisions();
}

function jumpPlayer() {
  if (state.currentMission !== 0) return;
  if (gameState.finished) return;

  const player = $("gamePlayer");

  if (!player || gameState.solar.jumping) return;

  gameState.solar.jumping = true;

  player.classList.add("jumping");

  setTimeout(() => {
    player.classList.remove("jumping");
    gameState.solar.jumping = false;

    checkSolarCollisions();
  }, 500);
}

/* =========================================================
   GAME 01 — SOLAR RUSH
   ========================================================= */

function createSolarRush(board) {
  board.innerHTML = `
    <div class="mini-game solar-world">

      <div class="game-instruction">
        ☀️ <strong>SOLAR RUSH</strong> —
        Collect all 3 solar cells. Avoid the storms.
      </div>

      <div class="solar-ground"></div>

      <div
        id="gamePlayer"
        class="solar-player"
        aria-label="Robo"
      >
        🤖
      </div>

      <button
        class="solar-item solar1"
        data-solar="1"
        type="button"
        aria-label="Solar cell"
      >
        ☀️
      </button>

      <button
        class="solar-item solar2"
        data-solar="2"
        type="button"
        aria-label="Solar cell"
      >
        ☀️
      </button>

      <button
        class="solar-item solar3"
        data-solar="3"
        type="button"
        aria-label="Solar cell"
      >
        ☀️
      </button>

      <div class="storm storm1">
        🌩️
      </div>

      <div class="storm storm2">
        🌩️
      </div>

    </div>
  `;

  const solarItems = board.querySelectorAll(".solar-item");

  solarItems.forEach((item) => {
    item.addEventListener("click", () => {
      collectSolarItem(item);
    });
  });

  window.addEventListener("keydown", solarKeyboardHandler);

  gameState.cleanup = () => {
    window.removeEventListener("keydown", solarKeyboardHandler);
  };
}

function solarKeyboardHandler(event) {
  if (state.currentMission !== 0) return;
  if (gameState.finished) return;

  if (
    event.key === "ArrowLeft" ||
    event.key.toLowerCase() === "a"
  ) {
    event.preventDefault();
    movePlayer(-1);
  }

  if (
    event.key === "ArrowRight" ||
    event.key.toLowerCase() === "d"
  ) {
    event.preventDefault();
    movePlayer(1);
  }

  if (
    event.key === "ArrowUp" ||
    event.key === " " ||
    event.key.toLowerCase() === "w"
  ) {
    event.preventDefault();
    jumpPlayer();
  }
}

function collectSolarItem(item) {
  if (!item || gameState.finished) return;

  if (item.dataset.collected === "true") return;

  item.dataset.collected = "true";
  item.style.opacity = "0";
  item.style.pointerEvents = "none";

  gameState.solar.collected++;

  addGameScore(30);

  showToast(
    "☀️",
    `Solar energy collected: ${gameState.solar.collected}/3`
  );

  if (gameState.solar.collected >= 3) {
    setTimeout(() => finishGame(), 500);
  }
}

function checkSolarCollisions() {
  const player = $("gamePlayer");

  if (!player) return;

  const playerRect = player.getBoundingClientRect();

  document.querySelectorAll(".solar-item").forEach((item) => {
    if (item.dataset.collected === "true") return;

    const itemRect = item.getBoundingClientRect();

    if (rectsOverlap(playerRect, itemRect)) {
      collectSolarItem(item);
    }
  });

  document.querySelectorAll(".storm").forEach((storm) => {
    if (storm.dataset.hit === "true") return;

    const stormRect = storm.getBoundingClientRect();

    if (rectsOverlap(playerRect, stormRect)) {
      storm.dataset.hit = "true";

      loseLife("Storm hit! Be careful.");

      setTimeout(() => {
        storm.dataset.hit = "false";
      }, 900);
    }
  });
}

/* =========================================================
   COLLISION
   ========================================================= */

function rectsOverlap(a, b) {
  return !(
    a.right < b.left ||
    a.left > b.right ||
    a.bottom < b.top ||
    a.top > b.bottom
  );
}

/* =========================================================
   GAME 02 — AI MEMORY
   ========================================================= */

function createAIMemory(board) {
  const pairs = [
    ["🤖", "AI"],
    ["🧠", "DATA"],
    ["👁️", "VISION"],
    ["💬", "LANGUAGE"]
  ];

  const cards = [];

  pairs.forEach(([symbol, label], pairIndex) => {
    cards.push({
      id: pairIndex,
      symbol,
      label
    });

    cards.push({
      id: pairIndex,
      symbol,
      label
    });
  });

  shuffle(cards);

  board.innerHTML = `
    <div class="mini-game ai-game">

      <div class="game-instruction">
        🧠 <strong>AI MEMORY LAB</strong> —
        Match the same AI concepts.
      </div>

      <div class="memory-grid" id="memoryGrid"></div>

    </div>
  `;

  const grid = $("memoryGrid");

  cards.forEach((cardData, index) => {

    const card = document.createElement("button");

    card.type = "button";
    card.className = "memory-card";

    card.dataset.index = index;
    card.dataset.pair = cardData.id;
    card.dataset.symbol = cardData.symbol;
    card.dataset.label = cardData.label;

    card.setAttribute(
      "aria-label",
      "Hidden memory card"
    );

    card.addEventListener("click", () => {
      flipMemoryCard(card);
    });

    grid.appendChild(card);
  });
}

function flipMemoryCard(card) {
  if (gameState.finished) return;
  if (gameState.memory.locked) return;
  if (card.classList.contains("flipped")) return;
  if (card.classList.contains("matched")) return;

  card.classList.add("flipped");

  gameState.memory.flipped.push(card);

  speak(card.dataset.label, 0.7);

  if (gameState.memory.flipped.length < 2) {
    return;
  }

  const [first, second] = gameState.memory.flipped;

  gameState.memory.locked = true;

  if (first.dataset.pair === second.dataset.pair) {

    setTimeout(() => {

      first.classList.add("matched");
      second.classList.add("matched");

      gameState.memory.matched++;

      addGameScore(25);

      gameState.memory.flipped = [];
      gameState.memory.locked = false;

      showToast(
        "🧠",
        `Match found: ${first.dataset.label}`
      );

      if (gameState.memory.matched >= 4) {
        setTimeout(() => finishGame(), 550);
      }

    }, 450);

  } else {

    setTimeout(() => {

      first.classList.remove("flipped");
      second.classList.remove("flipped");

      gameState.memory.flipped = [];
      gameState.memory.locked = false;

      loseLife("Not a match. Try again.");

    }, 750);
  }
}

/* =========================================================
   GAME 03 — SMART HOME
   ========================================================= */

function createSmartHome(board) {

  const devices = [
    {
      id: "lamp",
      icon: "💡",
      name: "SMART LAMP",
      room: "living"
    },

    {
      id: "fridge",
      icon: "🧊",
      name: "SMART FRIDGE",
      room: "kitchen"
    },

    {
      id: "shower",
      icon: "🚿",
      name: "SMART SHOWER",
      room: "bathroom"
    },

    {
      id: "lock",
      icon: "🔐",
      name: "SMART LOCK",
      room: "entrance"
    }
  ];

  const rooms = [
    {
      id: "living",
      icon: "🛋️",
      name: "LIVING ROOM"
    },

    {
      id: "kitchen",
      icon: "🍳",
      name: "KITCHEN"
    },

    {
      id: "bathroom",
      icon: "🛁",
      name: "BATHROOM"
    },

    {
      id: "entrance",
      icon: "🚪",
      name: "ENTRANCE"
    }
  ];

  board.innerHTML = `
    <div class="mini-game smart-game">

      <div class="smart-devices">

        <div class="smart-title">
          SMART DEVICES
        </div>

        ${devices.map((device) => `
          <button
            class="device"
            data-device="${device.id}"
            data-room="${device.room}"
            type="button"
          >
            <span class="device-icon">${device.icon}</span>
            <span>${device.name}</span>
          </button>
        `).join("")}

      </div>

      <div class="rooms">

        <div class="smart-title">
          CONNECT TO A ROOM
        </div>

        ${rooms.map((room) => `
          <button
            class="room"
            data-room="${room.id}"
            type="button"
          >
            <span class="room-icon">${room.icon}</span>
            <span>${room.name}</span>
          </button>
        `).join("")}

      </div>

    </div>
  `;

  board.querySelectorAll(".device").forEach((device) => {
    device.addEventListener("click", () => {
      selectSmartDevice(device);
    });
  });

  board.querySelectorAll(".room").forEach((room) => {
    room.addEventListener("click", () => {
      connectSmartDevice(room);
    });
  });
}

function selectSmartDevice(device) {
  if (gameState.finished) return;

  document
    .querySelectorAll(".device")
    .forEach((item) => item.classList.remove("selected"));

  device.classList.add("selected");

  gameState.smart.selectedDevice = device;

  showToast(
    "🏠",
    `${device.querySelector("span:last-child")?.textContent || "Device"} selected`
  );
}

function connectSmartDevice(room) {
  if (gameState.finished) return;

  const device = gameState.smart.selectedDevice;

  if (!device) {
    showToast("👆", "Choose a device first.");
    return;
  }

  if (device.dataset.room === room.dataset.room) {

    device.classList.remove("selected");
    device.classList.add("correct");

    room.classList.add("correct");

    device.disabled = true;
    room.disabled = true;

    gameState.smart.completed++;

    addGameScore(25);

    showToast("🏠", "Correct connection!");

    gameState.smart.selectedDevice = null;

    if (gameState.smart.completed >= 4) {
      setTimeout(() => finishGame(), 600);
    }

  } else {

    loseLife("Wrong room. Check the device.");
  }
}

/* =========================================================
   GAME 04 — FUTURE ROAD
   ========================================================= */

function createFutureRoad(board) {

  board.innerHTML = `
    <div class="mini-game road-game">

      <div id="roadQuestion" class="road-question">
        The car needs to continue straight.
      </div>

      <div class="road-world">

        <div class="road-lane lane-left"></div>
        <div class="road-lane lane-middle"></div>
        <div class="road-lane lane-right"></div>

        <div id="roadCar" class="road-car">
          🚗
        </div>

      </div>

      <div id="roadOptions" class="road-options">

        <button type="button" data-lane="0">
          ← LEFT
        </button>

        <button type="button" data-lane="1">
          ↑ MIDDLE
        </button>

        <button type="button" data-lane="2">
          RIGHT →
        </button>

      </div>

    </div>
  `;

  const options = document.querySelectorAll(
    "#roadOptions button"
  );

  options.forEach((button) => {
    button.addEventListener("click", () => {
      chooseRoadLane(Number(button.dataset.lane));
    });
  });

  renderRoadRound();
}

const roadRounds = [
  {
    question: "The road sign says: GO STRAIGHT.",
    answer: 1
  },

  {
    question: "The sign says: TURN LEFT.",
    answer: 0
  },

  {
    question: "The sign says: TURN RIGHT.",
    answer: 2
  },

  {
    question: "The safe route continues STRAIGHT.",
    answer: 1
  },

  {
    question: "The destination is on the RIGHT.",
    answer: 2
  }
];

function renderRoadRound() {

  const round = roadRounds[gameState.road.round];

  if (!round) return;

  setText(
    "roadQuestion",
    round.question
  );

  const car = $("roadCar");

  if (car) {
    car.style.left =
      `${16 + gameState.road.position * 34}%`;
  }
}

function chooseRoadLane(lane) {

  if (gameState.finished) return;

  const round = roadRounds[gameState.road.round];

  if (!round) return;

  gameState.road.position = lane;

  const car = $("roadCar");

  if (car) {
    car.style.left =
      `${16 + lane * 34}%`;
  }

  if (lane === round.answer) {

    addGameScore(25);

    showToast("🚗", "Correct route!");

    gameState.road.round++;

    if (gameState.road.round >= roadRounds.length) {
      setTimeout(() => finishGame(), 650);
      return;
    }

    setTimeout(() => {
      renderRoadRound();
    }, 450);

  } else {

    loseLife("Wrong route. Read the instruction carefully.");
  }
}

/* =========================================================
   GAME 05 — ECO RESCUE
   ========================================================= */

function createEcoRescue(board) {

  const wastes = [
    {
      id: "banana",
      icon: "🍌",
      name: "BANANA",
      type: "organic"
    },

    {
      id: "newspaper",
      icon: "📰",
      name: "NEWSPAPER",
      type: "paper"
    },

    {
      id: "bottle",
      icon: "🧴",
      name: "PLASTIC BOTTLE",
      type: "plastic"
    },

    {
      id: "battery",
      icon: "🔋",
      name: "BATTERY",
      type: "ewaste"
    }
  ];

  const bins = [
    {
      id: "organic",
      icon: "🥬",
      name: "ORGANIC"
    },

    {
      id: "paper",
      icon: "📄",
      name: "PAPER"
    },

    {
      id: "plastic",
      icon: "♻️",
      name: "PLASTIC"
    },

    {
      id: "ewaste",
      icon: "⚡",
      name: "E-WASTE"
    }
  ];

  board.innerHTML = `
    <div class="mini-game eco-game">

      <div class="game-instruction">
        ♻️ <strong>ECO RESCUE</strong> —
        Sort every item into the correct bin.
      </div>

      <div class="waste-items">

        ${wastes.map((waste) => `
          <button
            class="waste"
            data-waste="${waste.id}"
            data-type="${waste.type}"
            type="button"
          >
            <span class="waste-icon">${waste.icon}</span>
            <span class="waste-name">${waste.name}</span>
          </button>
        `).join("")}

      </div>

      <div class="eco-bins">

        ${bins.map((bin) => `
          <button
            class="bin"
            data-type="${bin.id}"
            type="button"
          >
            <span class="bin-icon">${bin.icon}</span>
            <span class="bin-name">${bin.name}</span>
          </button>
        `).join("")}

      </div>

    </div>
  `;

  board.querySelectorAll(".waste").forEach((waste) => {
    waste.addEventListener("click", () => {
      selectWaste(waste);
    });
  });

  board.querySelectorAll(".bin").forEach((bin) => {
    bin.addEventListener("click", () => {
      sortWaste(bin);
    });
  });
}

function selectWaste(waste) {
  if (gameState.finished) return;
  if (waste.classList.contains("correct")) return;

  document
    .querySelectorAll(".waste")
    .forEach((item) => item.classList.remove("selected"));

  waste.classList.add("selected");

  gameState.eco.selectedWaste = waste;

  showToast(
    "♻️",
    `${waste.querySelector(".waste-name")?.textContent || "Item"} selected`
  );
}

function sortWaste(bin) {

  if (gameState.finished) return;

  const waste = gameState.eco.selectedWaste;

  if (!waste) {
    showToast("👆", "Choose a waste item first.");
    return;
  }

  if (waste.dataset.type === bin.dataset.type) {

    waste.classList.remove("selected");
    waste.classList.add("correct");

    bin.classList.add("correct");

    waste.disabled = true;

    gameState.eco.completed++;

    addGameScore(25);

    showToast("♻️", "Correct recycling!");

    gameState.eco.selectedWaste = null;

    setTimeout(() => {
      bin.classList.remove("correct");
    }, 500);

    if (gameState.eco.completed >= 4) {
      setTimeout(() => finishGame(), 600);
    }

  } else {

    loseLife("Wrong bin. Try another category.");
  }
}

/* =========================================================
   SHUFFLE
   ========================================================= */

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] =
      [result[j], result[i]];
  }

  return result;
}

/* =========================================================
   GAME COMPLETE
   ========================================================= */

function finishGame() {

  if (gameState.finished) return;

  gameState.finished = true;

  stopGameTimers();

  updateGameHUD();

  showToast(
    "🏆",
    `Game complete! Score: ${gameState.score}`
  );

  setTimeout(() => {
    startQuiz();
  }, 850);
}

/* =========================================================
   QUIZ
   ========================================================= */

let quizAnswered = false;

function startQuiz() {

  quizAnswered = false;

  const mission = missions[state.currentMission];
  const quiz = mission.quiz;

  showScreen("quizArea");

  setText("progressText", "FINAL QUIZ");

  setText(
    "quizQuestion",
    quiz.question
  );

  const optionsContainer = $("quizOptions");

  if (!optionsContainer) return;

  optionsContainer.innerHTML = "";

  quiz.options.forEach((option, index) => {

    const button = document.createElement("button");

    button.type = "button";
    button.className = "quiz-option";

    button.dataset.answer = index;

    button.textContent = option;

    button.addEventListener("click", () => {
      answerQuiz(index);
    });

    optionsContainer.appendChild(button);
  });

  setText("quizFeedback", "");

  const languageBoost = $("languageBoostText");

  if (languageBoost) {
    languageBoost.style.display = "none";
  }

  const continueBtn = $("continueBtn");

  if (continueBtn) {
    continueBtn.disabled = true;
    continueBtn.style.opacity = "0.45";
  }

  speak(
    `Quick quiz. ${quiz.question}`,
    0.68
  );
}

function answerQuiz(index) {

  if (quizAnswered) return;

  const mission = missions[state.currentMission];
  const quiz = mission.quiz;

  const buttons =
    document.querySelectorAll(".quiz-option");

  quizAnswered = true;

  buttons.forEach((button) => {
    button.disabled = true;

    const answer =
      Number(button.dataset.answer);

    if (answer === quiz.answer) {
      button.classList.add("correct");
    }

    if (
      answer === index &&
      answer !== quiz.answer
    ) {
      button.classList.add("wrong");
    }
  });

  if (index === quiz.answer) {

    state.totalXP += 50;

    saveState();

    setText(
      "quizFeedback",
      "✓ Correct! +50 XP"
    );

    const languageBoost = $("languageBoostText");

    if (languageBoost) {
      languageBoost.style.display = "block";
    }

    speak(
      `Correct! ${quiz.explanation}`,
      0.68
    );

    showToast("🧠", "+50 XP");

  } else {

    setText(
      "quizFeedback",
      `✗ Not quite. ${quiz.explanation}`
    );

    speak(
      `Not quite. ${quiz.explanation}`,
      0.68
    );

    showToast("💡", "Robo gave you the explanation.");
  }

  const continueBtn = $("continueBtn");

  if (continueBtn) {
    continueBtn.disabled = false;
    continueBtn.style.opacity = "1";
  }

  updateTopBar();
}

/* =========================================================
   QUIZ EASY EXPLANATION
   ========================================================= */

function quizEasyExplanation() {

  const mission = missions[state.currentMission];

  speak(
    `Easy English. ${mission.quiz.explanation}`,
    0.65
  );

  showToast(
    "💡",
    "Robo is explaining the answer."
  );
}

/* =========================================================
   COMPLETE MISSION
   ========================================================= */

function completeMission() {

  const mission = missions[state.currentMission];

  const gameScore = gameState.score;

  const missionXP =
    100 + gameScore;

  state.totalXP += missionXP;
  state.totalScore += gameScore;

  if (
    state.currentMission < missions.length - 1 &&
    state.unlockedMission <= state.currentMission
  ) {
    state.unlockedMission =
      state.currentMission + 1;
  }

  saveState();

  setText(
    "missionXP",
    `+${missionXP} XP`
  );

  setText(
    "finalScore",
    gameScore
  );

  setText(
    "completeTitle",
    `${mission.title} COMPLETE!`
  );

  setText(
    "completeMessage",
    `Excellent work! You finished the ${mission.title.toLowerCase()} mission.`
  );

  if (state.currentMission < missions.length - 1) {

    const nextMission =
      missions[state.currentMission + 1];

    setText(
      "unlockText",
      `🔓 ${nextMission.title} is now unlocked.`
    );

  } else {

    setText(
      "unlockText",
      "🌍 You completed every future mission!"
    );
  }

  updateTopBar();
  renderMissionMap();

  showScreen("completeArea");

  setText("progressText", "COMPLETE");

  speak(
    `Mission complete! You earned ${missionXP} XP.`,
    0.68
  );
}

/* =========================================================
   CONTINUE AFTER QUIZ
   ========================================================= */

function continueFromQuiz() {
  if (!quizAnswered) {
    showToast("🧠", "Answer the quiz first.");
    return;
  }

  completeMission();
}

/* =========================================================
   NEXT MISSION
   ========================================================= */

function goToNextMission() {

  if (state.currentMission >= missions.length - 1) {
    showFinalScreen();
    return;
  }

  const next =
    state.currentMission + 1;

  if (next > state.unlockedMission) {
    showToast("🔒", "Complete the current mission first.");
    return;
  }

  startMission(next);
}

/* =========================================================
   FINAL SCREEN
   ========================================================= */

function showFinalScreen() {

  stopSpeaking();

  setText("totalXP", state.totalXP);
  setText("totalScore", state.totalScore);

  showScreen("finalScreen");

  setText("progressText", "ALL MISSIONS");

  setTimeout(() => {
    speakFinal();
  }, 350);
}

/* =========================================================
   RESET
   ========================================================= */

function resetProgress() {

  stopSpeaking();

  state = {
    ...defaultState
  };

  saveState();

  renderMissionMap();
  updateTopBar();

  startMission(0);

  showToast(
    "🔄",
    "Progress restarted."
  );
}

/* =========================================================
   EXIT GAME
   ========================================================= */

function exitGame() {

  stopGameTimers();

  stopSpeaking();

  showScreen("missionScreen");

  renderMission();

  setText(
    "progressText",
    `LESSON ${state.currentLesson + 1} / 3`
  );
}

/* =========================================================
   EVENT LISTENERS
   ========================================================= */

function setupEvents() {

  /* HOME */

  $("startMissionBtn")?.addEventListener(
    "click",
    startMissionSequence
  );

  $("howToPlayBtn")?.addEventListener(
    "click",
    openHowToPlay
  );


  /* HOW TO PLAY */

  $("backFromHowBtn")?.addEventListener(
    "click",
    openHome
  );

  $("letsGoBtn")?.addEventListener(
    "click",
    startMissionSequence
  );


  /* MAP */

  $("homeFromMapBtn")?.addEventListener(
    "click",
    openHome
  );

  document
    .querySelectorAll(".mission-card")
    .forEach((card) => {

      card.addEventListener("click", () => {

        const index =
          Number(card.dataset.mission);

        startMission(index);
      });
    });


  /* TOP BAR */

  $("soundBtn")?.addEventListener(
    "click",
    toggleSound
  );

  $("helpBtn")?.addEventListener(
    "click",
    showGeneralGuide
  );


  /* MISSION */

  $("missionMapBtn")?.addEventListener(
    "click",
    openMap
  );

  $("listenBtn")?.addEventListener(
    "click",
    speakLesson
  );

  $("repeatBtn")?.addEventListener(
    "click",
    speakLesson
  );

  $("easyEnglishBtn")?.addEventListener(
    "click",
    openEasyEnglish
  );

  $("roboGuideBtn")?.addEventListener(
    "click",
    askRobo
  );

  $("backMissionBtn")?.addEventListener(
    "click",
    openMap
  );

  $("startGameBtn")?.addEventListener(
    "click",
    nextLessonOrGame
  );


  /* VOICE SPEED */

  document
    .querySelectorAll(".speed-btn")
    .forEach((button) => {

      button.addEventListener("click", () => {

        const speed =
          Number(button.dataset.speed);

        if (!Number.isNaN(speed)) {
          state.voiceRate = speed;
          saveState();
        }

        document
          .querySelectorAll(".speed-btn")
          .forEach((item) => {
            item.classList.remove("active");
          });

        button.classList.add("active");

        showToast(
          "🔊",
          `Voice speed: ${button.textContent}`
        );

        speakLesson();
      });
    });


  /* GAME */

  $("gameGuideBtn")?.addEventListener(
    "click",
    showMissionGuide
  );

  $("exitGameBtn")?.addEventListener(
    "click",
    exitGame
  );

  $("leftBtn")?.addEventListener(
    "click",
    () => movePlayer(-1)
  );

  $("rightBtn")?.addEventListener(
    "click",
    () => movePlayer(1)
  );

  $("jumpBtn")?.addEventListener(
    "click",
    jumpPlayer
  );


  /* QUIZ */

  $("quizEasyBtn")?.addEventListener(
    "click",
    quizEasyExplanation
  );

  $("continueBtn")?.addEventListener(
    "click",
    continueFromQuiz
  );


  /* COMPLETE */

  $("nextMissionBtn")?.addEventListener(
    "click",
    goToNextMission
  );

  $("viewMapBtn")?.addEventListener(
    "click",
    openMap
  );


  /* FINAL */

  $("finalListenBtn")?.addEventListener(
    "click",
    speakFinal
  );

  $("playAgainBtn")?.addEventListener(
    "click",
    resetProgress
  );


  /* MODALS */

  document
    .querySelectorAll(".modal-close")
    .forEach((button) => {

      button.addEventListener("click", () => {

        const modal =
          button.closest(".modal");

        closeModal(modal);
      });
    });


  document
    .querySelectorAll(".modal")
    .forEach((modal) => {

      modal.addEventListener("click", (event) => {

        if (event.target === modal) {
          closeModal(modal);
        }
      });
    });


  /* ESCAPE */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key !== "Escape") return;

      document
        .querySelectorAll(".modal.active")
        .forEach((modal) => {
          closeModal(modal);
        });
    }
  );


  /* KEYBOARD HELP FOR SOLAR GAME */

  document.addEventListener(
    "keydown",
    (event) => {

      if (state.currentMission !== 0) return;
      if (!$("gameArea")?.classList.contains("active")) return;

      if (event.key === "ArrowLeft") {
        movePlayer(-1);
      }

      if (event.key === "ArrowRight") {
        movePlayer(1);
      }

      if (
        event.key === "ArrowUp" ||
        event.key === " "
      ) {
        event.preventDefault();
        jumpPlayer();
      }
    }
  );
}

/* =========================================================
   INIT
   ========================================================= */

function initialize() {

  setupEvents();

  updateTopBar();

  renderMissionMap();

  renderMission();

  setText(
    "progressText",
    "HOME"
  );

  /* Restore selected voice speed */

  document
    .querySelectorAll(".speed-btn")
    .forEach((button) => {

      const speed =
        Number(button.dataset.speed);

      button.classList.toggle(
        "active",
        speed === state.voiceRate
      );
    });

  showScreen("homeScreen");
}

/* =========================================================
   START
   ========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initialize
  );

} else {

  initialize();
}