# Promineo Tech: Front-End Development Bootcamp Files

### Purpose:
The purpose of this repository is to backup all I've been learning in the bootcamp. 
Having this repository helps me utilize git commands more frequently, which is great.


##### Some basic Git commands to get started are:

- echo "***repository-name***" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- ***git remote add origin https://github.com/username/repository-name.git***
- git push -u origin main

#### Cloning OR Steps to pull, rebase, commit, push 

1. Find a good spot on your computer, open Git Bash there, and clone the repository to your computer (you may need to log in)
```
git clone https://your-repo-name.git
```
2. Open the repository folder in VS Code
3. Create a folder with your name and inside that folder, create a .html and a .js file
4. Go into the .html file, type ! and hit Enter.
5. Add this line to your HTML file and replace your-js-file.js with the name of your .js file:
```
<script src=”your-js-file.js”></script>
```
6. Commit your changes
```
git add .
git commit -m “Added html and js”
```
7. Pull down any commits pushed up by others
```
git pull --rebase origin main
```
8. Push your commit to the online repository
```
git push -u origin main
```
9. Check that your folder and files are showing up in the online repository
10. Add some Javascript to your .js file. Maybe something like this:
```
console.log(“Hello developers!”);
```
11. Commit your new changes
```
git add .
git commit -m “Added console logging”
```
12. Pull down any commits pushed up by others
```
git pull --rebase
```
13. Push your commit to the online repository
```
git push
```
