const RecipeApp = (() => {

const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta",
        // NEW: Add ingredients array
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale",
            "4 large eggs",
            "100g Pecorino Romano cheese",
            "Black pepper",
            "Salt"
        ],
        // NEW: Add steps array (can include nested steps)
        steps: [
            "Bring a large pot of salted water to boil",
            "Cook spaghetti according to package directions",
            {
                text: "Prepare the sauce",
                substeps: [
                    "Beat eggs in a bowl",
                    "Grate cheese and add to eggs",
                    "Add generous black pepper",
                    "Mix well"
                ]
            },
            "Cook pancetta in a large pan until crispy",
            "Drain pasta, reserve 1 cup pasta water",
            "Add hot pasta to pancetta pan (off heat)",
            "Quickly mix in egg mixture, adding pasta water to create creamy sauce",
            "Serve immediately with extra cheese"
        ]
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry",
        ingredients: [
            "500g boneless chicken",
            "1 cup yogurt",
            "2 tbsp tikka masala paste",
            "1 cup tomato puree",
            "1/2 cup cream",
            "1 onion (chopped)",
            "2 cloves garlic (minced)",
            "1 tsp ginger (grated)",
            "Salt",
            "Oil"
        ],

        steps: [
            "Marinate chicken with yogurt and tikka masala paste for 1 hour",
            "Heat oil in a pan and cook marinated chicken until browned",
            {
                text: "Prepare the sauce",
                substeps: [
                    "Saute onions until golden",
                    "Add garlic and ginger",
                    "Add tomato puree and cook for 5 minutes",
                    "Stir in cream and salt"
                ]
            },
            "Add cooked chicken to sauce",
            "Simmer for 10-15 minutes",
            "Serve hot with rice or naan"
        ]

    },
    // TODO: Add 6 more recipe objects following the same structure
    {
        id: 3,
        title: "Homemade Croissants",
        time: 180,
        difficulty: "hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking",
        ingredients: [
            "4 cups all-purpose flour",
            "1/4 cup sugar",
            "1 tbsp yeast",
            "1 1/2 cups milk",
            "250g cold butter",
            "1 tsp salt",
            "1 egg (for egg wash)"
        ],

        steps: [
            "Mix flour, sugar, yeast, and salt",
            "Add warm milk and knead into dough",
            "Let dough rise for 1 hour",
            {
                text: "Layer the butter",
                substeps: [
                    "Roll dough into rectangle",
                    "Place butter slab in center",
                    "Fold and roll dough",
                    "Repeat folding 3 times with chilling"
                ]
            },
            "Shape into triangles and roll into croissants",
            "Brush with egg wash",
            "Bake at 200°C for 15-20 minutes"
        ]

    },
    {
        id: 4,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad",
        ingredients: [
            "2 tomatoes (chopped)",
            "1 cucumber (sliced)",
            "1/2 red onion (sliced)",
            "1/2 cup olives",
            "100g feta cheese",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt",
            "Oregano"
        ],

        steps: [
            "Combine tomatoes, cucumber, and onion in a bowl",
            "Add olives and feta cheese",
            {
                text: "Prepare dressing",
                substeps: [
                    "Mix olive oil and lemon juice",
                    "Add salt and oregano",
                    "Whisk well"
                ]
            },
            "Pour dressing over salad",
            "Toss gently and serve fresh"
        ]

    },
    {
        id: 5,
        title: "Beef Wellington",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat",
        ingredients: [
            "500g beef tenderloin",
            "250g mushrooms",
            "2 tbsp mustard",
            "6 slices prosciutto",
            "1 sheet puff pastry",
            "1 egg (beaten)",
            "Salt and pepper",
            "Olive oil"
        ],

        steps: [
            "Season beef with salt and pepper",
            "Sear beef in hot pan until browned",
            {
                text: "Prepare mushroom duxelles",
                substeps: [
                    "Finely chop mushrooms",
                    "Cook until moisture evaporates",
                    "Season and cool"
                ]
            },
            "Spread mustard over beef",
            "Wrap beef with prosciutto and mushroom mixture",
            "Cover with puff pastry",
            "Brush with egg wash",
            "Bake at 200°C for 25-30 minutes"
        ]

    },
    {
        id: 6,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian",
        ingredients: [
            "1 cup broccoli",
            "1 carrot (sliced)",
            "1 bell pepper (sliced)",
            "1 cup mushrooms",
            "2 tbsp soy sauce",
            "1 tbsp oil",
            "2 cloves garlic",
            "Salt and pepper"
        ],

        steps: [
            "Heat oil in a wok",
            "Add garlic and saute briefly",
            "Add vegetables and stir fry on high heat",
            {
                text: "Season the stir fry",
                substeps: [
                    "Add soy sauce",
                    "Add salt and pepper",
                    "Toss well"
                ]
            },
            "Cook for 5-7 minutes",
            "Serve hot"
        ]

    },
    {
        id: 7,
        title: "Pad Thai",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles",
        ingredients: [
            "200g rice noodles",
            "200g shrimp or chicken",
            "2 eggs",
            "2 tbsp fish sauce",
            "1 tbsp tamarind paste",
            "1 tbsp sugar",
            "Bean sprouts",
            "Crushed peanuts",
            "2 tbsp oil"
        ],

        steps: [
            "Soak rice noodles in warm water",
            "Heat oil and cook shrimp or chicken",
            "Push to side and scramble eggs",
            {
                text: "Prepare sauce",
                substeps: [
                    "Mix fish sauce",
                    "Add tamarind paste",
                    "Add sugar and stir"
                ]
            },
            "Add noodles and sauce to pan",
            "Toss everything together",
            "Top with bean sprouts and peanuts",
            "Serve with lime wedges"
        ]

    },
    {
        id: 8,
        title: "Margherita Pizza",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza",
        ingredients: [
            "1 pizza dough base",
            "1/2 cup tomato sauce",
            "200g fresh mozzarella",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt"
        ],

        steps: [
            "Preheat oven to 220°C",
            "Spread tomato sauce over dough",
            "Add sliced mozzarella evenly",
            {
                text: "Bake the pizza",
                substeps: [
                    "Place pizza in oven",
                    "Bake for 12-15 minutes",
                    "Remove when crust is golden"
                ]
            },
            "Add fresh basil leaves",
            "Drizzle olive oil before serving"
        ]

        
    }
];

let currentFilter = "all";
let currentSort = "none";

const container = document.querySelector("#recipe-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortButtons = document.querySelectorAll(".sort-btn");

const renderSteps = (steps, level = 0) => {
    const listClass = level === 0 ? "steps-list" : "substeps-list";
    let html = `<ol class="${listClass}">`;

    steps.forEach(step => {
        if (typeof step === "string") {
            html += `<li>${step}</li>`;
        } else {
            html += `<li>${step.text}`;
            if (step.substeps) {
                html += renderSteps(step.substeps, level + 1);
            }
            html += `</li>`;
        }
    });

    html += `</ol>`;
    return html;
};

const createCard = recipe => `
    <div class="recipe-card">
        <h3>${recipe.title}</h3>
        <div class="recipe-meta">
            <span>⏱️ ${recipe.time} min</span>
            <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
        </div>
        <p>${recipe.description}</p>

        <div class="card-actions">
            <button class="toggle-btn" data-id="${recipe.id}" data-type="steps">📋 Show Steps</button>
            <button class="toggle-btn" data-id="${recipe.id}" data-type="ingredients">🥗 Show Ingredients</button>
        </div>

        <div class="steps-container" data-id="${recipe.id}">
            ${renderSteps(recipe.steps)}
        </div>

        <div class="ingredients-container" data-id="${recipe.id}">
            <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        </div>
    </div>
`;

const applyFilter = list => {
    if (currentFilter === "all") return list;
    if (currentFilter === "quick") return list.filter(r => r.time <= 30);
    return list.filter(r => r.difficulty === currentFilter);
};

const applySort = list => {
    if (currentSort === "name") return [...list].sort((a,b)=>a.title.localeCompare(b.title));
    if (currentSort === "time") return [...list].sort((a,b)=>a.time-b.time);
    return list;
};

const updateDisplay = () => {
    let list = applyFilter(recipes);
    list = applySort(list);
    container.innerHTML = list.map(createCard).join("");
};

const handleToggle = e => {
    if (!e.target.classList.contains("toggle-btn")) return;

    const id = e.target.dataset.id;
    const type = e.target.dataset.type;

    const section = document.querySelector(`.${type}-container[data-id="${id}"]`);
    section.classList.toggle("visible");

    e.target.textContent = section.classList.contains("visible")
        ? (type === "steps" ? "📋 Hide Steps" : "🥗 Hide Ingredients")
        : (type === "steps" ? "📋 Show Steps" : "🥗 Show Ingredients");
};

const init = () => {
    filterButtons.forEach(btn =>
        btn.addEventListener("click", e => {
            currentFilter = e.target.dataset.filter;
            updateDisplay();
        })
    );

    sortButtons.forEach(btn =>
        btn.addEventListener("click", e => {
            currentSort = e.target.dataset.sort;
            updateDisplay();
        })
    );

    container.addEventListener("click", handleToggle);

    updateDisplay();
};

return { init };

})();

RecipeApp.init();
