const questions = [
    {
        question: "How many people worldwide lack access to safely managed drinking water?",
        answers: ["1 billion", "2 billion", "500 million", "3 billion"],
        correct: 1
    },
    {
        question: "What percentage of the world's population lacks access to safely managed sanitation?",
        answers: ["25%", "35%", "46%", "15%"],
        correct: 2
    },
    {
        question: "In what year was charity: water founded?",
        answers: ["2005", "2006", "2007", "2008"],
        correct: 1
    },
    {
        question: "Who founded charity: water?",
        answers: ["Matt Damon", "Scott Harrison", "Gary White", "Ryan Seacrest"],
        correct: 1
    },
    {
        question: "How many people die each day from water-related diseases?",
        answers: ["1,000", "2,000", "3,000", "4,000"],
        correct: 0
    },
    {
        question: "What percentage of charity: water's donations go directly to water projects?",
        answers: ["85%", "90%", "95%", "100%"],
        correct: 3
    },
    {
        question: "How far do women and children in developing countries typically walk to collect water?",
        answers: ["1-2 miles", "3-4 miles", "5-6 miles", "7-8 miles"],
        correct: 1
    },
    {
        question: "What is the leading cause of death for children under 5 worldwide?",
        answers: ["Malnutrition", "Water-related diseases", "Malaria", "Pneumonia"],
        correct: 1
    },
    {
        question: "How many schools worldwide lack access to basic water services?",
        answers: ["1 in 3", "1 in 4", "1 in 5", "1 in 6"],
        correct: 0
    },
    {
        question: "What technology does charity: water use to track their water projects?",
        answers: ["GPS coordinates", "Satellite imagery", "Remote sensors", "All of the above"],
        correct: 3
    },
    {
        question: "In which continent does charity: water focus most of their efforts?",
        answers: ["Asia", "Africa", "South America", "All continents equally"],
        correct: 1
    },
    {
        question: "How much water does the average American use per day?",
        answers: ["50 gallons", "80 gallons", "100 gallons", "150 gallons"],
        correct: 2
    },
    {
        question: "How much water do people in water-scarce areas typically use per day?",
        answers: ["2-5 gallons", "10-15 gallons", "20-25 gallons", "30-35 gallons"],
        correct: 0
    },
    {
        question: "What is the main cause of water scarcity in many developing countries?",
        answers: ["Climate change", "Lack of infrastructure", "Pollution", "All of the above"],
        correct: 3
    },
    {
        question: "How many children miss school each day due to water-related illnesses?",
        answers: ["200,000", "443,000", "500,000", "1 million"],
        correct: 1
    },
    {
        question: "What percentage of the world's wastewater is discharged without treatment?",
        answers: ["60%", "70%", "80%", "90%"],
        correct: 2
    },
    {
        question: "How many countries has charity: water funded projects in?",
        answers: ["15", "20", "29", "35"],
        correct: 2
    },
    {
        question: "What is the average cost to provide one person with clean water for life through charity: water?",
        answers: ["$20", "$30", "$40", "$50"],
        correct: 1
    },
    {
        question: "What percentage of illness in developing countries is linked to poor water and sanitation?",
        answers: ["60%", "70%", "80%", "90%"],
        correct: 2
    },
    {
        question: "How many people have been reached with clean water through charity: water's projects?",
        answers: ["8 million", "12 million", "16 million", "20 million"],
        correct: 2
    },
    {
        question: "What is the primary reason children (especially girls) drop out of school in water-scarce areas?",
        answers: ["Lack of toilets", "Time spent collecting water", "Water-related illness", "All of the above"],
        correct: 3
    },
    {
        question: "How long can a properly maintained water well serve a community?",
        answers: ["10 years", "15 years", "20 years", "25+ years"],
        correct: 3
    },
    {
        question: "What is the UN Sustainable Development Goal for water?",
        answers: ["Clean water for all by 2025", "Clean water and sanitation for all by 2030", "Reduce water waste by 50%", "Build 1 million wells"],
        correct: 1
    },
    {
        question: "What percentage of the world's population lives in areas experiencing high water stress?",
        answers: ["25%", "35%", "40%", "50%"],
        correct: 2
    },
    {
        question: "How much time do women spend collecting water each day in water-scarce areas?",
        answers: ["2-4 hours", "4-6 hours", "6-8 hours", "8-10 hours"],
        correct: 1
    },
    {
        question: "What is the most common water-related disease?",
        answers: ["Cholera", "Typhoid", "Diarrhea", "Dysentery"],
        correct: 2
    },
    {
        question: "How many people lack basic handwashing facilities at home?",
        answers: ["2 billion", "3 billion", "4 billion", "5 billion"],
        correct: 1
    },
    {
        question: "What technology is most commonly used in charity: water's well projects?",
        answers: ["Hand pumps", "Solar pumps", "Electric pumps", "Wind pumps"],
        correct: 0
    },
    {
        question: "In sub-Saharan Africa, what percentage of the population lacks access to clean water?",
        answers: ["30%", "40%", "50%", "60%"],
        correct: 2
    },
    {
        question: "How many healthcare facilities worldwide lack basic water services?",
        answers: ["1 in 4", "1 in 3", "1 in 2", "2 in 3"],
        correct: 0
    },
    {
        question: "What is the main source of funding for charity: water's operations?",
        answers: ["Government grants", "Corporate partnerships", "Private donors covering overhead", "Project donations"],
        correct: 2
    },
    {
        question: "How deep are most water wells drilled by charity: water?",
        answers: ["50-100 feet", "100-200 feet", "200-300 feet", "300+ feet"],
        correct: 1
    },
    {
        question: "What percentage of people without clean water live in rural areas?",
        answers: ["60%", "70%", "80%", "90%"],
        correct: 2
    },
    {
        question: "How many people could be lifted out of poverty with universal access to water and sanitation?",
        answers: ["100 million", "200 million", "300 million", "500 million"],
        correct: 3
    },
    {
        question: "What is the economic return for every $1 invested in water and sanitation?",
        answers: ["$2", "$4", "$6", "$8"],
        correct: 1
    },
    {
        question: "How much does diarrheal disease cost developing countries annually?",
        answers: ["$5 billion", "$12 billion", "$18 billion", "$25 billion"],
        correct: 1
    },
    {
        question: "What percentage of the world's conflicts are linked to water scarcity?",
        answers: ["25%", "40%", "60%", "80%"],
        correct: 2
    },
    {
        question: "How many people are displaced annually due to water-related disasters?",
        answers: ["10 million", "20 million", "30 million", "40 million"],
        correct: 1
    },
    {
        question: "What is the minimum amount of water needed per person per day for survival?",
        answers: ["5 liters", "15 liters", "20 liters", "25 liters"],
        correct: 2
    },
    {
        question: "How many jobs could be created globally through universal access to water and sanitation?",
        answers: ["500,000", "1 million", "1.5 million", "2 million"],
        correct: 2
    },
    {
        question: "What percentage of rural areas in developing countries lack access to improved sanitation?",
        answers: ["50%", "60%", "70%", "80%"],
        correct: 2
    },
    {
        question: "How much does it cost charity: water to drill a typical well?",
        answers: ["$5,000", "$8,000", "$12,000", "$15,000"],
        correct: 2
    },
    {
        question: "What is the main cause of infant mortality in developing countries?",
        answers: ["Birth complications", "Water-related diseases", "Malnutrition", "Lack of vaccines"],
        correct: 1
    },
    {
        question: "How many women and girls are responsible for water collection in their households?",
        answers: ["60%", "70%", "80%", "90%"],
        correct: 2
    },
    {
        question: "What percentage of schools in least developed countries lack basic drinking water?",
        answers: ["30%", "40%", "50%", "60%"],
        correct: 2
    },
    {
        question: "How long does it typically take to complete a charity: water project?",
        answers: ["6 months", "12 months", "18 months", "24 months"],
        correct: 2
    },
    {
        question: "What is the primary water source for most rural communities before getting a well?",
        answers: ["Rivers", "Lakes", "Unprotected springs", "Rainwater"],
        correct: 2
    },
    {
        question: "How many people die annually from lack of access to clean water and sanitation?",
        answers: ["500,000", "800,000", "1.2 million", "2 million"],
        correct: 2
    },
    {
        question: "What percentage of charity: water's wells are still functioning after 5 years?",
        answers: ["85%", "90%", "95%", "98%"],
        correct: 1
    },
    {
        question: "How much can a family's income increase when they have access to clean water nearby?",
        answers: ["10%", "20%", "30%", "40%"],
        correct: 1
    }
];