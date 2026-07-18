# Git & Github

# Git

Its a version control tool, which is used to track changes in files of an repository. It saves snapshots of stable changes and enable us to go back to older versions.

### Commit

Have unique SHA id, Author info, Timestamp, Pointer to parent commit.

### Git Working Areas

1. Working Directory - Jaha files edit krte hai.
2. Staging Area - Changed files ready to be committed. `git add`
3. Local Repository - Committed files snapshot. `git commit`
4. Remote Repository - Commited files snapshot online available on github. `git push`

### Branches

Default branch is `main` previously `master`, When we create branches then the commit history starts seperated from the main commit history thus keep the branch work seperated by main branch, and helps keep the main branch most stable and working.

#### Merge vs Rebase

```
main
A --- B --- C
feature
      \
       D --- E
```

- Git Merge is used to combine the changes from one branch into another without changing the existing commit history. Git creates a new **merge commit** that connects both branches.
- Usage - Switch to the target branch, Merge another branch into it
- Preserve the complete history. Safe because it doesn't rewrite commit history.

```bash
git checkout main
git merge feature
```

```
A --- B --- C -------- M
      \               /
       D -------- E --
```

OR

- Git Rebase moves your branch on top of another branch by replaying your commits one by one. It creates a clean, linear commit history without creating a merge commit.
- Usage - Switch to your feature branch, Rebase it onto main, Then merge into main
- Before creating a Pull Request. Keep commit history clean and linear.

```bash
git checkout feature
git rebase main
git checkout main
git merge feature
```

```
A --- B --- C --- D' --- E'
```

### Creating Branch

```bash
git branch feature-branch
git checkout feature-branch

# Or
git checkout -b feature-branch

# To delete branch
git branch -d feature-branch

# Remote se bhi delete krna
git push origin --delete feature-branch

# Merge branches, first go to target branch `git checkout main`
git merge feature-branch

# Rebase branch, go to feature branch
git checkout feature-branch
git rebase main
git checkout main
git merge feature-branch
```

### Common git commands

```bash
# Initiate directory as git repository
git init

# Check for modified files
git status

# Check the changes
git diff

# Add modified file to Staging area / tracking
git add filename.extension

# OR Add all modified files in staging area
git add .

# Commit all stagged files
git commit -m "commit message"

# Push changes to remote, after `git push -u origin main`
git push

# Pull remote commits
git pull

# Stash changes
git stash
# Unstash changes
git stas pop

# Edit most recent commit (Can edit message, or add/remove file, Use only for local commit)
git commit --amend
#OR for forgottnen file
git add forgotten-file.js
git commit --amend --no-edit

# Undo last commit (Changes workinf directory me rhenge)
git reset --soft HEAD~1

# Remove changes, and undo last commit
git reset --hard HEAD~1


```

### Setup

```bash
Check version
git --version

#Set user configurations
git config --global user.name "Tumhara Naam"
git config --global user.email "tumhara.email@example.com"

# Check configs
git config --list
```

Setup SSH key

```bash
# Check is SSH key already exists of not
ls -al ~/.ssh

# Generate a New SSH Key
ssh-keygen -t ed25519 -C "your_github_email@example.com"
# Press Enter to set default save location, Enter to skip passphrase

# Start SSH Agent
eval "$(ssh-agent -s)"

# Add SSH key to SSH Agent
ssh-add ~/.ssh/id_ed25519

# Display the public key (Copy entire output)
cat ~/.ssh/id_ed25519.pub

# Add SSH key to Github
# Github > Settings > SSH & GPG Keys > New SSH Key > (Enter Title) > (Paste public key) > Add SSH Key

# Test SSH Key
ssh -T git@github.com
```

Connect Local git repo to Github, and push krna

```bash
git remote add origin git@github.com:username/my-first-project.git

# Setting current branch name to main
git branch -M main

# -u (Upstream) se main branch ko origin/main branch se link kr diya.
git push -u origin main
```

---

## Github

Its a website / Platform which is used to upload repositories online and make them remotely accessile to everyone. Its helps in collaborative coding.

### Jargons

- Repository (Repo) = Project ka folder jisme git tracking enables hai.
- Commit = Ek saved snapshot of changes in repository.
- Branch = Main repository ki ek parallal copy jisme kiye gaye changes main branch se seperated hote hai.
- Remote = Local Repo ka online version.
- Merge = 2 Branches ko eksath merge krna.

### PR (Pull Request)

- Github ka feature, PR is a request for project admin to review your code changes, and if fine then merge it into main branch.

### Fork vs Clone

- Fork - Kisi github repo ki apne github account me copy banana, Used for open source contribution.
- Clone - Kisi github repo ko apne local machine pe lana.

---

# Crash commands

```bash
#  Setup & Configuration
git --version                                    # Git installed hai ya nahi, version check
git config --global user.name "Tumhara Naam"     # Global username set
git config --global user.email "email@x.com"     # Global email set
git config --list                                # Saari config settings dekho
git config --global core.editor "code --wait"    # Default editor set (VS Code example)
git config --global init.defaultBranch main      # Naye repo mein default branch "main" rakho
git config --global alias.st status              # Shortcut alias banana (git st = git status)

# SSH Setup (GitHub se secure connect)
ssh-keygen -t ed25519 -C "email@x.com"           # SSH key generate karo
cat ~/.ssh/id_ed25519.pub                        # Public key copy karne ke liye print karo
ssh -T git@github.com                            # Connection test karo

# Repository Banana / Lena
git init                                         # Current folder ko Git repo banao
git init <folder-name>                           # Naya folder banake usme repo init karo
git clone <repo-url>                             # Remote repo ko local mein download karo
git clone <repo-url> <folder-name>                # Custom folder name se clone karo
git clone --depth 1 <repo-url>                   # Sirf latest commit clone karo (fast, history nahi)

# Status, Changes Dekhna & Compare Karna
git status                                       # Kaunsi files changed/untracked/staged hain
git status -s                                    # Short/compact format mein status
git diff                                         # Unstaged changes line-by-line dekho
git diff --staged                                # Staged changes dekho (jo commit hone waali hain)
git diff <branch1> <branch2>                     # Do branches ka comparison
git diff <commit1> <commit2>                     # Do commits ka comparison
git show <commit-hash>                           # Ek specific commit ka pura detail/diff
git log                                           # Pura commit history
git log --oneline                                # Compact, ek-line-per-commit history
git log --oneline --graph --all                  # Visual branch tree ke saath history
git log -p                                       # History with full diffs
git log --author="Naam"                          # Sirf ek specific author ki commits
git log --since="2 days ago"                     # Time-based filter
git blame <file>                                 # Har line kisne, kab likhi (debugging)

# Changes Save Karna (Add → Commit)
git add <file-name>                              # Specific file staging area mein add
git add .                                        # Saari changed/new files add (careful!)
git add -p                                       # Interactive add — line-by-line select karke
git restore --staged <file>                      # File ko staging se hatao (unstage)
git commit -m "message"                          # Staged changes ko commit karo
git commit -am "message"                         # Add + commit ek saath (sirf tracked files ke liye)
git commit --amend                               # Last commit ka message/content edit karo
git commit --amend --no-edit                     # Last commit mein file add karo, message same rakho

# Branching
git branch                                       # Saari local branches list karo
git branch -a                                    # Local + remote saari branches
git branch <branch-name>                         # Naya branch banao (switch nahi karta)
git checkout <branch-name>                       # Existing branch pe switch karo
git checkout -b <branch-name>                    # Naya branch banao AUR usme switch karo
git switch <branch-name>                         # (Newer command) branch switch karo
git switch -c <branch-name>                      # (Newer command) naya branch bana ke switch
git branch -m <new-name>                         # Current branch ka naam rename karo
git branch -d <branch-name>                      # Branch delete karo (safe, sirf merged wali)
git branch -D <branch-name>                      # Branch force delete karo (⚠️ unmerged bhi delete)
git push origin --delete <branch-name>           # Remote (GitHub) se branch delete karo

# Merging & Rebasing
git merge <branch-name>                          # Current branch mein doosri branch merge karo
git merge --no-ff <branch-name>                  # Merge commit force karo (history clear rehti hai)
git merge --abort                                # Conflict ke time merge cancel karo
git rebase <branch-name>                          # Current branch ko doosri branch ke top pe replay
git rebase -i HEAD~3                             # Interactive rebase — last 3 commits edit/squash/reorder
git rebase --continue                            # Conflict resolve karne ke baad rebase continue
git rebase --abort                               # Rebase cancel karo
git cherry-pick <commit-hash>                    # Kisi doosri branch ki ek specific commit yaha le aao

# Remote Repository (GitHub) ke saath Kaam
git remote -v                                    # Saare connected remotes dekho (URL ke saath)
git remote add origin <repo-url>                 # Local repo ko GitHub repo se jodo
git remote remove origin                         # Remote connection hatao
git remote set-url origin <new-url>              # Remote URL change karo (SSH/HTTPS switch)
git push                                         # Changes GitHub pe bhejo (upstream set hone ke baad)
git push -u origin <branch-name>                 # Pehli baar push + upstream set karo
git push origin <branch-name>                    # Specific branch push karo
git push --force                                 # ⚠️ Force push (remote history overwrite — dangerous)
git push --force-with-lease                      # Safer force push (agar kisi aur ne push kiya to rok dega)
git push --tags                                  # Saare tags GitHub pe push karo
git fetch                                        # Remote se latest info download karo (merge nahi karta)
git fetch --all                                  # Saare remotes se fetch karo
git pull                                         # Fetch + merge ek saath (latest code le aao)
git pull --rebase                                # Pull karo lekin merge commit ki jagah rebase karo

# Undo & Fix Mistakes
git restore <file>                               # File mein uncommitted changes discard karo
git restore --staged <file>                      # Staged file ko unstage karo (changes rehte hain)
git reset --soft HEAD~1                          # Last commit undo, changes staged rehte hain
git reset --mixed HEAD~1                         # Last commit undo, changes unstaged ho jaate hain (default)
git reset --hard HEAD~1                          # ⚠️ Last commit + saare changes permanently delete
git revert <commit-hash>                         # Ek commit ko "undo" karne wali NAYI commit banao (safe)
git clean -n                                     # Kaunsi untracked files delete hongi, preview karo
git clean -f                                     # ⚠️ Untracked files permanently delete karo
git reflog                                       # Har HEAD movement ka history (deleted commits recover karne ke liye lifesaver)

# Stashing (Temporary Save)
git stash                                        # Current changes temporarily side mein rakho
git stash -u                                     # Untracked files bhi stash karo
git stash list                                   # Saare stashes dekho
git stash pop                                    # Latest stash wapas le aao aur list se hata do
git stash apply                                  # Stash apply karo lekin list se hataye bina
git stash drop                                   # Ek specific stash delete karo
git stash clear                                  # Saare stashes delete karo

# Tags (Releases ke liye)
git tag                                          # Saare tags list karo
git tag v1.0.0                                   # Simple tag banao
git tag -a v1.0.0 -m "First release"             # Annotated tag (message ke saath, recommended)
git push origin v1.0.0                           # Specific tag push karo
git push origin --tags                           # Saare tags push karo
git tag -d v1.0.0                                # Local tag delete karo
git push origin --delete v1.0.0                  # Remote tag delete karo

# Ignoring Files
echo "node_modules/" >> .gitignore               # .gitignore mein entry add karo
git rm -r --cached <file/folder>                 # Already-tracked file ko ab ignore karna shuru karo

# Searching & Finding
git grep "search-term"                           # Codebase mein text search karo
git log --grep="keyword"                         # Commit messages mein search karo
git bisect start                                 # Binary search se buggy commit dhoondna shuru
git bisect bad                                   # Current commit ko "buggy" mark karo
git bisect good <commit-hash>                    # Purani working commit ko "good" mark karo
git bisect reset                                 # Bisect session khatam karo

# Daily workflow
git checkout main                                # Main branch pe aao
git pull                                         # Latest code le lo
git checkout -b feature/task-name                # Naya branch banao apne kaam ke liye
# ... code karo ...
git status                                       # Check karo kya changed hai
git add .                                        # Changes stage karo
git commit -m "Descriptive message"              # Commit karo
git push -u origin feature/task-name             # GitHub pe push karo
# GitHub pe jaake Pull Request banao → review → merge
git checkout main
git pull                                         # Merged changes wapas le lo
git branch -d feature/task-name                  # Purani branch cleanup karo



```
