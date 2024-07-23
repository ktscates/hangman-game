[![Netlify Status](https://api.netlify.com/api/v1/badges/9d39c865-819a-4b06-b77c-53d87a72dd9d/deploy-status)](https://app.netlify.com/sites/ktscates-hangman/deploys)
![Github actions](https://github.com/ktscates/hangman-game/actions/workflows/node.js.yml/badge.svg)

# Hangman Game

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Components](#components)
  - [GameComponent](#gamecomponent)
  - [ModalComponent](#modalcomponent)
- [Services](#services)
  - [GameService](#gameservice)
  - [CategoryService](#categoryservice)
- [Live Link](#live-link)

## Introduction

This is a Hangman game built using Angular and TailwindCSS. The game allows users to select a category, guess letters to reveal a hidden word, and manage game states including pausing, winning, and losing.

## Features

- Learn how to play Hangman from the main menu
- Start a game and choose a category
- Play Hangman with a random word selected from that category
- Win the game if they complete the whole word
- Pause the game and choose to continue, pick a new category, or quit

## Technologies Used

- Angular
- TailwindCSS

## Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ktscates/hangman-game.git
   cd hangman-game
   ``
   ```

   2. **Install dependencies**:

```bash
   npm install
```

### Running the App

```bash
    ng serve
```

    Open your browser and navigate to http://localhost:4200/.

## Components

### GameComponent

Handles the main game logic including:

- Displaying the masked word
- Handling letter guesses
- Updating game state based on guesses

### ModalComponent

Displays modal dialogs for:

- Pausing the game
- Winning the game
- Losing the game

## Services

### GameService

Manages the game state including:

- Starting a new game
- Handling letter guesses
- Checking win/lose conditions

### CategoryService

Provides the list of categories and words for the game.

## Live Link

You can access the deployed application at [Hangman Game](https://ktscates-hangman.netlify.app/).
