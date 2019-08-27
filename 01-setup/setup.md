# Course Setup

A professional web developer uses many tools to improve productivity and software quality. Three tools used in this course are:

- Git: the software version management tool.
- Visual Studio Code (VS Code): the IDE to edit/run/debug code.
- Netlify: the cloud service that hosts your websites.

You should use VS Code to write code locally. Then push code to Github and deploy to Netlify.

The following sections give a detail description of installation and setup of required software.

## 1 Git and GitHub

Git is the most popular software version management tool. In Git terms, a software project is called a repository. Git is a distributed software version control system. It keeps your source code in local and remote repositories and keeps track of all the changes (snapshot) of your software assets include source code, configuration, documents, pictures and etc.

GitHub is a cloud service that hosts Git repositories. Saving your repositories in GitHub to have a reliable and central control of your source code.

### 1.1 Setup

First of all, please go to [https://github.com](https://github.com) to create an account if you don't have one. You can create GitHub repositories using your account.

Then go to [https://git-scm.com/downloads](https://git-scm.com/downloads) to download and install the latest version of Git. run `git --version` to verify the installation.

After downloading and installing git in your local computer, use `git config --global user.name "Your Name"` to set up a global username for all your repositories. Use `$ git config --global user.email "YourEmail@any.com"` to configure an email for your repositories.

### 1.2 Basic Git Concepts

Git keeps a history of your software changes by taking snapshots and store them in a `.git` directory of you project root folder. You decide when to take a snapshot by issuing a `git commit` command. Git keeps all commit history and you can access any snapshot when you want.

Before committing changes, you can specify which files to be committed using `git add` command to **stage** file changes. The staging area is also called **cache** or **index**.

![git add commit](images/git-add-commit.png)

The `git add` command and the `git commit` command work on a local repository. To save it in GitHub, you need to create a link between a local repository with a remote GitHub repository. There are two methods to create this link:

- Use `git clone github-repository-url` to clone a GitHub repository. The URL is displayed as a `Clone or download` green button in your GitHub repository page. This is recommended for a new project.
- Create a GitHub repository and use `git init` to create a local repository. Then use `git remote add` command to link the GitHub repository with the local repository. This is often used to save an existing project to GitHub.

Once you link a local repostiory with a remote repository, you can use `git push` to **push** changes to the remote repository or use `git pull` to **pull** changes made by others from the remote repository.

![Git local remote](./images/git-local-remote.png)

### 1.3 Ingored Files/Folders

Create a `.gitignore` file in your project root folder (the folder where `.git` folder sits) to add filenames or filename patterns for files that git should ignore. For node.js application, you don't want to check in installed NPM modules. Add the `node_modules/` to `.gitignore` will work.

### 1.4 A New Project Workflow

#### Step 1: Create a Github Repository

If you create a new repository in Github, please select the right project type to add an appropriate `.gitignore` file. Optionally, you can select a license to add a license copyright file.

#### Step 2: Clone the Github Repository

In your Github repoistory page, you can find the url. Use `git clone remote-repository-url` to clone it. The command will create a new folder named after the repository name.

#### Step 3: Work on Local Repository

Then work on this local repostiory. Add new files, change existing files or delete unused files.

#### Step 4: Stage Changes

when you are ready, run `git add .` to stage all changed files.

#### Step 5: Commit Changes

Use `git commit -m "your change message"` to commit changes and create a new snapshot.

Often you want to commit all changes. It is common to combine the staging and committing in one step using command `git commit -a -m "your change message"`.

#### Step 6: Push to Github Repository

Use `git push -u origin master` to push the changes to the remote repository. You may be asked for the username and passord of the remote repository.

Here the `origin` is the original Github respository. The `master` is the master branch of the local repository. As a solo developer, usually you only use one master branch. Optionally you can have mutiple branches for different feature development. But it is another topic.

#### Other Common Tasks

Use `git status` to check current status frequently.

Use `git log` to check the history.

use `git pull` to pull changes from remote repository made by other developers.

## 2 Install VS Code

VS Code is a free, open source, simple, and powerful Integrated Development Environment (IDE) for web application development. It has many plugins that provide many functions in addition to its core features. It has built-in support for Git.

The Youtube video [Visual Studio Code Intro & Setup](https://youtu.be/fnPhJHN0jTE) is an introduction to basic VS Code tasks.

Go to [https://code.visualstudio.com/download](https://code.visualstudio.com/download) to download it for your operating systems.

You can perform basic git functions such as commit, push and pull within VS Code IDE -- this is much easy. The first time you use the git operation, VS Code will prompt you for your GitHub account name and password.

## 3 Deploy Git Repository to Netlify

[Netlify](https://www.netlify.com/) allows developers to host thier website for free. You don't even need an account to use it. Go to its website and login using you Github account.

Click the `New site from Git` button and select your repository to be deployed. Usually you use the `master` branch. For a simple static webiste, leave the `Build Command` and `Publish directory` empty. You should have a `index.html` file as the home page for your site.

Click the `Deploy site` to deploy your git repository. In one or two minutes, your site is up and running in the cloud and whenever you make a change to your github repository, the website is updated in minutes. So Cool !
