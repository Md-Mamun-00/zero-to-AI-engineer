var ROADMAP_DATA = {
 "week0": [
  {
   "type": "GITHUB",
   "title": "GitHub + Student Developer Pack",
   "meta": "",
   "desc": "Your portfolio lives here. Verified students also get free partner tools.",
   "url": "https://education.github.com/pack"
  },
  {
   "type": "TOOL",
   "title": "VS Code + the Python extension",
   "meta": "",
   "desc": "The editor most engineers use; this official guide sets it up.",
   "url": "https://code.visualstudio.com/docs/python/python-tutorial"
  },
  {
   "type": "TOOL",
   "title": "uv (Python and packages)",
   "meta": "",
   "desc": "One fast tool to install Python, make environments and add packages.",
   "url": "https://docs.astral.sh/uv/"
  },
  {
   "type": "TOOL",
   "title": "Google Colab",
   "meta": "",
   "desc": "Notebooks in your browser, with free GPUs when available.",
   "url": "https://colab.research.google.com/"
  },
  {
   "type": "TOOL",
   "title": "Kaggle account",
   "meta": "",
   "desc": "Datasets, courses, and a weekly free GPU quota.",
   "url": "https://www.kaggle.com/docs/efficient-gpu-usage"
  },
  {
   "type": "TOOL",
   "title": "Hugging Face account",
   "meta": "",
   "desc": "Models and datasets, free static Spaces, small monthly credits.",
   "url": "https://huggingface.co/docs/inference-providers/pricing"
  },
  {
   "type": "TOOL",
   "title": "Gemini API key (free tier)",
   "meta": "",
   "desc": "Free Flash models - the best zero-cost default.",
   "url": "https://ai.google.dev/gemini-api/docs/pricing"
  },
  {
   "type": "TOOL",
   "title": "Groq API key (free plan)",
   "meta": "",
   "desc": "Fast open models; e.g. 1,000 free requests a day.",
   "url": "https://console.groq.com/docs/rate-limits"
  },
  {
   "type": "TOOL",
   "title": "OpenRouter free models",
   "meta": "",
   "desc": "One API, many \":free\" models - 50 requests a day to start.",
   "url": "https://openrouter.ai/docs/api_reference/limits"
  },
  {
   "type": "TOOL",
   "title": "Ollama",
   "meta": "",
   "desc": "Run open models on your own laptop, free and offline.",
   "url": "https://ollama.com/pricing"
  }
 ],
 "phases": [
  {
   "id": 1,
   "name": "Programming foundations",
   "weeksLabel": "Weeks 1-4",
   "color": "#1cb0f6",
   "pitfall": {
    "title": "Tutorial hell",
    "body": "Finishing a 12-hour video and building nothing. Cap tutorials at half your week; the other half is your own code, with the video closed."
   },
   "weeks": [
    {
     "n": 1,
     "title": "Python basics",
     "topics": [
      "Install Python and VS Code, or open Google Colab",
      "Variables, numbers, strings, input and output",
      "if / else, for and while loops",
      "Lists, tuples, dictionaries and sets",
      "Functions, arguments and return values",
      "Read error messages instead of fearing them"
     ],
     "ship": "A command-line quiz or unit converter, pushed to GitHub with a README.",
     "steps": [
      {
       "id": "s1_0_0",
       "type": "COURSE",
       "title": "CS50's Introduction to Programming with Python",
       "meta": "Harvard · 10 weeks · free certificate",
       "desc": "Harvard's Python course with auto-graded problem sets.",
       "url": "https://cs50.harvard.edu/python/",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s1_0_1",
       "type": "PRACTICE",
       "title": "Exercism: Python track",
       "meta": "Exercism · 146 exercises",
       "desc": "Free exercises, with optional human mentoring.",
       "url": "https://exercism.org/tracks/python",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s1_0_2",
       "type": "VIDEO",
       "title": "Python full course (one shot)",
       "meta": "Apna College · 10 h 24 min · Hindi",
       "desc": "Variables to OOP in one video, with practice questions.",
       "url": "https://www.youtube.com/watch?v=ERCMXc8x7mc",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s1_0_3",
       "type": "VIDEO",
       "title": "Git and GitHub Crash Course 2026",
       "meta": "freeCodeCamp · 1 h 21 min",
       "desc": "",
       "url": "https://www.youtube.com/watch?v=mAFoROnOfHs",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_0_4",
       "type": "TOOL",
       "title": "Install WSL",
       "meta": "Microsoft Learn",
       "desc": "",
       "url": "https://learn.microsoft.com/en-us/windows/wsl/install",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_0_5",
       "type": "DOCS",
       "title": "Concurrency and async / await",
       "meta": "FastAPI docs",
       "desc": "",
       "url": "https://fastapi.tiangolo.com/async/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p1_w1",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 2,
     "title": "Python for real work",
     "topics": [
      "Files, JSON and CSV",
      "try / except and your own error types",
      "Modules, packages, pip and uv environments",
      "Classes, objects and dataclasses",
      "Comprehensions, f-strings and type hints",
      "Small tests with pytest"
     ],
     "ship": "An expense tracker CLI that saves to JSON, with tests.",
     "steps": [
      {
       "id": "s1_1_0",
       "type": "PLAYLIST",
       "title": "100 Days of Code: Python",
       "meta": "CodeWithHarry · 100 videos · Hindi",
       "desc": "India's most-followed day-by-day Python course.",
       "url": "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s1_1_1",
       "type": "FREE BOOK",
       "title": "Think Python, 3rd ed.",
       "meta": "Allen B. Downey · 19 notebook chapters",
       "desc": "Free 3rd edition; every chapter runs in Colab.",
       "url": "https://allendowney.github.io/ThinkPython/",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s1_1_2",
       "type": "VIDEO",
       "title": "uv: the modern way to manage Python",
       "meta": "Chai aur Code · 22 min · Hindi",
       "desc": "A quick Hindi walkthrough of uv environments.",
       "url": "https://www.youtube.com/watch?v=8mk85fyzevc",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s1_1_3",
       "type": "VIDEO",
       "title": "Command line basics",
       "meta": "freeCodeCamp · 45 min",
       "desc": "",
       "url": "https://www.youtube.com/watch?v=mABpAI-pCw0",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_1_4",
       "type": "COURSE",
       "title": "Kaggle Learn: Intro to SQL",
       "meta": "Kaggle · 6 lessons",
       "desc": "",
       "url": "https://www.kaggle.com/learn/intro-to-sql",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_1_5",
       "type": "PLAYLIST",
       "title": "FastAPI tutorials",
       "meta": "Corey Schafer · 19 videos",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PL-osiE80TeTsak-c-QsVeg0YYG_0TeyXI",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p1_w2",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 3,
     "title": "Git, terminal and SQL",
     "topics": [
      "Terminal: navigate, pipes, environment variables",
      "Git: commit, branch, merge, fix conflicts",
      "GitHub: pull requests, issues, .gitignore",
      "SQL: SELECT, WHERE, GROUP BY, JOIN",
      "SQLite from Python, Postgres basics"
     ],
     "ship": "A SQL analysis of a real dataset, merged through a pull request.",
     "steps": [
      {
       "id": "s1_2_0",
       "type": "FREE BOOK",
       "title": "Automate the Boring Stuff with Python, 3rd ed.",
       "meta": "Al Sweigart · free to read · 2025",
       "desc": "Beginner projects that automate real, everyday tasks.",
       "url": "https://automatetheboringstuff.com/3e/",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s1_2_1",
       "type": "COURSE",
       "title": "The Missing Semester of Your CS Education",
       "meta": "MIT · 2026 edition · 9 lectures",
       "desc": "Shell, Git, editors, packaging - and agentic coding.",
       "url": "https://missing.csail.mit.edu/2026/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_2_2",
       "type": "FREE BOOK",
       "title": "Pro Git",
       "meta": "Scott Chacon, Ben Straub · free book",
       "desc": "The official Git book; chapters 1-3 are all you need.",
       "url": "https://git-scm.com/book/en/v2",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_2_3",
       "type": "PRACTICE",
       "title": "Learn Git Branching",
       "meta": "open source · in-browser puzzles",
       "desc": "Visual puzzles that make branches and merges click.",
       "url": "https://learngitbranching.js.org/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_2_4",
       "type": "COURSE",
       "title": "GitHub Skills: Introduction to GitHub",
       "meta": "GitHub · under 1 hour",
       "desc": "Branch, commit and merge a pull request in a real repo.",
       "url": "https://github.com/skills/introduction-to-github",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_2_5",
       "type": "COURSE",
       "title": "CS50's Introduction to Databases with SQL",
       "meta": "Harvard · 7 weeks",
       "desc": "SQLite to Postgres, and SQL from Python.",
       "url": "https://cs50.harvard.edu/sql/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_2_6",
       "type": "PRACTICE",
       "title": "SQLBolt",
       "meta": "interactive · 18 lessons",
       "desc": "The fastest hands-on SQL basics, right in the browser.",
       "url": "https://sqlbolt.com/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_2_7",
       "type": "FREE BOOK",
       "title": "The Linux Command Line",
       "meta": "William Shotts · free PDF",
       "desc": "",
       "url": "https://linuxcommand.org/tlcl.php",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_2_8",
       "type": "DOCS",
       "title": "sqlite3 module (with tutorial)",
       "meta": "python.org",
       "desc": "",
       "url": "https://docs.python.org/3/library/sqlite3.html",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_2_9",
       "type": "GITHUB",
       "title": "public-apis: free APIs to practise on",
       "meta": "community",
       "desc": "",
       "url": "https://github.com/public-apis/public-apis",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p1_w3",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 4,
     "title": "APIs and a tiny backend",
     "topics": [
      "HTTP methods, status codes and headers",
      "Call REST APIs with requests or httpx",
      "Keep API keys in a .env file, never in code",
      "async / await basics",
      "FastAPI routes, Pydantic models, /docs"
     ],
     "ship": "A FastAPI service that wraps a public API, with two endpoints and tests.",
     "steps": [
      {
       "id": "s1_3_0",
       "type": "DOCS",
       "title": "The Python Tutorial",
       "meta": "python.org · Python 3.14 docs",
       "desc": "The authoritative read: data structures, errors, modules.",
       "url": "https://docs.python.org/3/tutorial/",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s1_3_1",
       "type": "COURSE",
       "title": "Python Programming MOOC 2026",
       "meta": "Univ. of Helsinki · 14 parts",
       "desc": "Exercise-heavy university course; parts 1-7 match this phase.",
       "url": "https://programming-26.mooc.fi/",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s1_3_2",
       "type": "COURSE",
       "title": "Kaggle Learn: Python",
       "meta": "Kaggle · 7 lessons · ~5 h",
       "desc": "Short notebook lessons with auto-checked exercises.",
       "url": "https://www.kaggle.com/learn/python",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s1_3_3",
       "type": "ARTICLE",
       "title": "An overview of HTTP",
       "meta": "MDN Web Docs",
       "desc": "Requests, responses, methods, headers, status codes.",
       "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_3_4",
       "type": "DOCS",
       "title": "FastAPI tutorial: user guide",
       "meta": "FastAPI",
       "desc": "First steps, parameters and request bodies are enough.",
       "url": "https://fastapi.tiangolo.com/tutorial/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_3_5",
       "type": "DOCS",
       "title": "Requests quickstart",
       "meta": "requests docs",
       "desc": "GET and POST, params, JSON, headers and timeouts.",
       "url": "https://requests.readthedocs.io/en/latest/user/quickstart/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_3_6",
       "type": "VIDEO",
       "title": "AsyncIO: the complete guide",
       "meta": "Corey Schafer · 1 h 42 min · 2025",
       "desc": "An animated, in-depth guide to async Python.",
       "url": "https://www.youtube.com/watch?v=oAkLSJNr5zY",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_3_7",
       "type": "PRACTICE",
       "title": "OverTheWire: Bandit",
       "meta": "OverTheWire · shell wargame",
       "desc": "",
       "url": "https://overthewire.org/wargames/bandit/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_3_8",
       "type": "DOCS",
       "title": "HTTPX (sync + async client)",
       "meta": "Encode",
       "desc": "",
       "url": "https://www.python-httpx.org/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s1_3_9",
       "type": "VIDEO",
       "title": "HTTP crash course",
       "meta": "Chai aur Code · 24 min · Hindi",
       "desc": "",
       "url": "https://www.youtube.com/watch?v=qgZiUvV41TI",
       "lang": "hi",
       "stream": "supplementary"
      },
      {
       "id": "practice_p1_w4",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    }
   ]
  },
  {
   "id": 2,
   "name": "Data and math for ML",
   "weeksLabel": "Weeks 5-6",
   "color": "#ce82ff",
   "pitfall": {
    "title": "Math paralysis",
    "body": "Trying to finish a full linear-algebra course before touching ML. Learn the intuition now and go deeper only when a concept blocks you."
   },
   "weeks": [
    {
     "n": 5,
     "title": "NumPy, pandas and plots",
     "topics": [
      "NumPy arrays, shapes, broadcasting",
      "pandas: load, filter, group, merge, pivot",
      "Missing values, dtypes, duplicates",
      "Charts that answer one question each",
      "Notebook workflow in Jupyter or Colab"
     ],
     "ship": "An EDA notebook on a real dataset: 5 charts, 5 written findings.",
     "steps": [
      {
       "id": "s2_0_0",
       "type": "COURSE",
       "title": "Kaggle Learn: Pandas",
       "meta": "Kaggle Learn · 6 lessons · ~4 h",
       "desc": "In-browser exercises: select, group, sort, fix missing values.",
       "url": "https://www.kaggle.com/learn/pandas",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s2_0_1",
       "type": "PLAYLIST",
       "title": "Essence of Linear Algebra",
       "meta": "3Blue1Brown · 16 videos · ~3 h",
       "desc": "Vectors and matrices as pictures. Unbeatable intuition.",
       "url": "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s2_0_2",
       "type": "PLAYLIST",
       "title": "StatQuest: Statistics Fundamentals",
       "meta": "StatQuest with Josh Starmer · 62 videos",
       "desc": "Distributions, variance, p-values, explained simply.",
       "url": "https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s2_0_3",
       "type": "COURSE",
       "title": "Kaggle Learn: Data Visualization",
       "meta": "Kaggle Learn (Alexis Cook) · 8 lessons · ~4 h",
       "desc": "Seaborn charts with instant, graded exercises.",
       "url": "https://www.kaggle.com/learn/data-visualization",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s2_0_4",
       "type": "COURSE",
       "title": "Kaggle Learn: Data Cleaning",
       "meta": "Kaggle Learn · ~4 h",
       "desc": "Practical fixes for messy, real-world data.",
       "url": "https://www.kaggle.com/learn/data-cleaning",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s2_0_5",
       "type": "FREE BOOK",
       "title": "Mathematics for Machine Learning",
       "meta": "Deisenroth, Faisal, Ong · free PDF · 12 chapters",
       "desc": "The math reference; read chapters as you need them.",
       "url": "https://mml-book.github.io/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s2_0_6",
       "type": "VIDEO",
       "title": "Chai aur NumPy: complete course",
       "meta": "Chai aur Code · 2 h 24 min · 2025 · Hindi",
       "desc": "A recent one-sitting NumPy course in Hindi.",
       "url": "https://www.youtube.com/watch?v=x7ULDYs4X84",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s2_0_7",
       "type": "PLAYLIST",
       "title": "Pandas",
       "meta": "CampusX · 21 videos · ~3 h · Hindi",
       "desc": "Bite-size pandas lessons: filter, group, clean.",
       "url": "https://www.youtube.com/playlist?list=PLKnIA16_RmvbR85fgbfVRKOiMokUKVupy",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s2_0_8",
       "type": "COURSE",
       "title": "Khan Academy: Linear Algebra",
       "meta": "Khan Academy · 3 units",
       "desc": "",
       "url": "https://www.khanacademy.org/math/linear-algebra",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s2_0_9",
       "type": "WEBSITE",
       "title": "Seeing Theory",
       "meta": "Brown University · 6 chapters",
       "desc": "",
       "url": "https://seeing-theory.brown.edu/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s2_0_10",
       "type": "DOCS",
       "title": "10 minutes to pandas",
       "meta": "pandas docs",
       "desc": "",
       "url": "https://pandas.pydata.org/docs/user_guide/10min.html",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p2_w5",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 6,
     "title": "The math you actually need",
     "topics": [
      "Vectors, dot products, matrix multiplication",
      "Derivatives, the chain rule, gradients",
      "Gradient descent, by hand and in code",
      "Probability, conditional probability, Bayes",
      "Distributions, mean, variance, sampling"
     ],
     "ship": "Gradient descent from scratch in NumPy fitting a line, with a loss plot.",
     "steps": [
      {
       "id": "s2_1_0",
       "type": "DOCS",
       "title": "NumPy: the absolute basics",
       "meta": "NumPy docs",
       "desc": "The official first read: arrays, shapes, broadcasting.",
       "url": "https://numpy.org/doc/stable/user/absolute_beginners.html",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s2_1_1",
       "type": "PLAYLIST",
       "title": "Essence of Calculus",
       "meta": "3Blue1Brown · 12 videos · ~3 h",
       "desc": "Derivatives and the chain rule, built visually.",
       "url": "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s2_1_2",
       "type": "COURSE",
       "title": "Khan Academy: Statistics and Probability",
       "meta": "Khan Academy · 16 units",
       "desc": "Practice-heavy probability and sampling, with answers.",
       "url": "https://www.khanacademy.org/math/statistics-probability",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s2_1_3",
       "type": "COURSE",
       "title": "Mathematics for ML and Data Science",
       "meta": "DeepLearning.AI · 3 courses · audit free",
       "desc": "Gentle, visual math; all videos free with a login.",
       "url": "https://www.deeplearning.ai/specializations/mathematics-for-machine-learning-and-data-science",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s2_1_4",
       "type": "FREE BOOK",
       "title": "Python for Data Analysis, 3rd ed.",
       "meta": "Wes McKinney · open-access web book",
       "desc": "By the creator of pandas; the data-cleaning reference.",
       "url": "https://wesmckinney.com/book/",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s2_1_5",
       "type": "FREE BOOK",
       "title": "Python Data Science Handbook",
       "meta": "Jake VanderPlas · full text online",
       "desc": "Clear NumPy, pandas and Matplotlib chapters.",
       "url": "https://jakevdp.github.io/PythonDataScienceHandbook/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s2_1_6",
       "type": "PLAYLIST",
       "title": "Maths for Machine Learning",
       "meta": "CampusX · 23 long sessions · Hindi",
       "desc": "Stats, vectors, matrices and calculus in Hindi.",
       "url": "https://www.youtube.com/playlist?list=PLKnIA16_RmvbYFaaeLY28cWeqV-3vADST",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s2_1_7",
       "type": "PLAYLIST",
       "title": "Stats for Data Science",
       "meta": "Krish Naik Hindi · 27 videos · ~7 h · Hindi",
       "desc": "A shorter statistics series for quick revision.",
       "url": "https://www.youtube.com/playlist?list=PLTDARY42LDV6YHSRo669_uDDGmUEmQnDJ",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s2_1_8",
       "type": "COURSE",
       "title": "Khan Academy: Multivariable derivatives",
       "meta": "Khan Academy · gradients",
       "desc": "",
       "url": "https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s2_1_9",
       "type": "PLAYLIST",
       "title": "Corey Schafer: pandas tutorials",
       "meta": "Corey Schafer · 11 videos",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s2_1_10",
       "type": "FREE BOOK",
       "title": "Think Stats, 3rd ed.",
       "meta": "Allen B. Downey · free online",
       "desc": "",
       "url": "https://allendowney.github.io/ThinkStats/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p2_w6",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    }
   ]
  },
  {
   "id": 3,
   "name": "Classical machine learning",
   "weeksLabel": "Weeks 7-9",
   "color": "#ce82ff",
   "pitfall": {
    "title": "The wrong metric",
    "body": "Chasing 99% accuracy on imbalanced data. Accuracy lies there - read precision, recall and the confusion matrix instead."
   },
   "weeks": [
    {
     "n": 7,
     "title": "How machines learn",
     "topics": [
      "Supervised vs unsupervised learning",
      "Train, validation and test splits",
      "Linear and logistic regression",
      "Loss functions and overfitting",
      "Accuracy, precision, recall, F1, ROC-AUC",
      "scikit-learn: fit, predict, score"
     ],
     "ship": "A price or marks predictor with a clean split and a metrics table.",
     "steps": [
      {
       "id": "s3_0_0",
       "type": "COURSE",
       "title": "Google Machine Learning Crash Course",
       "meta": "Google · 12 modules · 2024 refresh",
       "desc": "Do modules 1-6 now: regression, metrics, overfitting.",
       "url": "https://developers.google.com/machine-learning/crash-course",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s3_0_1",
       "type": "PLAYLIST",
       "title": "StatQuest: Machine Learning",
       "meta": "StatQuest with Josh Starmer · 106 videos",
       "desc": "The clearest intuition for trees, boosting, ROC and PCA.",
       "url": "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s3_0_2",
       "type": "FREE BOOK",
       "title": "Introduction to Statistical Learning (Python)",
       "meta": "James, Witten, Hastie et al. · free PDF · 607 pages",
       "desc": "The gold-standard ML textbook, with Python labs.",
       "url": "https://hastie.su.domains/ISLP/ISLP_website.pdf.download.html",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s3_0_3",
       "type": "PLAYLIST",
       "title": "Statistical Learning: the ISL lectures",
       "meta": "Stanford Online · 104 videos",
       "desc": "The authors teach each chapter; skip the .R lab videos.",
       "url": "https://www.youtube.com/playlist?list=PLoROMvodv4rOzrYsAxzQyHb8n_RWNuS1e",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s3_0_4",
       "type": "COURSE",
       "title": "NPTEL: Introduction to Machine Learning",
       "meta": "IIT Madras · 12 weeks",
       "desc": "A rigorous IIT course; pay only if you want the certificate.",
       "url": "https://nptel.ac.in/courses/106106139",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s3_0_5",
       "type": "PLAYLIST",
       "title": "Andrew Ng ML Specialization, Course 1",
       "meta": "DeepLearning.AI · 41 videos · ~5 h",
       "desc": "No-login videos: regression, gradient descent, overfitting.",
       "url": "https://www.youtube.com/playlist?list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s3_0_6",
       "type": "COURSE",
       "title": "Kaggle Learn: Intermediate ML",
       "meta": "Kaggle Learn (Alexis Cook) · 7 lessons · ~4 h",
       "desc": "Pipelines, encoding, cross-validation, XGBoost, leakage.",
       "url": "https://www.kaggle.com/learn/intermediate-machine-learning",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s3_0_7",
       "type": "PLAYLIST",
       "title": "100 Days of Machine Learning",
       "meta": "CampusX · 134 videos · Hindi",
       "desc": "The best Hindi ML series: EDA to trees and pipelines.",
       "url": "https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s3_0_8",
       "type": "WEBSITE",
       "title": "MLU-Explain",
       "meta": "Amazon ML University · 14 visual essays",
       "desc": "",
       "url": "https://mlu-explain.github.io/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s3_0_9",
       "type": "COURSE",
       "title": "ML Zoomcamp",
       "meta": "DataTalksClub · 4 months",
       "desc": "",
       "url": "https://github.com/DataTalksClub/machine-learning-zoomcamp",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p3_w7",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 8,
     "title": "Trees, ensembles, clustering",
     "topics": [
      "Decision trees and random forests",
      "Gradient boosting: XGBoost, LightGBM",
      "Cross-validation and hyperparameter search",
      "k-means clustering and PCA",
      "Feature engineering and scaling"
     ],
     "ship": "A Kaggle submission with a notebook that explains every step.",
     "steps": [
      {
       "id": "s3_1_0",
       "type": "COURSE",
       "title": "Kaggle Learn: Intro to Machine Learning",
       "meta": "Kaggle Learn · 7 lessons · ~3 h",
       "desc": "Your first models and your first competition entry.",
       "url": "https://www.kaggle.com/learn/intro-to-machine-learning",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s3_1_1",
       "type": "COURSE",
       "title": "Machine Learning Specialization (Andrew Ng)",
       "meta": "DeepLearning.AI + Stanford · 3 courses · audit free",
       "desc": "The classic. Every video free with a login; labs need Pro.",
       "url": "https://www.deeplearning.ai/specializations/machine-learning",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s3_1_2",
       "type": "COURSE",
       "title": "Kaggle Learn: Feature Engineering",
       "meta": "Kaggle Learn · 6 lessons · ~5 h",
       "desc": "Mutual information, PCA and target encoding.",
       "url": "https://www.kaggle.com/learn/feature-engineering",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s3_1_3",
       "type": "PLAYLIST",
       "title": "Machine Learning",
       "meta": "Krish Naik Hindi · 38 videos · ~13 h · Hindi",
       "desc": "Algorithm walkthroughs; lighter than CampusX.",
       "url": "https://www.youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s3_1_4",
       "type": "DOCS",
       "title": "scikit-learn User Guide",
       "meta": "scikit-learn",
       "desc": "",
       "url": "https://scikit-learn.org/stable/user_guide.html",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s3_1_5",
       "type": "GITHUB",
       "title": "ML for Beginners",
       "meta": "Microsoft · 26 lessons",
       "desc": "",
       "url": "https://github.com/microsoft/ML-For-Beginners",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p3_w8",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 9,
     "title": "An end-to-end ML project",
     "topics": [
      "scikit-learn Pipeline and ColumnTransformer",
      "Imbalanced classes and the right metric",
      "Compare models, then study the errors",
      "Save and load models with joblib",
      "A small Streamlit or Gradio front end"
     ],
     "ship": "A churn or fraud predictor with a public demo link.",
     "steps": [
      {
       "id": "s3_2_0",
       "type": "PRACTICE",
       "title": "Kaggle: Titanic competition",
       "meta": "Kaggle",
       "desc": "The classic first classification problem.",
       "url": "https://www.kaggle.com/competitions/titanic",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s3_2_1",
       "type": "PRACTICE",
       "title": "Kaggle: House Prices competition",
       "meta": "Kaggle",
       "desc": "Regression practice: features, pipelines, boosting.",
       "url": "https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques",
       "lang": "en",
       "stream": "practice"
      },
      {
       "id": "s3_2_2",
       "type": "COURSE",
       "title": "scikit-learn MOOC",
       "meta": "Inria · ~36 h",
       "desc": "",
       "url": "https://inria.github.io/scikit-learn-mooc/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s3_2_3",
       "type": "PLAYLIST",
       "title": "Stanford CS229 (Spring 2026)",
       "meta": "Stanford Online · 17 lectures",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLaqpC4kq8Gpw",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p3_w9",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    }
   ]
  },
  {
   "id": 4,
   "name": "Deep learning",
   "weeksLabel": "Weeks 10-12",
   "color": "#ff4b4b",
   "pitfall": {
    "title": "Copy-paste learning",
    "body": "Running notebooks you could not rewrite. Once a week, close the tutorial and rebuild the training loop from memory."
   },
   "weeks": [
    {
     "n": 10,
     "title": "Neural nets from scratch",
     "topics": [
      "Neurons, layers, activation functions",
      "Forward pass and the loss",
      "Backpropagation is the chain rule",
      "Build a tiny autograd engine",
      "Learning rate, batches, epochs"
     ],
     "ship": "Your own micrograd-style engine training a small MLP.",
     "steps": [
      {
       "id": "s4_0_0",
       "type": "PLAYLIST",
       "title": "Neural Networks: Zero to Hero",
       "meta": "Andrej Karpathy · 10 videos · ~19 h",
       "desc": "Build micrograd up to GPT-2 in code. The spine of this phase.",
       "url": "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s4_0_1",
       "type": "PLAYLIST",
       "title": "Neural Networks",
       "meta": "3Blue1Brown · chapters 1-4",
       "desc": "The visual intuition for neurons, gradients and backprop.",
       "url": "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s4_0_2",
       "type": "VIDEO",
       "title": "Building micrograd",
       "meta": "Andrej Karpathy · 2 h 25 min",
       "desc": "Write an autograd engine; backprop stops being magic.",
       "url": "https://www.youtube.com/watch?v=VMj-3S1tku0",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_0_3",
       "type": "COURSE",
       "title": "MIT 6.S191: Intro to Deep Learning",
       "meta": "MIT · 2026 · 9 lectures + labs",
       "desc": "A fast, current bootcamp with Colab labs.",
       "url": "https://introtodeeplearning.com/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_0_4",
       "type": "COURSE",
       "title": "Practical Deep Learning for Coders",
       "meta": "fast.ai (Jeremy Howard) · 9 lessons",
       "desc": "Train and deploy a real model by lesson 2.",
       "url": "https://course.fast.ai/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_0_5",
       "type": "FREE BOOK",
       "title": "Dive into Deep Learning",
       "meta": "Zhang, Lipton, Li, Smola · runnable online book",
       "desc": "Math, figures and PyTorch code for every idea.",
       "url": "https://d2l.ai/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_0_6",
       "type": "FREE BOOK",
       "title": "Learn PyTorch for Deep Learning",
       "meta": "Daniel Bourke · online book",
       "desc": "Exercise-heavy PyTorch, friendly for beginners.",
       "url": "https://www.learnpytorch.io/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_0_7",
       "type": "PLAYLIST",
       "title": "100 Days of Deep Learning",
       "meta": "CampusX · 84 videos · ~52 h · Hindi",
       "desc": "The best Hindi DL course, up to transformers.",
       "url": "https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s4_0_8",
       "type": "VIDEO",
       "title": "PyTorch full course",
       "meta": "freeCodeCamp · 25 h 37 min",
       "desc": "",
       "url": "https://www.youtube.com/watch?v=V_xro1bcAuA",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_0_9",
       "type": "PLAYLIST",
       "title": "Stanford CS231n (2025)",
       "meta": "Stanford Online · lectures 4-8",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_0_10",
       "type": "FREE BOOK",
       "title": "Deep Learning (the book)",
       "meta": "Goodfellow et al. · free online",
       "desc": "",
       "url": "https://www.deeplearningbook.org/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p4_w10",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 11,
     "title": "PyTorch fundamentals",
     "topics": [
      "Tensors, shapes and devices",
      "autograd and optimisers",
      "nn.Module, Dataset, DataLoader",
      "Training and validation loops, checkpoints",
      "Dropout, weight decay, early stopping",
      "Free GPUs on Colab and Kaggle"
     ],
     "ship": "A Fashion-MNIST classifier with training curves and 90%+ test accuracy.",
     "steps": [
      {
       "id": "s4_1_0",
       "type": "DOCS",
       "title": "PyTorch: Learn the Basics",
       "meta": "PyTorch · 9 short pages · Colab",
       "desc": "The official, runnable training-loop pattern in one sitting.",
       "url": "https://docs.pytorch.org/tutorials/beginner/basics/intro.html",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s4_1_1",
       "type": "FREE BOOK",
       "title": "Understanding Deep Learning",
       "meta": "Simon J.D. Prince · free PDF · 68 notebooks",
       "desc": "The clearest modern DL textbook, with notebooks.",
       "url": "https://udlbook.github.io/udlbook/",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s4_1_2",
       "type": "ARTICLE",
       "title": "A Recipe for Training Neural Networks",
       "meta": "Andrej Karpathy · blog post (Apr 2019)",
       "desc": "The habits that make training actually work.",
       "url": "http://karpathy.github.io/2019/04/25/recipe/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_1_3",
       "type": "PLAYLIST",
       "title": "Practical Deep Learning using PyTorch",
       "meta": "CampusX · 14 videos · ~11 h · Hindi",
       "desc": "The PyTorch half that 100 Days of DL skips.",
       "url": "https://www.youtube.com/playlist?list=PLKnIA16_Rmvboy8bmDCjwNHgTaYH2puK7",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s4_1_4",
       "type": "PLAYLIST",
       "title": "StatQuest: Neural Networks",
       "meta": "StatQuest · 33 videos",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_1_5",
       "type": "ARTICLE",
       "title": "CS231n course notes",
       "meta": "Stanford",
       "desc": "",
       "url": "https://cs231n.github.io/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_1_6",
       "type": "TOOL",
       "title": "Google Colab",
       "meta": "Google",
       "desc": "",
       "url": "https://colab.research.google.com/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p4_w11",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 12,
     "title": "CNNs, transfer learning, embeddings",
     "topics": [
      "Convolutions and pooling",
      "Transfer learning from pretrained models",
      "Data augmentation",
      "Embeddings: things as vectors",
      "Why sequence models led to attention"
     ],
     "ship": "A classifier for your own photos, published as a free public Gradio demo.",
     "steps": [
      {
       "id": "s4_2_0",
       "type": "PLAYLIST",
       "title": "Deep Learning Specialization, Course 1",
       "meta": "DeepLearning.AI · 43 videos",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_2_1",
       "type": "FREE BOOK",
       "title": "Neural Networks and Deep Learning",
       "meta": "Michael Nielsen · free online",
       "desc": "",
       "url": "http://neuralnetworksanddeeplearning.com/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s4_2_2",
       "type": "TOOL",
       "title": "Kaggle: free GPU notebooks",
       "meta": "Kaggle · weekly GPU quota",
       "desc": "",
       "url": "https://www.kaggle.com/docs/efficient-gpu-usage",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p4_w12",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    }
   ]
  },
  {
   "id": 5,
   "name": "Transformers and LLMs",
   "weeksLabel": "Weeks 13-14",
   "color": "#ff4b4b",
   "pitfall": {
    "title": "The wrong goal",
    "body": "Believing AI engineers pretrain models. Understand the internals, then move on - your job is building with models."
   },
   "weeks": [
    {
     "n": 13,
     "title": "Attention and transformers",
     "topics": [
      "Tokenization and byte-pair encoding",
      "Token and position embeddings",
      "Self-attention and multi-head attention",
      "The transformer block: residuals, layer norm",
      "Decoder-only (GPT) vs encoder (BERT)"
     ],
     "ship": "A small character-level GPT trained on text you choose, with samples.",
     "steps": [
      {
       "id": "s5_0_0",
       "type": "VIDEO",
       "title": "Let's build GPT: from scratch, in code",
       "meta": "Andrej Karpathy · 1 h 56 min",
       "desc": "Code a working GPT from an empty file. The week-13 core.",
       "url": "https://www.youtube.com/watch?v=kCc8FmEb1nY",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s5_0_1",
       "type": "ARTICLE",
       "title": "The Illustrated Transformer",
       "meta": "Jay Alammar · illustrated post",
       "desc": "The standard visual walkthrough of the transformer.",
       "url": "https://jalammar.github.io/illustrated-transformer/",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s5_0_2",
       "type": "VIDEO",
       "title": "Let's build the GPT Tokenizer",
       "meta": "Andrej Karpathy · 2 h 13 min",
       "desc": "Byte-pair encoding, and why tokens break LLMs.",
       "url": "https://www.youtube.com/watch?v=zduSFxRajkE",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_0_3",
       "type": "TOOL",
       "title": "Transformer Explainer",
       "meta": "Georgia Tech Polo Club · interactive",
       "desc": "Watch GPT-2 compute attention live in your browser.",
       "url": "https://poloclub.github.io/transformer-explainer/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_0_4",
       "type": "GITHUB",
       "title": "LLMs-from-scratch (code)",
       "meta": "Sebastian Raschka · 7 chapters + bonus",
       "desc": "Tested notebooks to build and tune a GPT.",
       "url": "https://github.com/rasbt/LLMs-from-scratch",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_0_5",
       "type": "FREE BOOK",
       "title": "The RLHF Book",
       "meta": "Nathan Lambert · free online",
       "desc": "Post-training and preference tuning, explained properly.",
       "url": "https://rlhfbook.com/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_0_6",
       "type": "VIDEO",
       "title": "Introduction to Transformers",
       "meta": "CampusX · 1 h · part 1 of 14 · Hindi",
       "desc": "The entry point to a 14-video transformer arc.",
       "url": "https://www.youtube.com/watch?v=BjRVS2wTtcA",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s5_0_7",
       "type": "TOOL",
       "title": "LLM Visualization (3D)",
       "meta": "Brendan Bycroft · 3D walkthrough",
       "desc": "",
       "url": "https://bbycroft.net/llm",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_0_8",
       "type": "TOOL",
       "title": "Tiktokenizer playground",
       "meta": "see tokens live",
       "desc": "",
       "url": "https://tiktokenizer.vercel.app/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_0_9",
       "type": "ARTICLE",
       "title": "microgpt: a GPT in 200 lines",
       "meta": "Andrej Karpathy · 2026",
       "desc": "",
       "url": "https://karpathy.github.io/2026/02/12/microgpt/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_0_10",
       "type": "PLAYLIST",
       "title": "Stanford CME295: Transformers and LLMs",
       "meta": "Stanford · lectures 1-6",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_0_11",
       "type": "PLAYLIST",
       "title": "Stanford CS224N: NLP",
       "meta": "Stanford · lectures 3-10",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_0_12",
       "type": "ARTICLE",
       "title": "The Illustrated DeepSeek-R1",
       "meta": "Jay Alammar",
       "desc": "",
       "url": "https://newsletter.languagemodels.co/p/the-illustrated-deepseek-r1",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p5_w13",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 14,
     "title": "How LLMs are built and run",
     "topics": [
      "Pretraining on web-scale text",
      "Instruction tuning (SFT) and RLHF / preference tuning",
      "Reasoning models and test-time compute",
      "Sampling: temperature and top-p",
      "KV cache, context windows, latency",
      "Open-weight models with Hugging Face and Ollama"
     ],
     "ship": "A comparison of 3 open models run locally on 20 of your own prompts.",
     "steps": [
      {
       "id": "s5_1_0",
       "type": "VIDEO",
       "title": "Deep Dive into LLMs like ChatGPT",
       "meta": "Andrej Karpathy · 3 h 31 min · 2025",
       "desc": "The whole LLM pipeline, including reasoning models.",
       "url": "https://www.youtube.com/watch?v=7xTGNNLPyMI",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s5_1_1",
       "type": "COURSE",
       "title": "Hugging Face LLM Course",
       "meta": "Hugging Face · 12 chapters",
       "desc": "Hands-on open-weight models with the Transformers library.",
       "url": "https://huggingface.co/learn/llm-course/chapter1/1",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s5_1_2",
       "type": "ARTICLE",
       "title": "Understanding Reasoning LLMs",
       "meta": "Sebastian Raschka · 2025",
       "desc": "The four main ways thinking models are built.",
       "url": "https://magazine.sebastianraschka.com/p/understanding-reasoning-llms",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_1_3",
       "type": "FREE BOOK",
       "title": "Speech and Language Processing (3rd ed. draft)",
       "meta": "Jurafsky and Martin · Aug 2026 draft",
       "desc": "Free textbook from tokens to post-training.",
       "url": "https://web.stanford.edu/~jurafsky/slp3/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_1_4",
       "type": "VIDEO",
       "title": "The Epic History of LLMs",
       "meta": "CampusX · 1 h 27 min · 2023 · Hindi",
       "desc": "The big picture, from LSTMs to ChatGPT.",
       "url": "https://www.youtube.com/watch?v=8fX3rOjTloc",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s5_1_5",
       "type": "GITHUB",
       "title": "minbpe (tokenizer code)",
       "meta": "Andrej Karpathy · BPE code",
       "desc": "",
       "url": "https://github.com/karpathy/minbpe",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_1_6",
       "type": "PLAYLIST",
       "title": "Build an LLM from scratch (videos)",
       "meta": "Sebastian Raschka · 7 videos",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLTKMiZHVd_2IIEsoJrWACkIxLRdfMlw11",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_1_7",
       "type": "VIDEO",
       "title": "Intro to Large Language Models",
       "meta": "Andrej Karpathy · 59 min",
       "desc": "",
       "url": "https://www.youtube.com/watch?v=zjkBMFhNj_g",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_1_8",
       "type": "PLAYLIST",
       "title": "Stanford CS336: LM from Scratch (2026)",
       "meta": "Stanford · lectures 1, 3, 10, 15-16",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_1_9",
       "type": "COURSE",
       "title": "Open R1: reasoning models for students",
       "meta": "Hugging Face · 1 chapter, 4 sections",
       "desc": "",
       "url": "https://huggingface.co/learn/llm-course/chapter12/1",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s5_1_10",
       "type": "ARTICLE",
       "title": "The Annotated Transformer",
       "meta": "Harvard NLP",
       "desc": "",
       "url": "https://nlp.seas.harvard.edu/annotated-transformer/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p5_w14",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    }
   ]
  },
  {
   "id": 6,
   "name": "Building LLM apps",
   "weeksLabel": "Weeks 15-16",
   "color": "#ff9600",
   "pitfall": {
    "title": "Vibe prompting",
    "body": "Changing prompts without a test set. Keep 20 fixed inputs and re-run them after every prompt change."
   },
   "weeks": [
    {
     "n": 15,
     "title": "LLM APIs and prompting",
     "topics": [
      "Chat APIs: system, user, assistant messages",
      "Prompts: clear task, examples, delimiters",
      "Stream responses into a UI",
      "Tokens, context windows and pricing",
      "Prompt caching and picking a model for cost",
      "Local models behind an OpenAI-compatible API"
     ],
     "ship": "A streaming chatbot that shows token count and cost for every reply.",
     "steps": [
      {
       "id": "s6_0_0",
       "type": "DOCS",
       "title": "Gemini API: getting started",
       "meta": "Google · free tier",
       "desc": "A free key; first calls, streaming, JSON and tools.",
       "url": "https://ai.google.dev/gemini-api/docs/get-started",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s6_0_1",
       "type": "PAPER",
       "title": "Prompt Engineering (whitepaper)",
       "meta": "Google on Kaggle · ~68 pages",
       "desc": "The most-shared prompting reference: few-shot, CoT, JSON.",
       "url": "https://www.kaggle.com/whitepaper-prompt-engineering",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s6_0_2",
       "type": "DOCS",
       "title": "Prompt engineering overview",
       "meta": "Anthropic",
       "desc": "Clarity, examples, XML tags, roles - the living guide.",
       "url": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_0_3",
       "type": "DOCS",
       "title": "Structured model outputs",
       "meta": "OpenAI",
       "desc": "Schema-guaranteed JSON, with Pydantic examples.",
       "url": "https://developers.openai.com/api/docs/guides/structured-outputs",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_0_4",
       "type": "DOCS",
       "title": "Instructor",
       "meta": "Jason Liu · Python library",
       "desc": "Pydantic in, validated output out, with automatic retries.",
       "url": "https://python.useinstructor.com/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_0_5",
       "type": "DOCS",
       "title": "Build a basic LLM chat app",
       "meta": "Streamlit",
       "desc": "A streaming chat UI in one short tutorial.",
       "url": "https://docs.streamlit.io/develop/tutorials/chat-and-llm-apps/build-conversational-apps",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_0_6",
       "type": "PLAYLIST",
       "title": "Generative AI using LangChain",
       "meta": "CampusX · 21 videos · ~22 h · Hindi",
       "desc": "Models, prompts, structured output, RAG, tools.",
       "url": "https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s6_0_7",
       "type": "GITHUB",
       "title": "Generative AI for Beginners",
       "meta": "Microsoft · 21 lessons",
       "desc": "",
       "url": "https://github.com/microsoft/generative-ai-for-beginners",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_0_8",
       "type": "DOCS",
       "title": "Prompt engineering guide",
       "meta": "OpenAI",
       "desc": "",
       "url": "https://developers.openai.com/api/docs/guides/prompt-engineering",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_0_9",
       "type": "DOCS",
       "title": "Prompt caching",
       "meta": "Anthropic",
       "desc": "",
       "url": "https://platform.claude.com/docs/en/build-with-claude/prompt-caching",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_0_10",
       "type": "DOCS",
       "title": "Groq OpenAI compatibility",
       "meta": "Groq",
       "desc": "",
       "url": "https://console.groq.com/docs/openai",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_0_11",
       "type": "PLAYLIST",
       "title": "Generative AI and Agentic AI",
       "meta": "Krish Naik Hindi · 10 videos · ~9 h · Hindi",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLTDARY42LDV567lWN_5BtoVGjMFKbthGu",
       "lang": "hi",
       "stream": "supplementary"
      },
      {
       "id": "practice_p6_w15",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 16,
     "title": "Structured output and tool calling",
     "topics": [
      "JSON mode vs schema-enforced output",
      "Pydantic models to validate everything",
      "Function / tool calling end to end",
      "Retries, timeouts and fallbacks",
      "Images and PDFs as inputs",
      "A fixed test set for your prompts"
     ],
     "ship": "A resume or invoice to JSON extractor, validated and tested on 20 files.",
     "steps": [
      {
       "id": "s6_1_0",
       "type": "COURSE",
       "title": "Building with the Claude API",
       "meta": "Anthropic Academy · 85 lessons · certificate",
       "desc": "API basics to tool use, RAG and caching.",
       "url": "https://anthropic.skilljar.com/claude-with-the-anthropic-api",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s6_1_1",
       "type": "COURSE",
       "title": "5-Day Gen AI Intensive",
       "meta": "Google x Kaggle · self-paced",
       "desc": "Google's free course: whitepapers, podcasts, notebooks.",
       "url": "https://www.kaggle.com/learn-guide/5-day-genai",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s6_1_2",
       "type": "DOCS",
       "title": "Function calling guide",
       "meta": "OpenAI",
       "desc": "Define tools, handle tool calls, return the results.",
       "url": "https://developers.openai.com/api/docs/guides/function-calling",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_1_3",
       "type": "DOCS",
       "title": "Ollama documentation",
       "meta": "Ollama · local models",
       "desc": "Run open models free; OpenAI-compatible API.",
       "url": "https://docs.ollama.com/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_1_4",
       "type": "VIDEO",
       "title": "Ollama Masterclass 2026",
       "meta": "CampusX · 2 h 49 min · Hindi",
       "desc": "Run and call local models at zero API cost.",
       "url": "https://www.youtube.com/watch?v=YcAYmIFtA0o",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s6_1_5",
       "type": "GITHUB",
       "title": "Interactive prompt engineering tutorial",
       "meta": "Anthropic · 9 chapters",
       "desc": "",
       "url": "https://github.com/anthropics/prompt-eng-interactive-tutorial",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_1_6",
       "type": "TOOL",
       "title": "OpenAI Tokenizer",
       "meta": "OpenAI",
       "desc": "",
       "url": "https://platform.openai.com/tokenizer",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_1_7",
       "type": "DOCS",
       "title": "Gemini via the OpenAI library",
       "meta": "Google",
       "desc": "",
       "url": "https://ai.google.dev/gemini-api/docs/openai",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s6_1_8",
       "type": "DOCS",
       "title": "LangChain (v1) overview",
       "meta": "LangChain",
       "desc": "",
       "url": "https://docs.langchain.com/oss/python/langchain/overview",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p6_w16",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    }
   ]
  },
  {
   "id": 7,
   "name": "RAG",
   "weeksLabel": "Weeks 17-18",
   "color": "#ffc800",
   "pitfall": {
    "title": "Blaming the model",
    "body": "Most bad RAG answers are search failures. Look at what was retrieved before you touch the prompt."
   },
   "weeks": [
    {
     "n": 17,
     "title": "Embeddings and vector search",
     "topics": [
      "What embeddings capture",
      "Cosine similarity and nearest neighbours",
      "Chunking: size, overlap, structure",
      "Vector stores: Chroma, pgvector, Qdrant",
      "Retrieve, augment, generate",
      "Cite a source in every answer"
     ],
     "ship": "A chat with your notes app that answers with citations.",
     "steps": [
      {
       "id": "s7_0_0",
       "type": "PLAYLIST",
       "title": "RAG From Scratch",
       "meta": "LangChain (Lance Martin) · 14 short videos",
       "desc": "Indexing, multi-query, HyDE, routing, RAPTOR, ColBERT.",
       "url": "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s7_0_1",
       "type": "DOCS",
       "title": "Build a semantic search engine",
       "meta": "LangChain docs · current v1 tutorial",
       "desc": "PDF to chunks, embeddings, vector store, retriever.",
       "url": "https://docs.langchain.com/oss/python/langchain/knowledge-base",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s7_0_2",
       "type": "ARTICLE",
       "title": "Chunking strategies for LLM apps",
       "meta": "Pinecone · updated 2025-06-28",
       "desc": "Fixed, recursive, semantic chunking - and how to test.",
       "url": "https://www.pinecone.io/learn/chunking-strategies/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_0_3",
       "type": "DOCS",
       "title": "Evaluate a simple RAG system",
       "meta": "Ragas docs",
       "desc": "The quickest way to score your RAG pipeline.",
       "url": "https://docs.ragas.io/en/stable/getstarted/rag_eval/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_0_4",
       "type": "PLAYLIST",
       "title": "RAG",
       "meta": "CampusX · 9 videos · Hindi",
       "desc": "Loaders, splitters, vector stores, retrievers, Self-RAG.",
       "url": "https://www.youtube.com/playlist?list=PLKnIA16_Rmva0dRLWEHLznSHKbFD_RJfX",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s7_0_5",
       "type": "TOOL",
       "title": "Docling",
       "meta": "open source · document parser",
       "desc": "",
       "url": "https://docling-project.github.io/docling/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_0_6",
       "type": "GITHUB",
       "title": "RAG From Scratch notebooks",
       "meta": "LangChain · 5 notebooks",
       "desc": "",
       "url": "https://github.com/langchain-ai/rag-from-scratch",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_0_7",
       "type": "GITHUB",
       "title": "RAG Techniques",
       "meta": "Nir Diamant",
       "desc": "",
       "url": "https://github.com/NirDiamant/RAG_Techniques",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_0_8",
       "type": "VIDEO",
       "title": "Learn RAG From Scratch",
       "meta": "freeCodeCamp · 2 h 33 min",
       "desc": "",
       "url": "https://www.youtube.com/watch?v=sVcwVQRHIc8",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_0_9",
       "type": "GITHUB",
       "title": "pgvector",
       "meta": "vector search in Postgres",
       "desc": "",
       "url": "https://github.com/pgvector/pgvector",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_0_10",
       "type": "DOCS",
       "title": "GraphRAG",
       "meta": "Microsoft Research",
       "desc": "",
       "url": "https://microsoft.github.io/graphrag/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_0_11",
       "type": "PAPER",
       "title": "The original RAG paper",
       "meta": "Lewis et al.",
       "desc": "",
       "url": "https://arxiv.org/abs/2005.11401",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_0_12",
       "type": "COURSE",
       "title": "Weaviate Academy",
       "meta": "Weaviate",
       "desc": "",
       "url": "https://academy.weaviate.io/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p7_w17",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 18,
     "title": "Better retrieval and RAG evals",
     "topics": [
      "Hybrid search: BM25 plus vectors",
      "Rerankers and top-k tuning",
      "Query rewriting and metadata filters",
      "Contextual retrieval",
      "Parsing PDFs and tables",
      "Retrieval hit-rate and faithfulness scores"
     ],
     "ship": "Hybrid search and reranking added, with before / after scores on 30 questions.",
     "steps": [
      {
       "id": "s7_1_0",
       "type": "DOCS",
       "title": "Chroma: getting started",
       "meta": "Chroma",
       "desc": "The easiest local vector database to start with.",
       "url": "https://docs.trychroma.com/docs/overview/getting-started",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s7_1_1",
       "type": "COURSE",
       "title": "LLM Zoomcamp",
       "meta": "DataTalksClub · 10 weeks · self-paced",
       "desc": "Project course: RAG, vector search, evaluation, monitoring.",
       "url": "https://github.com/DataTalksClub/llm-zoomcamp",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s7_1_2",
       "type": "ARTICLE",
       "title": "Introducing Contextual Retrieval",
       "meta": "Anthropic · Sep 2024",
       "desc": "Contextual chunks + BM25 + reranking cut retrieval failures.",
       "url": "https://www.anthropic.com/engineering/contextual-retrieval",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_1_3",
       "type": "ARTICLE",
       "title": "Hybrid search explained",
       "meta": "Weaviate · 9 min read",
       "desc": "BM25 plus vectors, and how results are fused.",
       "url": "https://weaviate.io/blog/hybrid-search-explained",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_1_4",
       "type": "ARTICLE",
       "title": "Rerankers and two-stage retrieval",
       "meta": "Pinecone",
       "desc": "Why a second ranking pass fixes top-k results.",
       "url": "https://www.pinecone.io/learn/series/rag/rerankers/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_1_5",
       "type": "DOCS",
       "title": "Sentence Transformers",
       "meta": "sbert.net · free local models",
       "desc": "Embedding models and rerankers you can run yourself.",
       "url": "https://sbert.net/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_1_6",
       "type": "VIDEO",
       "title": "RAG with LangGraph crash course",
       "meta": "Krish Naik Hindi · 2 h 2 min · 2026 · Hindi",
       "desc": "A complete RAG app built with LangGraph, in Hindi.",
       "url": "https://www.youtube.com/watch?v=kcGQlZw1b6Q",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s7_1_7",
       "type": "COURSE",
       "title": "Qdrant Essentials",
       "meta": "Qdrant · 8 days · certificate",
       "desc": "",
       "url": "https://qdrant.tech/course/essentials/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_1_8",
       "type": "TOOL",
       "title": "MTEB embedding leaderboard",
       "meta": "Hugging Face",
       "desc": "",
       "url": "https://huggingface.co/spaces/mteb/leaderboard",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_1_9",
       "type": "ARTICLE",
       "title": "Advanced RAG (cookbook)",
       "meta": "Hugging Face",
       "desc": "",
       "url": "https://huggingface.co/learn/cookbook/en/advanced_rag",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_1_10",
       "type": "PLAYLIST",
       "title": "Complete RAG playlist",
       "meta": "Krish Naik · 8 videos",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLZoTAELRMXVM8Pf4U67L4UuDRgV4TNX9D",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_1_11",
       "type": "PAPER",
       "title": "Embeddings and Vector Stores",
       "meta": "Google on Kaggle",
       "desc": "",
       "url": "https://www.kaggle.com/whitepaper-embeddings-and-vector-stores",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_1_12",
       "type": "COURSE",
       "title": "Advanced Retrieval for AI with Chroma",
       "meta": "DeepLearning.AI · audit free",
       "desc": "",
       "url": "https://www.deeplearning.ai/courses/advanced-retrieval-for-ai",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s7_1_13",
       "type": "PAPER",
       "title": "Lost in the Middle",
       "meta": "Liu et al.",
       "desc": "",
       "url": "https://arxiv.org/abs/2307.03172",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p7_w18",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    }
   ]
  },
  {
   "id": 8,
   "name": "Agents and MCP",
   "weeksLabel": "Weeks 19-20",
   "color": "#58cc02",
   "pitfall": {
    "title": "Framework first",
    "body": "Starting with a multi-agent framework. Start with one model, a few good tools and a loop; add agents only when that fails."
   },
   "weeks": [
    {
     "n": 19,
     "title": "Agent fundamentals",
     "topics": [
      "Workflow or agent: when autonomy helps",
      "The loop: model, tool, observation",
      "ReAct and planning",
      "Tool design: names, schemas, errors",
      "Short- and long-term memory",
      "LangGraph: state, nodes, edges"
     ],
     "ship": "A research agent with search and calculator tools, a step limit and full traces.",
     "steps": [
      {
       "id": "s8_0_0",
       "type": "ARTICLE",
       "title": "Building effective agents",
       "meta": "Anthropic · 12 min read",
       "desc": "Workflows vs agents - and when not to build one.",
       "url": "https://www.anthropic.com/engineering/building-effective-agents",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s8_0_1",
       "type": "COURSE",
       "title": "Hugging Face AI Agents Course",
       "meta": "Hugging Face · 4 units + bonus · certificate",
       "desc": "Build real agents; ends with a benchmark project.",
       "url": "https://huggingface.co/learn/agents-course/unit0/introduction",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s8_0_2",
       "type": "DOCS",
       "title": "Workflows and agents",
       "meta": "LangGraph docs",
       "desc": "Chaining, routing, orchestrator-worker - with code.",
       "url": "https://docs.langchain.com/oss/python/langgraph/workflows-agents",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_0_3",
       "type": "COURSE",
       "title": "Agentic AI (Andrew Ng)",
       "meta": "DeepLearning.AI · ~10 h · 31 videos · audit free",
       "desc": "Pattern-first course: reflection, tools, planning.",
       "url": "https://www.deeplearning.ai/courses/agentic-ai",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_0_4",
       "type": "PLAYLIST",
       "title": "Agentic AI using LangGraph",
       "meta": "CampusX · 28 videos · ~24 h · Hindi",
       "desc": "Workflows, memory, human-in-loop, MCP client, projects.",
       "url": "https://www.youtube.com/playlist?list=PLKnIA16_RmvYsvB8qkUQuJmJNuiCUJFPL",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s8_0_5",
       "type": "DOCS",
       "title": "What is MCP?",
       "meta": "official docs",
       "desc": "",
       "url": "https://modelcontextprotocol.io/docs/getting-started/intro",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_0_6",
       "type": "TOOL",
       "title": "MCP Inspector",
       "meta": "official tool",
       "desc": "",
       "url": "https://modelcontextprotocol.io/docs/tools/inspector",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_0_7",
       "type": "GITHUB",
       "title": "MCP for Beginners",
       "meta": "Microsoft · 12 modules",
       "desc": "",
       "url": "https://github.com/microsoft/mcp-for-beginners",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_0_8",
       "type": "PLAYLIST",
       "title": "MCP (Model Context Protocol)",
       "meta": "Krish Naik · 4 videos",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLZoTAELRMXVPC8r1xF68Gksi241DAtMsK",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_0_9",
       "type": "DOCS",
       "title": "Agents SDK: guardrails",
       "meta": "OpenAI",
       "desc": "",
       "url": "https://openai.github.io/openai-agents-python/guardrails/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_0_10",
       "type": "COURSE",
       "title": "Project: Deep Research with LangGraph",
       "meta": "LangChain Academy · 1.5 h",
       "desc": "",
       "url": "https://academy.langchain.com/courses/deep-research-with-langgraph",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_0_11",
       "type": "GITHUB",
       "title": "browser-use",
       "meta": "open source · browser agents",
       "desc": "",
       "url": "https://github.com/browser-use/browser-use",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_0_12",
       "type": "PLAYLIST",
       "title": "Claude Agent SDK (TypeScript)",
       "meta": "Piyush Garg · 11 videos · Hindi",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLinedj3B30sCZ3oyfEYh8pLRdHdsISNfG",
       "lang": "hi",
       "stream": "supplementary"
      },
      {
       "id": "practice_p8_w19",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 20,
     "title": "MCP, multi-agent and safety",
     "topics": [
      "Model Context Protocol: tools, resources, prompts",
      "Build an MCP server and connect a client",
      "Human approval before risky actions",
      "Orchestrator-worker and other multi-agent patterns",
      "Permissions, step limits and cost limits",
      "Evaluate agents on real tasks"
     ],
     "ship": "An MCP server for a real API, used by an agent that asks before it acts.",
     "steps": [
      {
       "id": "s8_1_0",
       "type": "COURSE",
       "title": "Introduction to LangGraph",
       "meta": "LangChain Academy · 55 lessons · 6 h",
       "desc": "The official free LangGraph course, updated for v1.",
       "url": "https://academy.langchain.com/courses/intro-to-langgraph",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s8_1_1",
       "type": "ARTICLE",
       "title": "Writing effective tools for agents",
       "meta": "Anthropic · 15 min read · 2025",
       "desc": "Name, describe, scope and test the tools you give.",
       "url": "https://www.anthropic.com/engineering/writing-tools-for-agents",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s8_1_2",
       "type": "ARTICLE",
       "title": "Effective context engineering",
       "meta": "Anthropic · 14 min read · 2025",
       "desc": "Compaction, notes, just-in-time retrieval, sub-agents.",
       "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_3",
       "type": "PAPER",
       "title": "A practical guide to building agents",
       "meta": "OpenAI · 34-page PDF",
       "desc": "Single vs multi-agent, guardrails, escalation.",
       "url": "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_4",
       "type": "VIDEO",
       "title": "What are AI agents, in depth",
       "meta": "Chai aur Code · 49 min · 2026 · Hindi",
       "desc": "Agent fundamentals before any framework.",
       "url": "https://www.youtube.com/watch?v=B5LZnYYoLtY",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s8_1_5",
       "type": "DOCS",
       "title": "Build an MCP server",
       "meta": "modelcontextprotocol.io · official tutorial",
       "desc": "The weather-server tutorial, updated for SDK 2.x.",
       "url": "https://modelcontextprotocol.io/docs/develop/build-server",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_6",
       "type": "DOCS",
       "title": "MCP Python SDK: what's new in v2",
       "meta": "SDK docs",
       "desc": "FastMCP became MCPServer - read before old tutorials.",
       "url": "https://py.sdk.modelcontextprotocol.io/whats-new/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_7",
       "type": "COURSE",
       "title": "Introduction to Model Context Protocol",
       "meta": "Anthropic Academy · 10 lessons",
       "desc": "A free official intro to MCP servers and clients.",
       "url": "https://academy.claude.com/courses/introduction-to-model-context-protocol",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_8",
       "type": "PLAYLIST",
       "title": "Model Context Protocol",
       "meta": "CampusX · 8 videos · ~7 h · Hindi",
       "desc": "MCP from concepts to deployed servers.",
       "url": "https://www.youtube.com/playlist?list=PLKnIA16_Rmva_oZ9F4ayUu9qcWgF7Fyc0",
       "lang": "hi",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_9",
       "type": "DOCS",
       "title": "Build an MCP client",
       "meta": "official docs · tutorial",
       "desc": "",
       "url": "https://modelcontextprotocol.io/docs/develop/build-client",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_10",
       "type": "COURSE",
       "title": "Hugging Face MCP Course",
       "meta": "Hugging Face",
       "desc": "",
       "url": "https://huggingface.co/learn/mcp-course/unit0/introduction",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_11",
       "type": "COURSE",
       "title": "MCP: Build Rich-Context AI Apps",
       "meta": "DeepLearning.AI · audit free",
       "desc": "",
       "url": "https://www.deeplearning.ai/courses/mcp-build-rich-context-ai-apps-with-anthropic",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_12",
       "type": "ARTICLE",
       "title": "Code execution with MCP",
       "meta": "Anthropic",
       "desc": "",
       "url": "https://www.anthropic.com/engineering/code-execution-with-mcp",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_13",
       "type": "DOCS",
       "title": "Agents SDK: human-in-the-loop",
       "meta": "OpenAI",
       "desc": "",
       "url": "https://openai.github.io/openai-agents-python/human_in_the_loop/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_14",
       "type": "COURSE",
       "title": "Multi AI Agent Systems with crewAI",
       "meta": "DeepLearning.AI · audit free",
       "desc": "",
       "url": "https://www.deeplearning.ai/courses/multi-ai-agent-systems-with-crewai",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s8_1_15",
       "type": "PLAYLIST",
       "title": "OpenAI Agents SDK (TypeScript)",
       "meta": "Piyush Garg · 15 videos · Hindi",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLinedj3B30sA-XUqy01s8yrZ0r0QZMpQT",
       "lang": "hi",
       "stream": "supplementary"
      },
      {
       "id": "practice_p8_w20",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    }
   ]
  },
  {
   "id": 9,
   "name": "Fine-tuning",
   "weeksLabel": "Week 21",
   "color": "#1cb0f6",
   "pitfall": {
    "title": "Tuning in facts",
    "body": "Fine-tuning to add knowledge. Tuning shapes behaviour and format; for facts that change, use RAG."
   },
   "weeks": [
    {
     "n": 21,
     "title": "Fine-tuning, when it pays",
     "topics": [
      "Prompting vs RAG vs fine-tuning: choose by problem",
      "Build a clean instruction dataset",
      "LoRA and QLoRA: train a small adapter",
      "Fine-tune on a free Colab GPU with Unsloth or TRL",
      "Preference tuning (DPO) at a glance",
      "Evaluate before and after, then publish to the Hub"
     ],
     "ship": "A LoRA fine-tune of a small open model for one narrow task, with a before / after eval.",
     "steps": [
      {
       "id": "s9_0_0",
       "type": "DOCS",
       "title": "Fine-tuning LLMs guide",
       "meta": "Unsloth",
       "desc": "Pick a model, LoRA vs QLoRA, data, train, evaluate, export.",
       "url": "https://unsloth.ai/docs/get-started/fine-tuning-llms-guide",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s9_0_1",
       "type": "COURSE",
       "title": "Hugging Face smol course",
       "meta": "Hugging Face · 4 units · certificate",
       "desc": "Hands-on SFT, LoRA and DPO with TRL.",
       "url": "https://huggingface.co/learn/smol-course/unit0/1",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s9_0_2",
       "type": "GITHUB",
       "title": "Unsloth notebooks",
       "meta": "Unsloth · free-GPU Colab",
       "desc": "Run-all notebooks for SFT, DPO and GRPO fine-tunes.",
       "url": "https://github.com/unslothai/notebooks",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s9_0_3",
       "type": "COURSE",
       "title": "Mastering LLMs (free talks)",
       "meta": "Parlance Labs · 40+ hours · 2024",
       "desc": "Start with When and Why to Fine-Tune an LLM.",
       "url": "https://parlance-labs.com/education/",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s9_0_4",
       "type": "DOCS",
       "title": "TRL: DPO Trainer",
       "meta": "Hugging Face",
       "desc": "Preference data format plus a runnable DPO quickstart.",
       "url": "https://huggingface.co/docs/trl/dpo_trainer",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s9_0_5",
       "type": "ARTICLE",
       "title": "Is Fine-Tuning Still Valuable?",
       "meta": "Hamel Husain",
       "desc": "When fine-tuning still wins, from people who ship it.",
       "url": "https://hamel.dev/blog/posts/fine_tuning_valuable.html",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s9_0_6",
       "type": "DOCS",
       "title": "PEFT quicktour",
       "meta": "Hugging Face",
       "desc": "LoraConfig, get_peft_model and tiny saved adapters.",
       "url": "https://huggingface.co/docs/peft/quicktour",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s9_0_7",
       "type": "GITHUB",
       "title": "LLM Course (roadmap + notebooks)",
       "meta": "Maxime Labonne · 3 parts",
       "desc": "Colab notebooks for SFT, DPO, quantization and merging.",
       "url": "https://github.com/mlabonne/llm-course",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s9_0_8",
       "type": "VIDEO",
       "title": "LoRA and QLoRA explained",
       "meta": "LearnYard · 49 min · 2026 · Hindi",
       "desc": "LoRA intuition from matrix rank up, in Hindi.",
       "url": "https://www.youtube.com/watch?v=jxg4NWgDqUw",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s9_0_9",
       "type": "VIDEO",
       "title": "LLM Fine Tuning Crash Course",
       "meta": "codebasics · 53 min · Unsloth",
       "desc": "",
       "url": "https://www.youtube.com/watch?v=IIvORO248Zs",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s9_0_10",
       "type": "COURSE",
       "title": "LLM Course: fine-tuning chapter",
       "meta": "Hugging Face · SFT, LoRA, eval",
       "desc": "",
       "url": "https://huggingface.co/learn/llm-course/chapter11/1",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s9_0_11",
       "type": "VIDEO",
       "title": "LLM Fine-Tuning Course",
       "meta": "freeCodeCamp · 11 h 56 min · 2026",
       "desc": "",
       "url": "https://www.youtube.com/watch?v=CcrC5zSv1iA",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s9_0_12",
       "type": "COURSE",
       "title": "Post-training of LLMs",
       "meta": "DeepLearning.AI · audit free",
       "desc": "",
       "url": "https://www.deeplearning.ai/courses/post-training-of-llms",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s9_0_13",
       "type": "PLAYLIST",
       "title": "Post-training track talks",
       "meta": "AI Engineer · 22 videos",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLbJzt_272Brg",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s9_0_14",
       "type": "TOOL",
       "title": "Qwen3-0.6B model card",
       "meta": "a small model to tune",
       "desc": "",
       "url": "https://huggingface.co/Qwen/Qwen3-0.6B",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p9_w21",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    }
   ]
  },
  {
   "id": 10,
   "name": "Evals and production",
   "weeksLabel": "Weeks 22-23",
   "color": "#37464f",
   "pitfall": {
    "title": "No evals",
    "body": "Shipping without measurement. If you cannot measure quality, you cannot improve it - or prove it in an interview."
   },
   "weeks": [
    {
     "n": 22,
     "title": "Evals, tracing and security",
     "topics": [
      "Error analysis: read real outputs, label failures",
      "Turn those failures into eval sets",
      "LLM-as-judge, and checking the judge",
      "Tracing with Langfuse or Phoenix",
      "Prompt injection and the OWASP LLM Top 10",
      "Input and output guardrails"
     ],
     "ship": "An eval harness and tracing for your RAG app, run on every change.",
     "steps": [
      {
       "id": "s10_0_0",
       "type": "ARTICLE",
       "title": "LLM Evals: Everything You Need to Know",
       "meta": "Hamel Husain, Shreya Shankar",
       "desc": "Error analysis, judges, synthetic data, RAG evals.",
       "url": "https://hamel.dev/blog/posts/evals-faq/",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s10_0_1",
       "type": "ARTICLE",
       "title": "Your AI Product Needs Evals",
       "meta": "Hamel Husain",
       "desc": "Assertions, LLM judges and human review, from a real product.",
       "url": "https://hamel.dev/blog/posts/evals/",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s10_0_2",
       "type": "DOCS",
       "title": "Arize Phoenix",
       "meta": "open source",
       "desc": "Self-hosted tracing with LLM-judge evals.",
       "url": "https://arize.com/docs/phoenix",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s10_0_3",
       "type": "ARTICLE",
       "title": "Using LLM-as-a-Judge: a complete guide",
       "meta": "Hamel Husain",
       "desc": "How to build an LLM judge you can actually trust.",
       "url": "https://hamel.dev/blog/posts/llm-judge/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s10_0_4",
       "type": "ARTICLE",
       "title": "Patterns for LLM systems and products",
       "meta": "Eugene Yan · Jul 2023",
       "desc": "Evals, RAG, caching, guardrails, feedback.",
       "url": "https://eugeneyan.com/writing/llm-patterns/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s10_0_5",
       "type": "PLAYLIST",
       "title": "LLM Evaluation",
       "meta": "CampusX · 19 videos · ~20 h · 2026 · Hindi",
       "desc": "LLM-as-judge, RAG triad, regression tests, monitoring.",
       "url": "https://www.youtube.com/playlist?list=PLEneLIDJFpcA",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s10_0_6",
       "type": "PLAYLIST",
       "title": "The Ultimate MLOps Course",
       "meta": "Vikash Das · 25 videos · ~40 h · Hindi",
       "desc": "DVC, MLflow, Docker, CI/CD, Kubernetes in Hindi.",
       "url": "https://www.youtube.com/playlist?list=PLupK5DK91flV45dkPXyGViMLtHadRr6sp",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s10_0_7",
       "type": "PLAYLIST",
       "title": "Security track talks",
       "meta": "AI Engineer · 10 videos",
       "desc": "",
       "url": "https://www.youtube.com/playlist?list=PLM1x6AvuYX54",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p10_w22",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    },
    {
     "n": 23,
     "title": "Ship to production",
     "topics": [
      "Serve your app with FastAPI and streaming",
      "Docker images, containers, compose",
      "Deploy free: Render, Streamlit Cloud or a Space",
      "Caching, rate limits, retries, timeouts",
      "Log cost and latency for every request",
      "Serving open models with vLLM or Ollama"
     ],
     "ship": "A Dockerised app at a public URL with a cost and latency log.",
     "steps": [
      {
       "id": "s10_1_0",
       "type": "PLAYLIST",
       "title": "LLM evaluation for builders",
       "meta": "Evidently AI · 12 videos + notebooks",
       "desc": "Code-along: custom judges, RAG tests, agent evals.",
       "url": "https://www.youtube.com/playlist?list=PL9omX6impEuNTr0KGLChHwhvN-q3ZF12d",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s10_1_1",
       "type": "DOCS",
       "title": "Langfuse",
       "meta": "open source · free Hobby plan",
       "desc": "Tracing, prompt management and evals; self-host free.",
       "url": "https://langfuse.com/docs",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s10_1_2",
       "type": "ARTICLE",
       "title": "A Year of Building with LLMs",
       "meta": "Yan, Bischof, Frye, Husain, Liu, Shankar · 2024",
       "desc": "Hard-won lessons: evals and monitoring come first.",
       "url": "https://applied-llms.org/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s10_1_3",
       "type": "DOCS",
       "title": "Docker: get started",
       "meta": "Docker",
       "desc": "Images, Dockerfiles and Compose, officially.",
       "url": "https://docs.docker.com/get-started/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s10_1_4",
       "type": "DOCS",
       "title": "vLLM quickstart",
       "meta": "vLLM",
       "desc": "Serve open models behind an OpenAI-compatible API.",
       "url": "https://docs.vllm.ai/en/stable/getting_started/quickstart/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s10_1_5",
       "type": "FREE BOOK",
       "title": "LLM Inference Handbook",
       "meta": "Modular · TTFT, caching and batching",
       "desc": "Latency and cost basics.",
       "url": "https://handbook.modular.com/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s10_1_6",
       "type": "COURSE",
       "title": "Made With ML",
       "meta": "Goku Mohandas · free course",
       "desc": "Design, build, deploy and iterate ML in production.",
       "url": "https://madewithml.com/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s10_1_7",
       "type": "DOCS",
       "title": "Ollama quickstart",
       "meta": "Ollama",
       "desc": "Run models locally in minutes, behind a REST API.",
       "url": "https://docs.ollama.com/quickstart",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s10_1_8",
       "type": "COURSE",
       "title": "MLOps Zoomcamp",
       "meta": "DataTalksClub · self-paced",
       "desc": "Tracking, orchestration, deployment and monitoring.",
       "url": "https://github.com/DataTalksClub/mlops-zoomcamp",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s10_1_9",
       "type": "PLAYLIST",
       "title": "Docker tutorial for beginners",
       "meta": "Code Step By Step · 17 videos · Hindi",
       "desc": "Docker from zero: images, containers and compose.",
       "url": "https://www.youtube.com/playlist?list=PL8p2I9GklV47v6WZTjHAqdsHxpTIpjRwn",
       "lang": "hi",
       "stream": "main"
      },
      {
       "id": "s10_1_10",
       "type": "DOCS",
       "title": "Gradio quickstart",
       "meta": "Gradio",
       "desc": "",
       "url": "https://www.gradio.app/guides/quickstart",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p10_w23",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    }
   ]
  },
  {
   "id": 11,
   "name": "Get hired",
   "weeksLabel": "Week 24",
   "color": "#ff4b4b",
   "pitfall": null,
   "weeks": [
    {
     "n": 24,
     "title": "Portfolio and job hunt",
     "topics": [
      "Finish one capstone that solves a real problem",
      "README: problem, architecture, evals, demo GIF",
      "Record a two-minute demo video",
      "Resume: projects first, numbers in every line",
      "Post what you built on LinkedIn and X",
      "Mock interviews, then apply every week"
     ],
     "ship": "Capstone live, 3 posts published, 30 applications sent.",
     "steps": [
      {
       "id": "s11_0_0",
       "type": "DOCS",
       "title": "Your GitHub profile README",
       "meta": "GitHub docs",
       "desc": "Put your best AI projects first on your profile.",
       "url": "https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s11_0_1",
       "type": "WEBSITE",
       "title": "AI Engineer roadmap",
       "meta": "roadmap.sh",
       "desc": "A skills map to tick off before you apply.",
       "url": "https://roadmap.sh/ai-engineer",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s11_0_2",
       "type": "JOB BOARD",
       "title": "Wellfound: ML jobs in India",
       "meta": "Wellfound",
       "desc": "Startup AI roles, often with salary and equity shown.",
       "url": "https://wellfound.com/role/l/machine-learning-engineer/india",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s11_0_3",
       "type": "JOB BOARD",
       "title": "Internshala: ML internships",
       "meta": "Internshala",
       "desc": "The big student internship board; filter by stipend.",
       "url": "https://internshala.com/internships/machine-learning-internship/",
       "lang": "en",
       "stream": "main"
      },
      {
       "id": "s11_0_4",
       "type": "FREE BOOK",
       "title": "Machine Learning Interviews Book",
       "meta": "Chip Huyen · 200+ questions",
       "desc": "The process, the roles, and real questions.",
       "url": "https://huyenchip.com/ml-interviews-book/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_5",
       "type": "ARTICLE",
       "title": "Writing a resume that gets interviews",
       "meta": "Tech Interview Handbook",
       "desc": "ATS-friendly structure and impact bullets.",
       "url": "https://www.techinterviewhandbook.org/resume/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_6",
       "type": "GITHUB",
       "title": "AI Engineering: free companion repo",
       "meta": "Chip Huyen",
       "desc": "Chapter summaries and study notes.",
       "url": "https://github.com/chiphuyen/aie-book",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_7",
       "type": "PLAYLIST",
       "title": "ML interview questions",
       "meta": "CampusX · 22 videos · Hindi",
       "desc": "Common ML interview questions, answered in Hindi.",
       "url": "https://www.youtube.com/playlist?list=PLKnIA16_Rmva_ZdY31wpEICG0KHnvIhu2",
       "lang": "hi",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_8",
       "type": "NEWSLETTER",
       "title": "The Batch",
       "meta": "DeepLearning.AI · weekly",
       "desc": "Friendly weekly AI news with Andrew Ng's letter.",
       "url": "https://www.deeplearning.ai/the-batch/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_9",
       "type": "NEWSLETTER",
       "title": "Simon Willison's Weblog",
       "meta": "near-daily",
       "desc": "Hands-on notes on new models, tools and security.",
       "url": "https://simonwillison.net/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_10",
       "type": "NEWSLETTER",
       "title": "Daily Papers",
       "meta": "Hugging Face · Daily",
       "desc": "Skim titles daily; read one paper a week.",
       "url": "https://huggingface.co/papers",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_11",
       "type": "PLAYLIST",
       "title": "AI Engineer World's Fair 2026",
       "meta": "AI Engineer · 368 talks",
       "desc": "Every talk from the field's biggest conference.",
       "url": "https://www.youtube.com/playlist?list=PLDyBmFH9HlVc",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_12",
       "type": "JOB BOARD",
       "title": "LinkedIn Jobs",
       "meta": "LinkedIn",
       "desc": "",
       "url": "https://www.linkedin.com/jobs/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_13",
       "type": "JOB BOARD",
       "title": "Y Combinator startup jobs",
       "meta": "YC",
       "desc": "",
       "url": "https://www.ycombinator.com/jobs",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_14",
       "type": "JOB BOARD",
       "title": "Unstop internships and hackathons",
       "meta": "Unstop",
       "desc": "",
       "url": "https://unstop.com/internships",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_15",
       "type": "NEWSLETTER",
       "title": "AINews",
       "meta": "smol.ai · weekdays",
       "desc": "",
       "url": "https://news.smol.ai/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_16",
       "type": "PODCAST",
       "title": "Latent Space podcast",
       "meta": "swyx and Alessio",
       "desc": "",
       "url": "https://www.latent.space/podcast",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "s11_0_17",
       "type": "TOOL",
       "title": "OBS Studio",
       "meta": "record demo videos",
       "desc": "",
       "url": "https://obsproject.com/",
       "lang": "en",
       "stream": "supplementary"
      },
      {
       "id": "practice_p11_w24",
       "type": "PRACTICE",
       "title": "Practice & Build",
       "meta": "",
       "desc": "Complete the ship task for this week.",
       "url": "",
       "lang": "en",
       "stream": "practice"
      }
     ]
    }
   ]
  }
 ],
 "projects": [
  {
   "n": 1,
   "title": "API wrapper service",
   "week": 4,
   "color": "#1cb0f6",
   "desc": "A FastAPI service over a public API (weather, cricket scores, news) with caching, tests and auto-generated docs.",
   "proves": "You can build and test a real web service.",
   "startTitle": "FastAPI tutorial",
   "startUrl": "https://fastapi.tiangolo.com/tutorial/"
  },
  {
   "n": 2,
   "title": "India data story",
   "week": 6,
   "color": "#ce82ff",
   "desc": "A public dataset cleaned and explored: five charts, five written insights, one clear recommendation.",
   "proves": "You can reason with messy, real data.",
   "startTitle": "data.gov.in datasets",
   "startUrl": "https://www.data.gov.in/"
  },
  {
   "n": 3,
   "title": "Churn predictor app",
   "week": 9,
   "color": "#ce82ff",
   "desc": "A scikit-learn pipeline with the right metric for imbalanced data and a live Streamlit demo.",
   "proves": "You can train, evaluate and ship a model.",
   "startTitle": "Kaggle Intermediate ML",
   "startUrl": "https://www.kaggle.com/learn/intermediate-machine-learning"
  },
  {
   "n": 4,
   "title": "Photo classifier on Spaces",
   "week": 12,
   "color": "#ff4b4b",
   "desc": "A pretrained CNN fine-tuned on photos you took, published as a free Gradio demo on Hugging Face.",
   "proves": "You can train deep nets and publish them.",
   "startTitle": "fast.ai lessons 1-2",
   "startUrl": "https://course.fast.ai/"
  },
  {
   "n": 5,
   "title": "Tiny GPT from scratch",
   "week": 13,
   "color": "#ff4b4b",
   "desc": "A character-level transformer you wrote and trained yourself, with temperature and sampling controls.",
   "proves": "You understand LLMs from the inside.",
   "startTitle": "Karpathy's Let's build GPT",
   "startUrl": "https://www.youtube.com/watch?v=kCc8FmEb1nY"
  },
  {
   "n": 6,
   "title": "Document-to-JSON extractor",
   "week": 16,
   "color": "#ff9600",
   "desc": "Resumes or invoices turned into validated JSON with Pydantic, retries and a 20-document test set.",
   "proves": "You can make model output reliable.",
   "startTitle": "Instructor docs",
   "startUrl": "https://python.useinstructor.com/"
  },
  {
   "n": 7,
   "title": "Notes RAG with citations",
   "week": 18,
   "color": "#ffc800",
   "desc": "Chat with your notes: hybrid search, reranking, citations and a 30-question eval.",
   "proves": "You can ground answers and measure them.",
   "startTitle": "LangChain semantic search tutorial",
   "startUrl": "https://docs.langchain.com/oss/python/langchain/knowledge-base"
  },
  {
   "n": 8,
   "title": "Research agent",
   "week": 19,
   "color": "#58cc02",
   "desc": "A LangGraph agent with search and calculator tools, hard step limits and a trace of every step.",
   "proves": "You can build agents that do not loop forever.",
   "startTitle": "Introduction to LangGraph",
   "startUrl": "https://academy.langchain.com/courses/intro-to-langgraph"
  },
  {
   "n": 9,
   "title": "MCP server for a real API",
   "week": 20,
   "color": "#58cc02",
   "desc": "Your own MCP server for GitHub, Notion or a calendar, used by an agent that asks before acting.",
   "proves": "You can give models safe, real tools.",
   "startTitle": "Build an MCP server",
   "startUrl": "https://modelcontextprotocol.io/docs/develop/build-server"
  },
  {
   "n": 10,
   "title": "LoRA fine-tune",
   "week": 21,
   "color": "#1cb0f6",
   "desc": "A small open model tuned for one narrow task, with a before / after eval and a model card.",
   "proves": "You know when fine-tuning pays off.",
   "startTitle": "Unsloth fine-tuning guide",
   "startUrl": "https://unsloth.ai/docs/get-started/fine-tuning-llms-guide"
  },
  {
   "n": 11,
   "title": "Production RAG service",
   "week": 23,
   "color": "#37464f",
   "desc": "Your RAG app in Docker with tracing, evals on every change, guardrails and a cost dashboard.",
   "proves": "You can run AI in production.",
   "startTitle": "Langfuse tracing docs",
   "startUrl": "https://langfuse.com/docs"
  },
  {
   "n": 12,
   "title": "Capstone product",
   "week": 24,
   "color": "#ff4b4b",
   "desc": "One end-to-end AI product used by real people, with a demo video and usage numbers.",
   "proves": "You can own a product, not a notebook.",
   "startTitle": "A Field Guide to Improving AI Products",
   "startUrl": "https://hamel.dev/blog/posts/field-guide/"
  }
 ]
};
