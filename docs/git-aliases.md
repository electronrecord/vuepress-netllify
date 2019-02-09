# Git Aliases (zsh default shortcuts)

I installed zsh and its addon suite oh-my-zsh for the first time. It contains a big set of predefined aliases and helper functions for different command line programs.

## clone

Let’s start working with this repo!

**alias gcl = git clone**

This is maybe not the most frequent Git command programmers use, but I personally like to get my hands on this awesome-github-project-I-have-just-seen as soon as possible.

## fetch

Download the latest state from the remote

**alias gf = git fetch**

I usually use fetch to get the newest changes from the remote repository because it doesn’t affect working directory and HEAD in any way. Later I can use other commands to modify local files explicitly.

## checkout

Let’s see some other branch!

**alias gco = git checkout**

This is definitely one of the most useful commands on the daily basis. One of the reasons I had decided to write this article is that I still see people writing git checkout everytime they want to switch to other branch.

## branch back

Get back to the previous branch!

**gco -**

This dash is a little trick that means “the previous branch”. I know that strictly speaking this is not an alias, but it’s just too useful not to mention. Also I’ve got the impression that not many people know about it.

checkout is not the only option that accepts a dash - you can use it also with e.g. merge, cherry-pick and rebase.

## go to master

Get me to master quickly!

**alias gcm = git checkout master**

If we switch often between some well defined branches, why don’t make it as simple as possible? Depending on your workflow you can also find other similar aliases useful: gcd (develop), gcu (uat), gcs (stable).

## status

Where am I and what’s going on?

**alias gst = git status**

Simple and self explanatory.

## latest origin

I don’t care about the current working changes, just give me the latest state from origin!

**alias ggrh = git reset --hard origin/$(current_branch)**

My personal favourite. How many times have you made such a terrible mess that you just wanted to get both staging area and working directory back to their original state? Now it’s only four keystrokes away.

Please note that this particular command resets the current branch to the latest commit from origin. This is exactly what I usually need, but may not be the thing that you need. I use it every time I don’t care about local changes and I simply want my current branch to reflect its remote counterpart. You may say that git pull can be used instead, but I just don’t like the fact that it tries to merge remote branch instead of just reset the current one to it.

Note that current_branch is a custom function (made by the author of oh-my-zsh). You can see it e.g. here.


## changes

What are the current changes?

**alias gd = git diff**

Another classic. It simply shows all changes made but not yet staged. If you want to see what changes had been already staged, use this version:

alias gdc = git diff --cached

## commit

Let’s commit these changed files!

**alias gca = git commit -a**

This commits all changed files, so you don’t need to add them manually. However, if there are some new files, that had not been committed yet, obviously you need to point to them explicitly:

alias ga = git add

## add 2 prev commit

I have some changes that I’d like to add to the previous commit!

**alias gca! = git commit -a --amend**

I use this one very often, as I like to keep my Git history clean and tidy (no “pull request fixes” or “forgot to add this file” type of commit messages). It simply takes all changes and adds them to the previous commit.


## uncommit

I did the previous one too quick, how to “uncommit” a file?

**gfr() { 
    git reset @~ "$@" && git commit --amend --no-edit 
}**

This one is a function, not an alias, and may seem a bit complicated at the first glance. It takes a name of a file you want to “uncommit”, removes all changes made to this file from the HEAD commit, but leaves it untouched in the working directory. Then it’s ready to be staged again, maybe as a separate commit. This is how it works in practice:

grf example

## push

Ok, ready to push!

**alias ggpush = git push origin $(current_branch)**

I use this one every time I want to do a push. Because it implicitly passes the remote branch argument I can be sure that only one branch is pushed, regardless of the push.default setting. Starting with Git 2.0 this is the default behaviour anyway, but the alias gives me extra safety in case I’d work with some legacy Git version.

This is maybe not that critical with a normal push, but critical as hell with the next command.

## force push

I’m ready to push and I know what I’m doing

**alias ggpushf = git push --force-with-lease origin $(current_branch)**

Pushing with force is clearly a controversial habit and many people will say that you should never ever do that. I agree, but only when it comes to critical, shared branches like master.

As I’ve already mentioned, I like to keep my git history clean. That sometimes involves changing already pushed commits. The --force-with-lease switch is particularly useful here, as it rejects the push when your local repository doesn’t have the latest state of the remote branch. Therefore it’s not possible to discard someone else’s modifications. At least not unintentionally.

I started using this alias with remote branch name part set to $(current_branch) after my colleague had once mistakenly invoked git commit -f (with push.default set to matching) and force-pushed all local branches to the origin. Including an old version of master. I still remember the panic in his eyes after he realised what had happened.

## push rejected

Oh no, the push has been rejected! Somebody has been touching my branch!

You tried to push your branch to the remote repository, but got the following message:

To gitlab.com:mjkonarski/my-repo.git
 ! [rejected]        my-branch -> my-branch (non-fast-forward)
error: failed to push some refs to 'git@gitlab.com:mjkonarski/my-repo.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again. 
This happens when more that one person works on the same branch. Maybe your colleague had pushed a change when you were not looking? Or you used two computers, not syncing the branch before? Here’s a simple solution:

**alias glr = git pull --rebase**

It pulls the latests changes and rebases your commits on the top of them automatically. If you’re lucky enough (and the remote changes were made to different files) you may even avoid resolving conflicts. Voilà, ready to push again!

## master changes

I want my branch to reflect the latest changes from master!
Let’s say that you have a branch you’ve created from master some time ago. You’ve pushed some changed, but in the meantime master itself had also been updated. Now you’d like your branch to reflect those latests commits. I strongly prefer rebasing over merging in that case - your commit history stays short and clean. It’s as easy as typing:

**alias grbiom = git rebase --interactive origin/master**

I use this command so often that this alias was one of the first I’ve started using. The --interactive switch spins up your favourite editor and lets you quickly check the list of commits that are about to be rebased on master. You can also use this opportunity to squash, reword or reorder commits. So many options with that simple alias!

## conflicts

Damn, I tried to rebase, but wild conflicts appeared! Get me the hell out of here!
Nobody likes getting this message:

CONFLICT (content): Merge conflict in my_file.md

Resolve all conflicts manually, mark them as resolved with
"git add/rm <conflicted_files>", then run "git rebase --continue".
You can instead skip this commit: run "git rebase --skip".
To abort and get back to the state before "git rebase", run "git rebase --abort".
Sometimes you may want just to abort the whole process and leave resolving the conflict for later. The above message gives a clue how to do it, but why in so many keystrokes?

**alias grba = git rebase --abort**

And we’re safe again. When you finally find the courage to do the merge again and resolve these conflicts, after git add-ing them you can simply carry on with the rebase typing:

alias grbc = git rebase --continue

## stash

Put these changes away for a second, please!
Let’s say you had made some changes, but haven’t committed them yet. Now you want to quickly switch to a different branch and do some unrelated work:

**alias gsta = git stash**

This commit puts your modifications aside and reverts the clean state of HEAD.

## stash back

Now, give them back!
When you’re done with your unrelated work you may bring back your changes with a quick:

**alias gstp = git stash pop**

## cherry pick

This one little commit looks nice, let’s put it on my branch!
Git has a nice feature called cherry-pick. You can use it to add any existing commit to the top of your current branch. It’s as simple as using this alias:

**alias gcp = git cherry-pick**

This can of course lead to a conflict, depending on a content of this commit. Resolving this conflict is exactly the same as resolving rebase conflicts. Therefore we’ve got similar options to abort and continue cherry picking as well:

**alias gcpa = git cherry-pick --abort**

**alias gcpc = git cherry-pick --continue**
