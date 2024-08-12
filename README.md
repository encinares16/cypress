# Cypress Setup and Execution Guide

This guide will walk you through the steps to clone a repository, install dependencies, and run Cypress tests.

## Prerequisites

- **Node.js** (version 14 or later recommended)
- **Git**

## Installing Git Bash

Git Bash is a command-line tool that provides a Git command-line experience on Windows. Follow the steps below to install it.

### Step 1: Download Git Bash

1. Go to the [official Git website](https://git-scm.com/).
2. Click on the Download button. The website will automatically detect your operating system and suggest the appropriate download.
3. Once the download is complete, locate the installer file (it should be named something like `Git-2.x.x-64-bit.exe`).
4. Double-click the downloaded installer to start the installation process.
5. Follow the on-screen instructions.
6. Click Install to begin the installation.
7. After the installation is complete, click Finish.

### Step 2: Verify Installation

1. Open Git Bash by searching for it in the Windows Start Menu.
2. Type the following command to verify the installation:

    ```bash
    git --version
    ```

## Installing Node.js

### Overview

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code server-side and is commonly used for building scalable network applications.

### Installation

#### Windows

1. **Download Node.js Installer:**
   - Go to the [Node.js official website](https://nodejs.org/).
   - Download the Windows installer (LTS or Current version).

2. **Run the Installer:**
   - Open the downloaded `.msi` file and follow the prompts in the installation wizard.
   - Ensure that the option to add Node.js to your PATH is selected.

3. **Verify Installation:**
   - Open Command Prompt and run:

  ```bash
    node -v
    npm -v
  ```

   This should display the installed versions of Node.js and npm.

# Steps

**1. Run Git Bash**

   Open any folder, right-click, and select **Open Git Bash Here**.

**2. Clone the Repository**

   Open Git Bash and clone the repository using Git:

  ```bash
    mkdir cypress
    cd cypress
    git clone https://github.com/encinares16/cypress.git
  ````
    
**3. Install Packages**
Navigate to the repository directory and install the required packages:

  ```bash
    npm install
  ````

**4. Create .env File**

In the local repository, create a .env file:

  ```bash
    touch .env
  ````

**5. Open the Project in VSCode**

Open the project in Visual Studio Code:
  ```bash
    code .
  ````

**6. Configure Environment Variables**

Open the .env file and copy and paste the environment variables.

[.env](https://drive.google.com/file/d/1llrWN8fJNjGap6VZCdaszK4flCbSF6LD/view?usp=sharing)

**7. Run the Application** 

Run Cypress:
  ```bash
    npx cypress open
  ````
