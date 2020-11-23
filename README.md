# Adventureland Bots/Library

This repo provides a development server for using and writing bots for use in Adventureland.

## Basic Usage

1. Clone the repository
2. In the copy the contents of the `code_importer.js` into your Adventureland character's code.
   - You can set the class file to load by changing the string at the top of the file.
3. Install the dependencies using yarn, not NPM: `yarn install`
   - If you don't have yarn you can install it using `npm install -g yarn`.
   - If you don't have npm, you need to install NodeJS. On Windows, I recommend using the Windows Subsystem for Linux and Visual Studio Code.
4. You can run the devserver using yarn: `yarn run webpack-dev-server`
5. Go back to the game and run your code, it should load the code for the class you selected.

If you change code, the dev server will automatically update the code. To see changes take effect just stop and restart your code in-game.

## Typescript

This code is written in Typescript and compiled to javascript automagically. Not all game defintions are currently present. As you need them, feel free to add them to `adventureland.d.ts`.
