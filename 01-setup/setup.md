# Course Setup

A professional web developer uses many tools to improve productivity and software quality. Two essential tools used in this course are:

- Visual Studio Code (VS Code): the IDE to edit/run/debug code.
- Git: the software version management tool.

You should use VS Code to write code locally. Then push code to Github.

The following sections give a detail description of installation and setup of required software.

## 1 Install VS Code

VS Code is a free, open source, simple, and powerful Integrated Development Environment (IDE) for web application development. It has many plugins that provide many functions in addition to its core features. It has built-in support for Git.

The Youtube video [Visual Studio Code Intro & Setup](https://youtu.be/fnPhJHN0jTE) is an introduction to basic VS Code tasks.

Go to [https://code.visualstudio.com/download](https://code.visualstudio.com/download) to download it for your operating systems.

## 2 Git and GitHub

Git is the most popular software version management tool. VS Code has built-in support for Git therefore you only need to use it for project initial setup.

Please watch the Youtube video [Git & GitHub Crash Course For Beginners](https://youtu.be/SWYqp7iY_Tc) to learn the basic concepts and how to use it.

Go to [https://git-scm.com/downloads](https://git-scm.com/downloads) to download and install the latest version of Git. run `git --version` to verify the installation.

In Git terms, a software project is called a repository. GitHub is a cloud service that hosts Git repositories.

Go to [https://github.com](https://github.com) to create an account if you don't have one.

After downloading and installing git in your local computer, use `git config --global user.name "Mona Lisa"` to set up a global username for all your repositories. Use `$ git config --global user.email "email@example.com"` to set up an email for all your repositories.

The [Git Introduction](./git-introduction.md) is a brief introduction to Git concepts and commonly used git commands. You should be familar with these concepts and commands to be a good developer.

You can perform basic git functions such as add, commit, push and pull within VS Code IDE -- this is very convinient and simple.

## Deploy Git Repository to Netlify

[Netlify](https://www.netlify.com/) allows developers to host thier website for free. You don't even need an account to use it. Go to its website and login using you Github account.

Click the `New site from Git` button and select your repository to be deployed. Usually you use the `master` branch. For a simple static webiste, leave the `Build Command` and `Publish directory` empty. You should have a `index.html` file as the home page for your site.

Click the `Deploy site` to deploy your git repository. In one or two minutes, your site is up and running in the cloud and whenever you make a change to your github repository, the website is updated in minutes. So Cool !
