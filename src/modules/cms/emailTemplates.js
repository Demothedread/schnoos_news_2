const TEMPLATE_LIST = [
  {
    id: "news-to-report",
    title: "News to Report",
    subject: "Schnoos News: News to Report",
    body: `NEWS TO REPORT (super simple)

Hi family!
Tell us your news in short, easy words.

1) What happened?
2) Who was there?
3) Where did it happen?
4) Why was it fun or important?
5) What should we put in Schnoos News?

You can write 3 to 6 short sentences.`
  },
  {
    id: "grown-up-profile",
    title: "Grown-Up Profile (20 Questions)",
    subject: "Schnoos News: Grown-Up Profile",
    body: `GROWN-UP PROFILE

Pick one grown-up in the family and answer these 20 questions.

1) What is your full name?
2) What do kids call you?
3) Where did you grow up?
4) What did you want to be when you were little?
5) What do you do now?
6) What is something you are proud of?
7) What is one life lesson you always share?
8) What is your favorite family tradition?
9) What meal do you make best?
10) What song always makes you smile?
11) What hobby helps you relax?
12) What is your funniest family memory?
13) What is one thing you are still learning?
14) What was your first job?
15) What is your dream vacation?
16) What is your go-to snack?
17) What is one thing people might be surprised to know?
18) Which family phrase do you say the most?
19) What advice would you give your younger self?
20) What do you hope our family remembers most about you?`
  },
  {
    id: "recipe-of-the-month",
    title: "Recipe of the Month",
    subject: "Schnoos News: Recipe of the Month",
    body: `RECIPE OF THE MONTH

Recipe Name:
Servings:
Prep Time:
Cook Time:

INGREDIENTS
- 
- 
- 
- 

STEPS
1) 
2) 
3) 
4) 
5) 

Helpful Notes for Adults (substitutions, storage, reheating):
`
  },
  {
    id: "one-big-idea",
    title: "My One Big Idea",
    subject: "Schnoos News: My One Big Idea",
    body: `MY ONE BIG IDEA

Name:
Age (optional):

My big idea is:

Why this idea matters:

How it could help people:

What I need to start:

First step I can take this month:
`
  },
  {
    id: "sibling-says",
    title: "My Sibling Says (20 Questions)",
    subject: "Schnoos News: My Sibling Says",
    body: `MY SIBLING SAYS

Interview one sibling. Ask all 20 questions.

1) What is your favorite breakfast?
2) What is your favorite game right now?
3) What is one thing you are really good at?
4) What is one thing you want to learn?
5) What is your favorite family memory?
6) What is your favorite holiday and why?
7) What makes you laugh every time?
8) What do you like to do outside?
9) What is your dream pet?
10) What is your favorite book or story?
11) What is your favorite movie?
12) What is your favorite snack?
13) What is your favorite subject or topic?
14) If you could build anything, what would it be?
15) What is one kind thing someone did for you lately?
16) What is one kind thing you did for someone else?
17) What is your biggest goal this year?
18) What is one rule you would make for the family?
19) What is something people don’t know about you yet?
20) What should Schnoos News readers know about you this month?`
  }
];

export const getTemplateList = () => TEMPLATE_LIST;

export const getTemplateById = (templateId) => TEMPLATE_LIST.find((template) => template.id === templateId) || TEMPLATE_LIST[0];
