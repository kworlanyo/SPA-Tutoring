# Vite

This is a simple exercise to practice "bootstrapping" a React project with `vite`.

## What you will be doing

This exercise does not contain coding (this will come in today's other exercises). Instead, it contains terminal commands and questions to help you become more familiar with `vite`. Add your answers directly here in the `README` file.

## Tasks

### Task 1

- Open a terminal in this folder (i.e. where this `README` file is)
- Run `npm create vite@latest my-project`
- Select `React` as the framework and `JavaScript` as the variant
- Don't do anything else yet
- Run `find my-project -type f` in the Terminal

    - Q1: What did this command do?
        - A: Lists all the files in my-project

    - Q2: How many files are inside my-project?
        - A: 12

- Run `find my-project -type d` in the Terminal

    - Q3: What did this command do?
        - A: Lists all the directories in my-project

    - Q4: How many directories are inside my-project?
        - A: 3 (2 children / 1 grandchild)

### Task 2

- In the terminal, move to the `my-project` directory and test that the project works. To do this, you will need to remember how to:

    - Use `npm` to install all of the project's dependencies
    - Use `npm` to start a dev server
    - Open the project in the browser

- When you are ready, answer the following questions:
    
    - Q5: What two images are displayed when you open the project in the browser? (If you are not sure, you may be able to find a clue in `src/App.jsx`!)
        - A: The Vite and React logos

    - Q6: What port is the project running in?
        - A: 5173 (which spells out SITE in leetspeak! Or alternatively VITE if you think of 5 as the Roman numeral V)

    - Q7: What is the first line of text you see in the terminal after the project started?
        - A: "VITE v5.1.4 ready in 203 ms" (**note:** your time in ms may be different)

### Task 3

- Answer the remaining questions - these issues were addressed this morning, but feel free to use the internet to research any answers you are unsure of
- Don't spend a long time on this: there is no need to dig deep
- Feel free to use the current project to try out any commands yourself 
- Use your own words when answering

    - Q8: What is the difference between the `public` and `src` folders?
        - A: Files in public are served directly by the server and kept unchanged during build. Files in src are processed during build.
    
    - Q9. Why is hot module replacement helpful?
        - A: When you save changes to your project, the parts of your project you have changed (not the whole project) are reloaded, so the changes can be seen in the browser. This is automatic: you do not need to reload your browser or restart the project to see your changes - helpful! 

    - Q10: What command lets you test your project in a development environment (with hot module replacement)? 
        - A: `npm run dev`

    - Q11: What happens when you run the command `npm run build`?
        - A: Vite generates a compressed and production optimized version of your site
    
    - Q12. After you have built your project, can you use Live Server to run `dist/index.html`? (Try it yourself to see...)
        - A: No!

    - Q13: How can you see a preview of your built project (**note:** without hot module replacement)?
        - A: `npm run preview`
