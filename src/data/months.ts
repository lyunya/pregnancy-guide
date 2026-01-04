export interface MonthData {
  number: number;
  title: string;
  trimester: string;
  weeks: string;
  babyDevelopment: {
    description: string;
    size: string;
    weight: string;
    milestones: string[];
  };
  bodyChanges: {
    description: string;
    symptoms: string[];
  };
  careTips: string[];
  medicalCheckups: {
    description: string;
    items: string[];
  };
  thingsToAvoid: string[];
  partnerSupport: {
    description: string;
    tips: string[];
  };
}

export const monthsData: MonthData[] = [
  {
    number: 1,
    title: "The Beginning",
    trimester: "First Trimester",
    weeks: "Weeks 1-4",
    babyDevelopment: {
      description: "Your baby is just beginning! After fertilization, the embryo implants in the uterine wall and begins rapid cell division.",
      size: "Poppy seed to apple seed",
      weight: "Less than 1 gram",
      milestones: [
        "Fertilization occurs",
        "Embryo implants in uterus",
        "Neural tube begins to form",
        "Heart begins to develop"
      ]
    },
    bodyChanges: {
      description: "You might not even know you're pregnant yet! Some women experience very early symptoms, while others feel completely normal.",
      symptoms: [
        "Missed period",
        "Light spotting (implantation bleeding)",
        "Mild cramping",
        "Breast tenderness",
        "Fatigue",
        "Mild nausea"
      ]
    },
    careTips: [
      "Start taking prenatal vitamins with folic acid",
      "Limit caffeine intake",
      "Get plenty of rest",
      "Avoid alcohol and smoking",
      "Eat a balanced, nutritious diet",
      "Schedule your first prenatal appointment"
    ],
    medicalCheckups: {
      description: "Your first prenatal visit should be scheduled around 8 weeks, but call your doctor once you confirm pregnancy.",
      items: [
        "Confirm pregnancy with blood or urine test",
        "Medical history review",
        "Calculate your due date",
        "Discuss prenatal vitamins and supplements"
      ]
    },
    thingsToAvoid: [
      "Alcohol and tobacco",
      "Raw or undercooked meats",
      "Unpasteurized dairy products",
      "High-mercury fish",
      "Excessive caffeine (limit to 200mg/day)"
    ],
    partnerSupport: {
      description: "This is an exciting and sometimes anxious time. Your support and understanding mean everything right now.",
      tips: [
        "Be present when she takes the pregnancy test",
        "Learn about early pregnancy together",
        "Help research and choose a healthcare provider",
        "Start adjusting lifestyle habits together (less alcohol, healthier eating)",
        "Be patient with mood swings and emotional changes",
        "Celebrate this milestone together, even if keeping it private for now"
      ]
    }
  },
  {
    number: 2,
    title: "Early Growth",
    trimester: "First Trimester",
    weeks: "Weeks 5-8",
    babyDevelopment: {
      description: "Your baby's major organs are beginning to form. The heart starts beating, and tiny buds that will become arms and legs appear.",
      size: "Raspberry to grape",
      weight: "About 1 gram",
      milestones: [
        "Heart begins beating",
        "Arm and leg buds form",
        "Brain develops rapidly",
        "Facial features start forming",
        "Umbilical cord forms"
      ]
    },
    bodyChanges: {
      description: "Pregnancy symptoms often intensify this month as hormone levels rise. Morning sickness may become more noticeable.",
      symptoms: [
        "Morning sickness (nausea/vomiting)",
        "Increased fatigue",
        "Frequent urination",
        "Food aversions or cravings",
        "Mood swings",
        "Bloating"
      ]
    },
    careTips: [
      "Eat small, frequent meals to combat nausea",
      "Stay hydrated",
      "Get adequate sleep",
      "Continue prenatal vitamins",
      "Avoid strong smells that trigger nausea",
      "Light exercise like walking"
    ],
    medicalCheckups: {
      description: "Your first prenatal appointment typically happens during this month.",
      items: [
        "Complete physical examination",
        "Blood tests (blood type, Rh factor, iron levels)",
        "Urine test",
        "STI screening",
        "Discuss genetic testing options"
      ]
    },
    thingsToAvoid: [
      "Hot tubs and saunas",
      "Heavy lifting",
      "Certain medications (check with doctor)",
      "Cat litter (toxoplasmosis risk)",
      "Raw eggs and deli meats"
    ],
    partnerSupport: {
      description: "Morning sickness can be rough. Your patience and practical help make a huge difference during this challenging time.",
      tips: [
        "Keep crackers and ginger ale stocked for morning sickness",
        "Take over cooking if smells trigger nausea",
        "Attend the first prenatal appointment together",
        "Help with household chores when she's exhausted",
        "Be understanding about food aversions and cravings",
        "Offer foot rubs and back massages"
      ]
    }
  },
  {
    number: 3,
    title: "Forming Features",
    trimester: "First Trimester",
    weeks: "Weeks 9-13",
    babyDevelopment: {
      description: "Your baby is now officially a fetus! All major organs are formed, and your baby starts to look more human with distinct features.",
      size: "Lime to peach",
      weight: "About 23 grams",
      milestones: [
        "Fingers and toes are distinct",
        "Baby can make fists",
        "Tooth buds appear",
        "External genitalia developing",
        "Baby can move and stretch"
      ]
    },
    bodyChanges: {
      description: "Nausea may start to improve toward the end of this month. You might notice your waistline beginning to expand.",
      symptoms: [
        "Continued fatigue (may improve)",
        "Skin changes (acne or glow)",
        "Visible veins on breasts",
        "Growing waistline",
        "Possible headaches",
        "Constipation"
      ]
    },
    careTips: [
      "Wear comfortable, loose clothing",
      "Increase fiber intake for constipation",
      "Start thinking about maternity wardrobe",
      "Consider sharing pregnancy news",
      "Stay active with gentle exercise",
      "Practice good posture"
    ],
    medicalCheckups: {
      description: "Important screening tests are typically offered during this time.",
      items: [
        "First trimester screening (nuchal translucency)",
        "NIPT (non-invasive prenatal testing) if desired",
        "Hear baby's heartbeat (Doppler)",
        "Check weight and blood pressure",
        "Discuss CVS if indicated"
      ]
    },
    thingsToAvoid: [
      "Excessive vitamin A",
      "Contact sports",
      "Lying flat on back for long periods",
      "Stress and anxiety",
      "Skipping meals"
    ],
    partnerSupport: {
      description: "As you prepare to share the news with others, be her rock and help manage the excitement together.",
      tips: [
        "Help plan how and when to announce the pregnancy",
        "Attend screening appointments for moral support",
        "Start discussing baby names (just for fun!)",
        "Help her shop for comfortable maternity basics",
        "Listen to baby's heartbeat together—it's magical",
        "Research childbirth and parenting classes together"
      ]
    }
  },
  {
    number: 4,
    title: "The Glow",
    trimester: "Second Trimester",
    weeks: "Weeks 14-17",
    babyDevelopment: {
      description: "Welcome to the second trimester! Your baby is growing quickly and developing unique features like fingerprints.",
      size: "Avocado to turnip",
      weight: "About 100-140 grams",
      milestones: [
        "Fingerprints form",
        "Baby can make facial expressions",
        "Bones harden",
        "Eyes move under eyelids",
        "Hair begins to grow"
      ]
    },
    bodyChanges: {
      description: "Many women feel their best during this trimester! Nausea subsides, energy returns, and the pregnancy glow begins.",
      symptoms: [
        "Increased energy",
        "Pregnancy glow",
        "Baby bump becomes visible",
        "Decreased nausea",
        "Increased appetite",
        "Possible nose bleeds"
      ]
    },
    careTips: [
      "Start sleeping on your side",
      "Continue regular exercise",
      "Eat iron-rich foods",
      "Stay moisturized to prevent stretch marks",
      "Begin thinking about birthing classes",
      "Document your bump with photos"
    ],
    medicalCheckups: {
      description: "Regular monthly check-ups continue with some additional tests.",
      items: [
        "AFP (alpha-fetoprotein) screening",
        "Quad screen test",
        "Amniocentesis if recommended",
        "Regular weight and blood pressure checks",
        "Fundal height measurement begins"
      ]
    },
    thingsToAvoid: [
      "Sleeping on your back",
      "Tight waistbands",
      "Skipping dental check-ups",
      "Overexertion during exercise",
      "Standing for long periods"
    ],
    partnerSupport: {
      description: "Energy is returning! This is a great time to tackle projects together and enjoy this special phase.",
      tips: [
        "Take bump photos to document the journey",
        "Plan a babymoon getaway together",
        "Start discussing nursery ideas and setup",
        "Go on regular date nights while you can",
        "Help apply stretch mark cream (bonding moment!)",
        "Read pregnancy books or apps together"
      ]
    }
  },
  {
    number: 5,
    title: "Movement Begins",
    trimester: "Second Trimester",
    weeks: "Weeks 18-22",
    babyDevelopment: {
      description: "Your baby is very active now! You may start to feel those first fluttering movements called quickening.",
      size: "Bell pepper to banana",
      weight: "About 300-430 grams",
      milestones: [
        "Baby can hear sounds",
        "Vernix covers the skin",
        "Regular sleep-wake cycles begin",
        "Taste buds develop",
        "Gender can be determined"
      ]
    },
    bodyChanges: {
      description: "Your belly is really showing now! You'll likely feel baby's first movements—an exciting milestone.",
      symptoms: [
        "Feeling baby move (quickening)",
        "Round ligament pain",
        "Leg cramps",
        "Mild swelling in feet",
        "Backache",
        "Increased vaginal discharge"
      ]
    },
    careTips: [
      "Talk and sing to your baby",
      "Wear supportive shoes",
      "Elevate feet when possible",
      "Practice pelvic floor exercises",
      "Consider a pregnancy pillow",
      "Stay connected with partner"
    ],
    medicalCheckups: {
      description: "The anatomy scan is the highlight of this month!",
      items: [
        "Anatomy scan (20-week ultrasound)",
        "Check baby's organs and development",
        "Gender reveal (if desired)",
        "Measure amniotic fluid levels",
        "Check placenta location"
      ]
    },
    thingsToAvoid: [
      "Ignoring unusual symptoms",
      "Skipping water intake",
      "High-sodium foods",
      "Unsafe lifting techniques",
      "Comparing yourself to others"
    ],
    partnerSupport: {
      description: "Baby can hear now! Start bonding with your little one and share in the excitement of feeling movement.",
      tips: [
        "Talk and read to the baby—they can hear you!",
        "Be there for the anatomy scan—it's amazing",
        "Feel for baby kicks together",
        "Help with leg cramp relief during the night",
        "Give regular back and foot massages",
        "Start assembling a baby registry together"
      ]
    }
  },
  {
    number: 6,
    title: "Growing Strong",
    trimester: "Second Trimester",
    weeks: "Weeks 23-27",
    babyDevelopment: {
      description: "Your baby is gaining weight and developing more fat. Their movements are stronger and more noticeable.",
      size: "Papaya to cauliflower",
      weight: "About 600-900 grams",
      milestones: [
        "Lungs are developing",
        "Baby responds to sounds",
        "Eyes can open",
        "Footprints and fingerprints complete",
        "Brain is rapidly developing"
      ]
    },
    bodyChanges: {
      description: "Your bump is definitely visible now! You may experience some discomfort as baby grows.",
      symptoms: [
        "Stronger baby movements",
        "Braxton Hicks contractions",
        "Itchy skin as belly stretches",
        "Trouble sleeping",
        "Shortness of breath",
        "Swelling in hands and feet"
      ]
    },
    careTips: [
      "Register for birthing classes",
      "Start creating birth plan",
      "Moisturize belly regularly",
      "Practice relaxation techniques",
      "Consider baby registry",
      "Plan babymoon if desired"
    ],
    medicalCheckups: {
      description: "Glucose screening is typically done during this period.",
      items: [
        "Glucose tolerance test (24-28 weeks)",
        "Rh antibody test if Rh negative",
        "Complete blood count",
        "Check for anemia",
        "Monitor blood pressure closely"
      ]
    },
    thingsToAvoid: [
      "Sugary drinks before glucose test",
      "Ignoring swelling (could indicate preeclampsia)",
      "Skipping kick counts",
      "Stressful situations",
      "Heavy housework"
    ],
    partnerSupport: {
      description: "She may be uncomfortable as baby grows. Help make her as comfortable as possible.",
      tips: [
        "Sign up for childbirth classes together",
        "Help create the birth plan",
        "Take over heavy household tasks",
        "Accompany her to the glucose test",
        "Help research pediatricians",
        "Plan and host the baby shower if appropriate"
      ]
    }
  },
  {
    number: 7,
    title: "Third Trimester Begins",
    trimester: "Third Trimester",
    weeks: "Weeks 28-31",
    babyDevelopment: {
      description: "Welcome to the third trimester! Your baby's brain is developing rapidly and they're practicing breathing movements.",
      size: "Eggplant to coconut",
      weight: "About 1-1.8 kg",
      milestones: [
        "Eyes can track light",
        "Baby practices breathing",
        "Fat layer develops",
        "Brain growing quickly",
        "Baby can dream (REM sleep)"
      ]
    },
    bodyChanges: {
      description: "You're in the home stretch! Discomfort may increase as baby takes up more room.",
      symptoms: [
        "Frequent urination returns",
        "Heartburn and indigestion",
        "Difficulty sleeping",
        "Back pain",
        "Leaking colostrum",
        "Waddling walk"
      ]
    },
    careTips: [
      "Begin preparing nursery",
      "Practice kick counts daily",
      "Attend childbirth classes",
      "Tour birthing facility",
      "Pack hospital bag essentials",
      "Rest whenever possible"
    ],
    medicalCheckups: {
      description: "Appointments become more frequent in the third trimester.",
      items: [
        "Appointments every 2 weeks now",
        "Tdap vaccine (27-36 weeks)",
        "Check baby's position",
        "Monitor weight gain",
        "Discuss signs of preterm labor"
      ]
    },
    thingsToAvoid: [
      "Long car trips without breaks",
      "Heavy exercise",
      "Eating large meals",
      "Ignoring reduced movement",
      "Over-scheduling yourself"
    ],
    partnerSupport: {
      description: "The finish line is in sight! Help prepare for baby's arrival and keep her comfortable.",
      tips: [
        "Set up and organize the nursery together",
        "Attend childbirth classes—learn breathing techniques",
        "Tour the hospital or birthing center together",
        "Start packing the hospital bag",
        "Practice the route to the hospital",
        "Give plenty of reassurance and emotional support"
      ]
    }
  },
  {
    number: 8,
    title: "Getting Ready",
    trimester: "Third Trimester",
    weeks: "Weeks 32-35",
    babyDevelopment: {
      description: "Your baby is gaining about half a pound per week! Most babies settle into a head-down position by now.",
      size: "Pineapple to honeydew",
      weight: "About 1.8-2.5 kg",
      milestones: [
        "Lungs nearly mature",
        "Head-down position (usually)",
        "Nails reach fingertips",
        "Immune system developing",
        "Less room to move"
      ]
    },
    bodyChanges: {
      description: "Your body is preparing for birth. Braxton Hicks may intensify and you might feel more tired.",
      symptoms: [
        "Stronger Braxton Hicks",
        "Pelvic pressure",
        "Difficulty breathing",
        "Trouble finding comfortable position",
        "Nesting instinct kicks in",
        "Swollen feet and ankles"
      ]
    },
    careTips: [
      "Finish hospital bag",
      "Install car seat",
      "Finalize birth plan",
      "Stock up on postpartum supplies",
      "Prepare freezer meals",
      "Rest and conserve energy"
    ],
    medicalCheckups: {
      description: "You'll see your provider weekly or bi-weekly now.",
      items: [
        "Group B strep test (35-37 weeks)",
        "Check cervix for dilation",
        "Confirm baby's position",
        "Discuss labor signs",
        "Review birth preferences"
      ]
    },
    thingsToAvoid: [
      "Traveling far from hospital",
      "Heavy lifting",
      "Ignoring labor signs",
      "Skipping appointments",
      "Stress and anxiety"
    ],
    partnerSupport: {
      description: "Final preparations are underway. Help tackle the to-do list and keep stress levels low.",
      tips: [
        "Install the car seat (get it inspected if needed)",
        "Help prepare freezer meals for after baby arrives",
        "Finish any remaining nursery setup",
        "Review the birth plan together",
        "Know the signs of labor",
        "Keep the car fueled and ready to go"
      ]
    }
  },
  {
    number: 9,
    title: "The Arrival",
    trimester: "Third Trimester",
    weeks: "Weeks 36-40",
    babyDevelopment: {
      description: "Your baby is full-term and ready to meet you! They're putting on final layers of fat and practicing for life outside.",
      size: "Watermelon",
      weight: "About 2.7-4 kg (6-9 lbs)",
      milestones: [
        "Lungs fully mature",
        "Baby 'drops' into pelvis",
        "Fat continues accumulating",
        "All systems ready for birth",
        "Antibodies passed from mother"
      ]
    },
    bodyChanges: {
      description: "You're almost there! Baby may drop lower, making breathing easier but increasing pelvic pressure.",
      symptoms: [
        "Lightning (baby drops)",
        "Increased pelvic pressure",
        "Easier breathing",
        "More frequent contractions",
        "Cervical changes",
        "Nesting urge intensifies"
      ]
    },
    careTips: [
      "Know the signs of labor",
      "Rest as much as possible",
      "Stay hydrated",
      "Keep phone charged",
      "Have support person ready",
      "Practice relaxation techniques"
    ],
    medicalCheckups: {
      description: "Weekly appointments until delivery.",
      items: [
        "Weekly cervical checks",
        "Monitor baby's movement",
        "Non-stress tests if needed",
        "Discuss induction if past due",
        "Final preparations review"
      ]
    },
    thingsToAvoid: [
      "Being far from hospital",
      "Ignoring labor signs",
      "Overexertion",
      "Missing appointments",
      "Panic—you've got this!"
    ],
    partnerSupport: {
      description: "It's almost time! Be ready to spring into action and be her calm, supportive rock during labor.",
      tips: [
        "Keep your phone charged and nearby at all times",
        "Know the signs of labor and when to go to the hospital",
        "Be her advocate during labor and delivery",
        "Stay calm—she needs your steady presence",
        "Capture first moments with baby (if she wants)",
        "Be ready to support breastfeeding and early bonding"
      ]
    }
  }
];
