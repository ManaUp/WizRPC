# WizRPC

WizRPC brings the ever so famous discord rich presence feature to Wizard101. Using this plugin you can display your in-game stats on your discord profile in real time! 

## Examples
![Example Of RPC](https://cdn.discordapp.com/attachments/382377954908569600/482436718197342209/rpc.png)

## Requirements

  - Windows 7, Windows 10 or macOS (Mavericks or higher)
  - You must have the Windows version of the game installed through Wine if you are using macOS. The native mac version of the game __will not work__.
  - NodeJS 8.11.4 or higher ([Download NodeJS if you haven't](!https://nodejs.org/en/download/))
 

## Installation 
  - Download the zip of this program or clone it with `git clone`
  - Move into the directory `cd  /path/to/WizRPC`
  - Install dependencies with `npm install`
  - __IMPORTANT__: Edit `config.json` with the **full** path to your Wizard101 folder
  > On macOS, the path to your folder generally be `/Users/your_username/.wine/drive_c/ProgramData/KingsIsle Entertainment/Wizard101` by default, unless you moved it elsewhere.
  - If you're using macOS, run the program with `nohup node WizRPC.js &`
  - If you're using Windows, you can simply run the program with `node WizRPC.js` and minimize the console. If you would like to run the script as a background process, you can install `pm2` with `npm install pm2 -g` and use `pm2 start WizRPC.js --watch` instead.
  - That's it! If done correctly, you should now have an active Rich Presence whenever the game is running, and it should go away when you quit the game. Due to discord's rich presence rate limit rule, the presence will update every 15-25 seconds. 

## Questions & Concerns
If you have any questions or are confused about how to install and run WizRPC, please shoot me a DM on Discord. My tag is __Tides#4625__ and i'd be happy to help. 

## Todo 
WizRPC is still brand new and requires a lot of upkeep and maintenance. The following are planned updates for WizRPC.
  - Zone API for automatic updates
  - GUI and quick installer 
  - Support for Linux
