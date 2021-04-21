#!/usr/bin/node
/* Author: José Rodolfo (JRIC2002) */

const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const color = require("./modules/colors.js");
const config = require("./modules/config.json");
const client = new Discord.Client();

var Bot = function(name, token) {
    this.name = name;
    this.token = token;
};
Bot.prototype.start = function() {
    client.login(this.token);
};
Bot.prototype.ready = function() {
    client.on("ready", function() {
        console.log(color.bold + client.user.tag + " is ready" + color.reset);
    });
};
Bot.prototype.message = function(prefix = ".") {
    client.on("message", async function(msg) {
        const args = msg.content.trim().split(/ +/g);
        const command = args.shift();
    
        //Help
        if (msg.content == (prefix + "help") && !msg.author.bot) {
            //.setAuthor(client.user.username, "https://cdn.discordapp.com/avatars/" + client.user.id + "/" + client.user.avatar + ".png")      <= example code
            const help = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setTitle("Help menu")
                .setDescription("These are all the available commands, they are classified into categories.")
                .setThumbnail(client.user.displayAvatarURL())
                .addField("General commands", "These commands are for general use, any user can use them:\n`.help`, `.play`, `.playlist`")
                .addField("DJ commands", "These commands are only available during song playback:\n`.vol` o `.volume`, `.stop`, `.replay`, `back`, `.pause`, `.resume`, `next`, `.addlist`\nNote: The `.back`,` .next`, `.addlist` commands will only be available if the` .playlist` command is used.")
                .addField("Administrator commands", "These commands can only be used by the creator of the server:\n`.clear`")
                .setFooter("Type '.help <Command Name>' to get details about a command.");
            msg.channel.send(help);
        }
    
        //Help: general commands
        if (command == (prefix + "help") && args[0] == "play" && !msg.author.bot) {
            const helpPlay = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.play` command", "The `.play` command is used to play only one song:\n`.play <url>`\nNote: At the moment, only YouTube songs can be played.");
            msg.channel.send(helpPlay);
        }
        if (command == (prefix + "help") && args[0] == "playlist" && !msg.author.bot) {
            const helpPlayList = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.playlist` command", "The `.playlist` command is used to play multiple songs:\n`.playlist <1-url> <2-url> <3-url> ...`\nNote: At the moment, only YouTube songs can be played.");
            msg.channel.send(helpPlayList);
        }
        /*
        if (command == (prefix + "help") && args[0] == "search" && !msg.author.bot) {
            const helpSearch = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.search` command", "The command `.search` is used to search for songs:\n`.search <Name of the song>`");
            msg.channel.send(helpSearch);
        }*/
    
        //Help: commands to control the song
        if (command == (prefix + "help") && (args[0] == "vol" || args[0] == "volume") && !msg.author.bot) {
            const helpVol = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setTitle("Using the command `.vol` or` .volume`", "The command `.vol` or` .volume` is used to define the volume, by default the volume is 100%:\nFlags: `-i` o `-info`")
                .addField(".vol <quantity>", "You must replace `<quantity>` with a number that is within the allowed range (between 1 and 200).")
                .addField(".vol -i", "The `-i` or` -info` flag will show you information about the volume.");
            msg.channel.send(helpVol);
        }
        if (command == (prefix + "help") && args[0] == "stop" && !msg.author.bot) {
            const helpStop = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.stop` command", "The `.stop` command is used to stop the song:\n`.stop`");
            msg.channel.send(helpStop);
        }
        if (command == (prefix + "help") && args[0] == "replay" && !msg.author.bot) {
            const helpReplay = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.replay` command", "The `.replay` command is used to repeat the current song:\n`.replay`");
            msg.channel.send(helpReplay);
        }
        if (command == (prefix + "help") && args[0] == "back" && !msg.author.bot) {
            const helpBack = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.back` command", "The `.back` command is used to play the previous song:\n`.back`");
            msg.channel.send(helpBack);
        }
        if (command == (prefix + "help") && args[0] == "pause" && !msg.author.bot) {
            const helpPause = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.pause` command", "The command `.pause` is used to pause the song:\n`.pause`");
            msg.channel.send(helpPause);
        }
        if (command == (prefix + "help") && args[0] == "resume" && !msg.author.bot) {
            const helpResume = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.resume` command", "The `.resume` command is used to resume the song:\n`.resume`");
            msg.channel.send(helpResume);
        }
        if (command == (prefix + "help") && args[0] == "next" && !msg.author.bot) {
            const helpNext = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.next` command", "The command `.next` is used to play the next song:\n`.next`");
            msg.channel.send(helpNext);
        }
        if (command == (prefix + "help") && args[0] == ".addlist" && !msg.author.bot) {
            const helpAddlist = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.addlist` command", "The `.addlist` command is used to add a song or multiple songs to the playlist.\n`.addlist <1-url> <2-url> <3-url> ...`");
            msg.channel.send(helpAddlist);
        }
    
        //Help: admin commands
        if (command == (prefix + "help") && args[0] == "clear" && !msg.author.bot) {
            const helpClear = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.clear` command", "The command `.clear` is used to delete messages:\n`.clear <quantity>`\nYou should replace `<quantity>` with a number that is within the allowed range (between 0 and 100), that is, you can only delete 99 messages at most.");
            msg.channel.send(helpClear);
        }
        /*
        if (command == (prefix + "help") && args[0] == "setPrefix" && !msg.author.bot) {
            const helpSetPrefix = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .addField("Using the `.setPrefix` command", "The `.setPrefix` command is used to set the prefix of the command:\n`.setPrefix <prefix>`\nYou can replace `<prefix>` with a prefix (any character).");
            msg.channel.send(helpSetPrefix);
        }
        */
    /***************************************************************************************************************************************************************
    ***************************************************************************************************************************************************************/
    
        //Help: general commands
        if (msg.content == (prefix + "play") && !msg.author.bot) {
            const msgNoSongPlay = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setDescription("No song name or URL provided.")
                .setFooter("Type '.help play' for details about the command.");
            msg.channel.send(msgNoSongPlay);
        }
        if (command == (prefix + "play") && args.length > 1 && !msg.author.bot) {
            const msgPlayError = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setDescription("The `.play` command only plays one song.")
                .setFooter("Type '.help play' for details about the command.");
            msg.channel.send(msgPlayError);
        }
        if (msg.content == (prefix + "playlist") && !msg.author.bot) {
            const msgNoSongPlaylist = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setDescription("No URL for the songs was provided.")
                .setFooter("Type '.help playlist' for details about the command.");
            msg.channel.send(msgNoSongPlaylist);
        }
        if (((command == (prefix + "play") && args.length == 1) || (command == (prefix + "playlist") && args.length >= 1)) && !msg.author.bot) {
            //Get channel name:
            //const ch = client.channels.cache.find(id => id.name == "Music");      <= example code
            //const vc = ch.name;       <= example code
            const list = msg.content.trim().split(/ +/g);
            const playlistCommand = list.shift().toLowerCase();
            if (msg.member.voice.channel) {
                var volume = parseFloat(1.0);
                //Playback functions
                function dispatcherEvents() {
                    dispatcher.setVolume(volume);
                    ytdl.getInfo(url)
                        .then(info => {
                            const msgSongPlaying = new Discord.MessageEmbed()
                                .setColor("BLUE")
                                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                                .setTitle(info.videoDetails.title)
                                .setURL(info.videoDetails.video_url)
                                .setDescription("Author: " + info.videoDetails.author.name);
                            msg.channel.send(msgSongPlaying);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                    /*
                    connection.on("speaking", (user, speaking) => {
                        console.log(connection.voice.speaking);
                        console.log(connection.connection);
                    })*/
                    dispatcher.on("start", () => {
                        //Regular expression to filter the ID
                        //const regExp = new RegExp("[a-zA-Z0-9\-]{11}", "g");      <= example code
                        //const searchResult = regExp.exec(url);        <= example
                        console.log("-".repeat(60));
                        console.log(color.bold + color.green + "[" + color.white + "+" + color.green + "]" + " Music playing..." + color.reset);
                        if (parameterDelete == 0) {
                            msg.delete();
                            parameterDelete = 1; //parameterDelete is now 1 so msg.delete() won't run again
                        }
                        msg.channel.send(url)
                            .then(msgBot => {
                                /* Song controls */
                                var msgCollector;
                                const msgFilter = m => {
                                    return m.content && m.author.id == msg.author.id;
                                };
                                msgCollector = msg.channel.createMessageCollector(msgFilter);
                                msgCollector.on("collect", collected => {
                                    //collected.delete();
                                    const controlArgs = collected.content.trim().split(/ +/g);
                                    const commandControl = controlArgs.shift();
                                    //Volume information
                                    if ((commandControl == (prefix + "vol") || commandControl == (prefix + "volume")) && (controlArgs[0] == "-i" || controlArgs == "-info") && controlArgs.length == 1) {
                                        const msgVolInfo = new Discord.MessageEmbed()
                                            .setColor("BLUE")
                                            .setAuthor(client.user.username, client.user.displayAvatarURL())
                                            .setDescription("Volume is at " + "`" + String(parseFloat(volume.toFixed(2))*100) + "%" + "`" + ".");
                                        msg.channel.send(msgVolInfo);
                                    }
                                    //Volume
                                    if ((commandControl == (prefix + "vol") || commandControl == (prefix + "volume")) && parseInt(controlArgs[0]) <= 200 && parseInt(controlArgs[0]) >= 0 && controlArgs.length == 1) {
                                        volume = parseFloat(controlArgs[0])/100;
                                        dispatcher.setVolume(volume);
                                        const msgVol = new Discord.MessageEmbed()
                                            .setColor("BLUE")
                                            .setAuthor(client.user.username, client.user.displayAvatarURL())
                                            .setDescription("Volume is at " + "`" + String(parseFloat(volume.toFixed(2))*100) + "%" + "`" + ".");
                                        msg.channel.send(msgVol);
                                    }
                                    if ((commandControl == (prefix + "vol") || commandControl == (prefix + "volume")) && (parseInt(controlArgs[0]) > 200 || parseInt(controlArgs[0]) < 0) && controlArgs.length == 1) {
                                        const msgErrorNumber = new Discord.MessageEmbed()
                                            .setColor("RED")
                                            .setAuthor(client.user.username, client.user.displayAvatarURL())
                                            .setDescription("Amount out of range.")
                                            .setFooter("Type '.help vol' or '.help volume` for details about the command.");
                                        msg.channel.send(msgErrorNumber);
                                    }
                                    //Seek
                                    /*
                                    if (commandControl == (prefix + "seek") && controlArgs.length == 1) {
                                        if (playlistCommand == (prefix + "play")) {
                                            play(controlArgs[0]);
                                            console.log("esta en: " + String(controlArgs[0]));
                                        }
                                        if (playlistCommand == (prefix + "playlist")) {
                                            playlist(controlArgs[0]);
                                            console.log("esta en: " + String(controlArgs[0]));
                                        }
                                    }
                                    */
                                    //Stop
                                    if (commandControl == (prefix + "stop")) {
                                        dispatcher.destroy();
                                        connection.disconnect();
                                        const msgStop = new Discord.MessageEmbed()
                                            .setColor("BLUE")
                                            .setAuthor(client.user.username, client.user.displayAvatarURL())
                                            .setDescription("The song stopped.");
                                        msg.channel.send(msgStop);
                                    }
                                    //Replay
                                    if (commandControl == (prefix + "replay")) {
                                        if (playlistCommand == (prefix + "playlist")) {
                                            msgCollector.stop();
                                            playlist(n);
                                            dispatcherEvents();
                                            const msgRepeat = new Discord.MessageEmbed()
                                                .setColor("BLUE")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                .setDescription("Current song repeat.");
                                            msg.channel.send(msgRepeat);
                                        }
                                        if (playlistCommand == (prefix + "play")) {
                                            msgCollector.stop();
                                            play();
                                            dispatcherEvents();
                                            const msgRepeat = new Discord.MessageEmbed()
                                                .setColor("BLUE")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                .setDescription("Current song repeat.");
                                            msg.channel.send(msgRepeat);
                                        }
                                    }
                                    //Additional commands
                                    if (playlistCommand == (prefix + "playlist")) {
                                        //Back
                                        if (commandControl == (prefix + "back")) {
                                            n  = n - 1;
                                            if (n < 0) {
                                                n = n + 1;
                                                const msgBack = new Discord.MessageEmbed()
                                                    .setColor("ORANGE")
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                    .setDescription("There are no more songs behind.");
                                                msg.channel.send(msgBack);
                                            }
                                            else {
                                                msgCollector.stop();
                                                playlist(n);
                                                dispatcherEvents();
                                                const msgBack = new Discord.MessageEmbed()
                                                    .setColor("BLUE")
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                    .setDescription("Playing the previous song.");
                                                msg.channel.send(msgBack);
                                            }
                                        }
                                        //Next
                                        if (commandControl == (prefix + "next")) {
                                            n = n + 1;
                                            if (n >= list.length) {
                                                n = n - 1;
                                                const msgNext = new Discord.MessageEmbed()
                                                    .setColor("ORANGE")
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                    .setDescription("No more songs.");
                                                msg.channel.send(msgNext);
                                            }
                                            else {
                                                msgCollector.stop();
                                                playlist(n);
                                                dispatcherEvents();
                                                const msgNext = new Discord.MessageEmbed()
                                                    .setColor("BLUE")
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                    .setDescription("Playing the next song.");
                                                msg.channel.send(msgNext);
                                            }
                                        }
                                        //Addlist
                                        if (commandControl == (prefix + "addlist") && controlArgs.length >= 1) {
                                            for (let i = 0; i < controlArgs.length; i++) {
                                                list.push(controlArgs[i]);
                                            }
                                            var msgSuppleText;
                                            if (controlArgs.length == 1) {
                                                msgSuppleText = "The song was added to the playlist.";
                                            }
                                            if (controlArgs.length > 1) {
                                                msgSuppleText = "The songs were added to the playlist.";
                                            }
                                            const msgAddlist = new Discord.MessageEmbed()
                                                .setColor("BLUE")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                .setDescription(msgSuppleText);
                                            msg.channel.send(msgAddlist);
                                        }
                                    }
                                    //Pause
                                    if (commandControl == (prefix + "pause")) {
                                        dispatcher.pause(true);
                                        const msgPause = new Discord.MessageEmbed()
                                            .setColor("BLUE")
                                            .setAuthor(client.user.username, client.user.displayAvatarURL())
                                            .setDescription("Paused the song.");
                                        msg.channel.send(msgPause);
                                    }
                                    //Resume
                                    if (commandControl == (prefix + "resume")) {
                                        dispatcher.resume();
                                        const msgResume = new Discord.MessageEmbed()
                                            .setColor("BLUE")
                                            .setAuthor(client.user.username, client.user.displayAvatarURL())
                                            .setDescription("Resume the song.");
                                        msg.channel.send(msgResume);
                                    }
                                });

                                /* Song controls */
                                msgBot.react("🔈");
                                msgBot.react("🔊");
                                msgBot.react("⏹");
                                msgBot.react("🔄");
                                if (playlistCommand == (prefix + "playlist")) {
                                    msgBot.react("⏮");
                                }
                                msgBot.react("⏸");
                                msgBot.react("▶");
                                if (playlistCommand == (prefix + "playlist")) {
                                    msgBot.react("⏭");
                                }
                                const reactFilter = (reaction, user) => {
                                    return ["🔈", "🔊", "⏹", "🔄", "⏮", "⏸", "▶", "⏭"].includes(reaction.emoji.name) && user.id == msg.author.id;
                                };
                                const reactCollect = msgBot.createReactionCollector(reactFilter);
                                reactCollect.on("collect", (reaction, user) => {
                                    //Volume -
                                    if (reaction.emoji.name == "🔈") {
                                        volume = volume - 0.2;
                                        if (volume < 0) {
                                            volume = 0;
                                        }
                                        else {
                                            dispatcher.setVolume(volume);
                                            const msgVol = new Discord.MessageEmbed()
                                                .setColor("BLUE")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                .setDescription("Volume is at " + "`" + String(parseFloat(volume.toFixed(2))*100) + "%" + "`" + ".");
                                            msg.channel.send(msgVol);
                                        }
                                    }
                                    //Volume +
                                    if (reaction.emoji.name == "🔊") {
                                        volume = volume + 0.2;
                                        if (volume > 2) {
                                            volume = 2;
                                        }
                                        else {
                                            dispatcher.setVolume(volume);
                                            const msgVol = new Discord.MessageEmbed()
                                                .setColor("BLUE")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                .setDescription("Volume is at " + "`" + String(parseFloat(volume.toFixed(2))*100) + "%" + "`" + ".");
                                            msg.channel.send(msgVol);
                                        }
                                    }
                                    //Stop
                                    if (reaction.emoji.name == "⏹") {
                                        dispatcher.destroy();
                                        connection.disconnect();
                                        const msgStop = new Discord.MessageEmbed()
                                            .setColor("BLUE")
                                            .setAuthor(client.user.username, client.user.displayAvatarURL())
                                            .setDescription("The song stopped.");
                                        msg.channel.send(msgStop);
                                    }
                                    //Replay
                                    if (reaction.emoji.name == "🔄") {
                                        if (playlistCommand == (prefix + "playlist")) {
                                            msgCollector.stop();
                                            playlist(n);
                                            dispatcherEvents();
                                            const msgRepeat = new Discord.MessageEmbed()
                                                .setColor("BLUE")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                .setDescription("Current song repeat.");
                                            msg.channel.send(msgRepeat);
                                        }
                                        if (playlistCommand == (prefix + "play")) {
                                            msgCollector.stop();
                                            play();
                                            dispatcherEvents();
                                            const msgRepeat = new Discord.MessageEmbed()
                                                .setColor("BLUE")
                                                .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                .setDescription("Current song repeat.");
                                            msg.channel.send(msgRepeat);
                                        }
                                    }
                                    //Additional commands
                                    if (playlistCommand == (prefix + "playlist")) {
                                        //Back
                                        if (reaction.emoji.name == "⏮") {
                                            n  = n - 1;
                                            if (n < 0) {
                                                n = n + 1;
                                                const msgBack = new Discord.MessageEmbed()
                                                    .setColor("ORANGE")
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                    .setDescription("There are no more songs behind.");
                                                msg.channel.send(msgBack);
                                            }
                                            else {
                                                msgCollector.stop();
                                                playlist(n);
                                                dispatcherEvents();
                                                const msgBack = new Discord.MessageEmbed()
                                                    .setColor("BLUE")
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                    .setDescription("Playing the previous song.");
                                                msg.channel.send(msgBack);
                                            }
                                        }
                                        //Next
                                        if (reaction.emoji.name == "⏭") {
                                            n = n + 1;
                                            if (n >= list.length) {
                                                n = n - 1;
                                                const msgNext = new Discord.MessageEmbed()
                                                    .setColor("ORANGE")
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                    .setDescription("No more songs.");
                                                msg.channel.send(msgNext);
                                            }
                                            else {
                                                msgCollector.stop();
                                                playlist(n);
                                                dispatcherEvents();
                                                const msgNext = new Discord.MessageEmbed()
                                                    .setColor("BLUE")
                                                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                                                    .setDescription("Playing the next song.");
                                                msg.channel.send(msgNext);
                                            }
                                        }
                                    }
                                    //Pause
                                    if (reaction.emoji.name == "⏸") {
                                        dispatcher.pause(true);
                                        const msgPause = new Discord.MessageEmbed()
                                            .setColor("BLUE")
                                            .setAuthor(client.user.username, client.user.displayAvatarURL())
                                            .setDescription("Paused the song.");
                                        msg.channel.send(msgPause);
                                    }
                                    //Resume
                                    if (reaction.emoji.name == "▶") {
                                        dispatcher.resume();
                                        const msgResume = new Discord.MessageEmbed()
                                            .setColor("BLUE")
                                            .setAuthor(client.user.username, client.user.displayAvatarURL())
                                            .setDescription("Resume the song.");
                                        msg.channel.send(msgResume);
                                    }
                                });
                                //The song was finished or changed
                                dispatcher.on("close", () => {
                                    msgCollector.stop();
                                    msgBot.delete();
                                });
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    });
                    //The song is over
                    dispatcher.on("finish", () => {
                        if (playlistCommand == (prefix + "playlist")) {
                            n = n + 1;
                            if (n < list.length) {
                                playlist(n);
                                dispatcherEvents();
                                const msgNextSong = new Discord.MessageEmbed()
                                    .setColor("BLUE")
                                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                                    .setDescription("Playing the next song.");
                                msg.channel.send(msgNextSong);
                            }
                            else {
                                const msgPlaylistFinish = new Discord.MessageEmbed()
                                    .setColor("BLUE")
                                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                                    .setDescription("Playlist finished.");
                                msg.channel.send(msgPlaylistFinish);
                                connection.disconnect();
                            }
                        }
                        else {
                            const msgPlayFinish = new Discord.MessageEmbed()
                                .setColor("BLUE")
                                .setAuthor(client.user.username, client.user.displayAvatarURL())
                                .setDescription("The song is over.");
                            msg.channel.send(msgPlayFinish);
                            connection.disconnect();
                        }
                    });
                }

                var connection;
                var dispatcher;
                var url;
                var parameterDelete;
                var n;
                /* Play song */
                if (command == (prefix + "play") && list.length == 1) {
                    connection = await msg.member.voice.channel.join();
                    console.log(color.bold + client.user.tag + " is now connected to the voice channel" + color.reset);
                    parameterDelete = 0;
                    function play() {
                        url = list[0];
                        dispatcher = connection.play(ytdl(url, {filter: "audioonly"}));
                    }
                    play();
                    dispatcherEvents();
                }
                if (command == (prefix + "playlist") && list.length >= 1) {
                    connection = await msg.member.voice.channel.join();
                    console.log(color.bold + client.user.tag + " is now connected to the voice channel" + color.reset);
                    parameterDelete = 0;
                    n = 0;
                    function playlist(n) {
                        url = list[n];
                        dispatcher = connection.play(ytdl(url, {filter: "audioonly"}));
                    }
                    playlist(n);
                    dispatcherEvents();
                }
            }
            else {
                const msgErrorJoin = new Discord.MessageEmbed()
                    .setColor("ORANGE")
                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                    .setDescription("You have to join a voice channel first.");
                msg.channel.send(msgErrorJoin);
            }
        }
    
        //Help: admin commands
        if (msg.content == (prefix + "clear") && !msg.author.bot) {
            const msgNoArg = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setDescription("The number of messages to be deleted was not provided.")
                .setFooter("Type '.help clear' for details about the command.");
            msg.channel.send(msgNoArg);
        }
        if (command == (prefix + "clear") && args.length > 1 && !msg.author.bot) {
            const msgArgError = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setDescription("The command only accepts a single argument.")
                .setFooter("Type '.help clear' for details about the command.");
            msg.channel.send(msgArgError);
        }
        if (command == (prefix + "clear") && args.length == 1 && msg.author.id == msg.guild.ownerID && !msg.author.bot) {
            if (parseInt(args[0]) <= 0 || parseInt(args[0]) >= 100) {
                const msgErrorNumber = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                    .setDescription("Amount out of range.")
                    .setFooter("Type '.help clear' for details about the command.");
                msg.channel.send(msgErrorNumber);
            }
            else {
                const numberOfMessage = parseInt(args[0]) + 2;
                var msgSuppleText;
                if (parseInt(args[0]) == 1) {
                    msgSuppleText = " message.";
                }
                if (parseInt(args[0]) > 1) {
                    msgSuppleText = " messages.";
                }
                const msgChannelDelete = new Discord.MessageEmbed()
                    .setColor("BLUE")
                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                    .setDescription("Deleting " + "`" + String(args[0]) + "`" + msgSuppleText);
                msg.channel.send(msgChannelDelete)
                    .then(msgBot => {
                        setTimeout(() => {
                            msg.channel.bulkDelete(numberOfMessage);
                        }, 5000);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    
        /*
        if (msg.content == (prefix + "setPrefix") && !msg.author.bot) {
            const msgNoArg = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setDescription("No character was supplied as an argument.")
                .setFooter("Type '.help setPrefix' for details about the command.");
            msg.channel.send(msgNoArg);
        }
        if (command == (prefix + "setPrefix") && args.length == 1  && msg.author.id == msg.guild.ownerID && !msg.author.bot) {
            prefix = String(args[0]);
            var prefixList = {};
            serverID = msg.guild.id;
            prefixList[serverID] = prefix; 
            const msgSetPrefix = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setDescription("The prefix has been configured, from now on all commands can be executed with the prefix " + "`" + prefix + "`" + ".");
            msg.channel.send(msgSetPrefix);
        }
        */
    });
};
Bot.prototype.reconnecting = function() {
    client.on("reconnecting", function() {
        console.log(color.bold + "Reconnecting..." + color.reset);
    });
};
Bot.prototype.finish = function() {
    client.on("disconnect", function() {
        console.log(color.bold + "Disconnect!" + color.reset);
    });
};

paddington = new Bot("Paddington", config.token);
paddington.ready();
paddington.message(".");
paddington.start();