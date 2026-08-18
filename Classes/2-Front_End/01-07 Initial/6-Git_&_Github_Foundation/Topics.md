# Day 6 - Git & Github Foundation

1. How Version controlling in Software development is done?
2. Normal folder / directory vs git repository / working directory
3. Different stages in version controlling using git = folder -> working directory -> stagging area (index area) -> local repository -> Remote repository
4. U (Untracked), A (Index Added), M (Modified)
5. How git works ? What do git manages? -> What, when, who !

```bash
git config --global user.name "xyz xyz"
git config --global user.email "xyz@x.com"

git init
git status
git add file.ext , git add .

git diff
git diff --staged
git restore --staged file.ext
git restore file.ext

git commit -m "commit msg"

git log
git log --oneline
git show abs5ss2

git branch
git branch new-branch-1
git checkout new-branch-1
git checkout -b new-branch-2
git merge new-branch-1
git branch -d new-branch-1

git remote add origin repo_github_url
git remote -v
git push -u origin main

git pull origin main
git fetch origin

git clone repo_github_url
```
