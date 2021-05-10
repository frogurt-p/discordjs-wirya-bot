require('dotenv').config();

const apiKey = process.env.API_KEY;
const { Client, MessageAttachment, VoiceChannel, User, GuildMember, MessageEmbed, Guild } = require("discord.js");
const guild = new Guild();
var det = new Date();
const client = new Client();
const memberguild = new GuildMember();
const ytdl = require('ytdl-core');
const { YTSearcher } = require('ytsearcher');
const searcher = new YTSearcher(apiKey);
const discytdl = require('discord-ytdl-core');
var floatHighPitch = 1.2;
var floatLowPitch = 0.8;

setInterval(() => {
    det = new Date();
    console.log(det.toLocaleTimeString());
        
    if(det.getDate() >= 18)
    client.user.setActivity('aduh gw dah mau mati nih bre! apes aku!');
    else
    client.user.setActivity(`${25 - det.getDate()} hari sebelum gw mati nih bre!`)
    
}, 7200000);

client.login(process.env.DISCORDJS_WIRYA_TOKEN); 

client.on('ready' ,() => {

    if(det.getDate() >= 18)
    client.user.setActivity('aduh gw dah mau mati nih bre! apes aku!');
    else
     client.user.setActivity(`${25 - det.getDate()} hari sebelum gw mati nih bre!`);
    
});

client.on("voiceStateUpdate", async (leaveState, joinState ) => {

    
    if(joinState.channel){
 if(!joinState.guild.channels.cache.find((key) => key.name === `${joinState.channel.name.toLowerCase().replace(/ /g, '-')}-chatroom`)  ){

    const parentChannel = joinState.guild.channels.cache.find((key) => key.type === 'category');
  
  const ferdiChannel = await joinState.guild.channels.create(`${joinState.channel.name}-chatroom` , { type: 'text', parent: parentChannel  });

   }
  }

   if(leaveState.channel){
 if(!leaveState.channel.members.find((key) => key.user ) ){
       
    leaveState.guild.channels.cache.find((key) => key.name === `${leaveState.channel.name.toLowerCase().replace(/ /g, '-')}-chatroom` ).delete()}
   }


   
       if(joinState.channel){console.log(`he joined ${joinState.channelID}`)}
       if(leaveState.channel){console.log(`he left ${leaveState.channelID}`)}
       
});


    const prefix = "*";
     


client.on('message', async (message) => {

    // const globalcommand = message.content.startsWith(prefix) && message.author.bot === false;
    var globalcommand = null;
    if(message.content.startsWith('*jumbo') ){

    globalcommand = true


    } else if(message.content.startsWith(prefix) && message.author.bot === false){

        globalcommand = true
       

    }

    if (message.content.toLowerCase() === 'halo' && message.author.bot === false) {

        message.reply('halo bre')
        
    };
//----------------------------------------------------------------------------------------------------------------------------------------------------------------    
    if (message.content.toLowerCase() === 'pap dong wir' && message.author.bot === false ) {

        const pap = new MessageAttachment('https://cdn.discordapp.com/attachments/426214215750254604/748890227904610476/Screenshot_2020-07-07-22-58-46-89.jpg');
        message.channel.send(pap);
    };
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (message.content.toLowerCase().startsWith('bouncytuan') && message.author.bot === false ) {
        const splitmsg = message.content.split(' ')
        var numbah = 0;
        for(i = 0; i < splitmsg.length; i++){

            if(splitmsg[i].toLowerCase() === 'bouncytuan'){

                numbah++

            }

            
        }
        console.log(numbah);
        console.log(splitmsg);

        const pap = new MessageAttachment('https://cdn.discordapp.com/attachments/426214215750254604/797392501472100352/bouncy_tuan.gif');
        if(numbah > 0)

        for(i = 0; i < numbah; i++){

            message.channel.send(pap);
            
        }else
        message.channel.send('bouncytuan yg bener bre!')
        
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
   if (message.content.toLowerCase().includes('cepu') && message.author.bot === false ){

        const findCepu = message.content.indexOf('cepu');
        const startIndex = findCepu - 1;
        const endIndex = findCepu + 4;


        const vibeCheck = (message.content.charAt(startIndex) === ' ' || message.content.charAt(startIndex) === '') && (message.content.charAt(endIndex) === ' ' || message.content.charAt(endIndex) === '')

        if (vibeCheck){

       const cepu = new MessageAttachment('https://cdn.discordapp.com/attachments/748362014652367001/748380268234014811/20200827_100848.jpg');

       message.channel.send(cepu);
       message.reply('gw gk cepu ajg');
        }
    };
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
   if (message.content.toLowerCase().includes('gelud') && message.author.bot === false ){
   
       const findGelud = message.content.indexOf('gelud');
       const startGelud = findGelud - 1;
       const endGelud = findGelud + 5;
    
       const indexCheck = (message.content.charAt(startGelud) === ' ' || message.content.charAt(startGelud) === '') && (message.content.charAt(endGelud) === ' ' || message.content.charAt(endGelud) === '')
       
       if (indexCheck){
       message.reply('GW GABAKAL NGE GAS KALO LU GA NGE GAS DI GRUP');
       }
    
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------------------    
   if (message.content.toLowerCase() === 'ijin lewat ndan' && message.author.bot === false ){

     message.reply('siap ndan');

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
   };

if (globalcommand){
        const [command, ...args] = message.content
        .trim()
        .substring(prefix.length)
        .split(' ');

        console.log(command);
        console.log(args);
        
        if (command.toLowerCase() === 'commands') {

            message.reply(`
halo 
pap dong wir 
gelud
cepu 
bouncytuan
ijin lewat ndan 
*usir
*hina
*translate
*itung
*cut
*reverse
*nick
*votenick
*createemoji
*nista
*instaprofile
*portal
*lowpitch / highpitch /reverseaudio / ytsearch
*raung / escort / tahantahan / matiinlampu / ancam
*sethighpitch / setlowpitch`)};
 //----------------------------------------------------------------------------------------------------------------------------------------------------------------       
        
       if ((command.toLowerCase() === 'nick' && args) && message.author.id === message.guild.ownerID){
          let isGoodToGo = false;
          let filteredIndex;
        if ( args.length >=2 ){
            isGoodToGo = true
           filteredIndex = args.filter((value, index) =>{
              
            
              return index >= 1

          }) 
        }

         const usermention = message.mentions.members.first();
           if (usermention && isGoodToGo){
            
            usermention.setNickname(filteredIndex.join(' '));
            message.channel.send(`${usermention}'s name has been changed`)
           }
            
       }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       if ((command.toLowerCase() === 'raung' || command.toLowerCase() === 'escort' || command.toLowerCase() === 'ancam' || command.toLowerCase() === 'matiinlampu') && args ){

        let connection;
        const markedchannel = message.guild.channels.cache
        .filter((filter) => filter.type === 'voice')
        .find((filtered) => filtered.name.toLowerCase() === args.join(' ').toLowerCase());


         try {
            connection = await markedchannel.join();
         } catch (error) {
             message.channel.send('gk ada channelnya bre')
             return
         }

        switch (command.toLowerCase()) {
            case 'raung':
                PlayClip("https://www.youtube.com/watch?v=tkiFrI072f0", 
                'https://cdn.discordapp.com/attachments/426214215750254604/798992486251888720/IMG_20210114_020858.jpg' )

                break;

            case 'escort':
                PlayClip("https://www.youtube.com/watch?v=cX6z1X1AcwU", 'siap ndan laksanakan!')
            
                break;

            case 'ancam':
               PlayClip("https://www.youtube.com/watch?v=7zzs1-7UbpA" , 'lu jangan sampe gw bunuh lu ya!')
                break;

            case 'matiinlampu':
                PlayClip("https://www.youtube.com/watch?v=h0wg5TLYfWQ" , 'peduli bumi dong bre')
                    break;
        
            default:
                break;
        }
             
        async function PlayClip (url , callingcard ){
           
            try {
                let stream = discytdl(url, {
            filter: "audioonly",
            opusEncoded: true });
            message.channel.send(callingcard);
            markedchannel.join()
            .then(connection => {  
                let dispatcher = connection.play(stream, {type: "opus"}).on('finish', ()=> markedchannel.leave()) 
            })
           
        
                
            } catch (error) {
                markedchannel.leave();
                message.channel.send('ada yg salah bre')
                console.log(error);
                return   
            }
             


        }

        
          
    };

    // if (command.toLowerCase() === 'escort' && args ){

    //     let connection;
    //     const markedchannel = message.guild.channels.cache
    //     .filter((filter) => filter.type === 'voice')
    //     .find((filtered) => filtered.name.toLowerCase() === args.join(' ').toLowerCase());


    //      try {
    //         connection = await markedchannel.join();
    //      } catch (error) {
    //          message.channel.send('gk ada channelnya bre')
    //          return
    //      }
             
        

    //      try {
    //         let stream = discytdl("https://www.youtube.com/watch?v=cX6z1X1AcwU", {
    //     filter: "audioonly",
    //     opusEncoded: true });
    //     message.channel.send('siap ndan laksanakan!');
    //     markedchannel.join()
    //     .then(connection => {  
    //         let dispatcher = connection.play(stream, {type: "opus"}).on('finish', ()=> markedchannel.leave()) 
    //     })
       
    
            
    //     } catch (error) {
    //         markedchannel.leave();
    //         message.channel.send('ada yg salah bre')
    //         console.log(error);
    //         return   
    //     }
      
        
          
    // };

    if (command.toLowerCase() === 'tahantahan' && args ){

 
        let connection;
        const markedchannel = message.guild.channels.cache
        .filter((filter) => filter.type === 'voice')
        .find((filtered) => filtered.name.toLowerCase() === args.join(' ').toLowerCase());


         try {
            connection = await markedchannel.join();
         } catch (error) {
             message.channel.send('gk ada channelnya bre')
             return
         }
             
        

         try {

            let stream = discytdl("https://youtu.be/F314suqCA1c", {
        filter: "audioonly",
        opusEncoded: true,
        encoderArgs: ['-af', 'rubberband=pitch=2'] });

        markedchannel.join()
        .then(connection => {  
            let dispatcher = connection.play(stream, {type: "opus"}).on('finish', ()=> markedchannel.leave()) 
        })
       
    
            
        } catch (error) {
            markedchannel.leave();
            message.channel.send('ada yg salah bre')
            console.log(error);
            return   
        }
            
          
    };

    if ((command.toLowerCase() === 'jumbo' && args)  ){
 
        var emojiID = null;
        const newargs = args.toString()
        if(newargs.includes('>') && newargs.includes('<')){
         const newerargs = newargs.lastIndexOf('>')
         const calculation = newerargs - 18
         emojiID = newargs.substring(calculation, newerargs )
         message.channel.send(`https://cdn.discordapp.com/emojis/${emojiID}`)
        }
        else
        console.log('emote cannot be grabbed')
   
      
       }
    
    if((command.toLowerCase() === 'sethighpitch' || command.toLowerCase() === 'setlowpitch') && args){
        switch (command.toLowerCase()) {
            case 'sethighpitch':
                HighPitch();
                break;

            case 'setlowpitch':
                LowPitch();
                break;
    
            default:
                break;
        }

 async function HighPitch(){

        var fl;
        try {
           fl = parseFloat(args[0]).toFixed(1);
       } catch (error) {
           message.channel.send('masukkan angka diantara 1.2 sampai 2.5 ya bre')
       }

       if(fl > 1.1 && fl < 2.6){
       floatHighPitch = fl;
        message.channel.send(`Pitch tinggi berhasil diubah ke ${fl} (default 1.2)`)

       }else message.channel.send('masukkan angka diantara 1.2 sampai 2.5 ya bre');
       
    }

async function LowPitch(){

    var fl;
    try {
        fl = parseFloat(args[0]).toFixed(1);
    } catch (error) {
        message.channel.send('masukkan angka diantara 0.2 sampai 0.8 ya bre')
    }

    if(fl > 0.1 && fl < 0.9){
    floatLowPitch = fl;
    message.channel.send(`Pitch rendah berhasil diubah ke ${fl} (default 0.8)`)

    }else message.channel.send('masukkan angka diantara 0.2 sampai 0.8 ya bre');
    
}
        

    }  

    if ((command.toLowerCase() === 'highpitch' || command.toLowerCase() === 'lowpitch' || command.toLowerCase() === 'reverseaudio') && args[0] ){
        if(message.member.voice.channel){

            switch (command.toLowerCase()) {
                case 'highpitch':
                    
                    PlaySound(`rubberband=pitch=${floatHighPitch}`, 'high pitch', floatHighPitch )
                    break;

                case 'lowpitch':
                   
                    PlaySound(`rubberband=pitch=${floatLowPitch}`, 'low pitch' , floatLowPitch )
                    break;

                case 'reverseaudio':
            
                PlaySound('areverse', 'reverse')
                break;
            
                default:
                    break;
            }

    async function PlaySound(param , identifierJudul, varPitch) {

        const markedchannel = message.member.voice.channel;
       const title = args.join();
    let searchResult;
    let url;
       try {

         searchResult = await searcher.search(title);
         url = searchResult.first.url;
         if(identifierJudul === 'high pitch' || identifierJudul === 'low pitch')
        message.channel.send(`Playing >> **${searchResult.first.title}** by **${searchResult.first.channelTitle}** in ${identifierJudul} by ${varPitch}`);
        else
        message.channel.send(`Playing >> **${searchResult.first.title}** by **${searchResult.first.channelTitle}** in ${identifierJudul}`);
       } catch (error) {
           message.channel.send('ad yg salah mencari videonya bre')
       }
       

       try {

        let stream = discytdl(url, {
    filter: "audioonly",
    opusEncoded: true,
    encoderArgs: ['-af', param] });

    markedchannel.join()
    .then(connection => {  
        let dispatcher = connection.play(stream, {type: "opus"}).on('finish', ()=> markedchannel.leave()) 
    })
   

        
    } catch (error) {
        markedchannel.leave();
        message.channel.send('ada yg salah saat memutar video sepertinya bre')
        console.log(error);
        return   
    }

      
        
    }

   }else message.channel.send('tolong masuk channel dulu ya bre')
       
       

    
    } else if(command.toLowerCase() === 'highpitch' || command.toLowerCase() === 'lowpitch')
      message.channel.send('tolong masukan judul ya bre')

    

    if(command.toLowerCase() === 'ytsearch'){
        const title = args.join();
        try {
         const searchResult = await searcher.search(title);
         
         message.channel.send(`Ini bre URLnya : ${searchResult.first.url}`)
        } catch (error) {
            console.log(error);
            message.channel.send('sorry bre kyknya ada yg salah bre')
            
        }
     }

    if(command.toLowerCase() === 'usir'){
        if(message.member.voice.channel)
           message.member.voice.channel.leave();
        else message.channel.send('gw lg gk di dalem channel nih bre!')


    }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

       if ((command.toLowerCase() == 'portal' && args[0]) && args[1]){
        
        const filteredIndex = args.filter((value, index) =>{
             return index >= 1
         })
                 const arizona = args[0];
                 try {
                     const  guildName = await client.guilds.cache.find(server => server.name.toLowerCase().startsWith(arizona.toLowerCase()));
                     const targetChannel = await guildName.channels.cache.find( key => key.type === 'text' );
                     // const targetChannel = await client.guilds.cache.first().channels.cache.find( key => key.name === 'general' );
                     targetChannel.send(filteredIndex.join(' '));
                     message.channel.send('berhasil mengirim msg');
                     
                         
                 } catch (err) {
                     message.channel.send('sorry bre ad yg salah');
                     
                 }
        }
 //----------------------------------------------------------------------------------------------------------------------------------------------------------------
     if (command.toLowerCase() === 'votenick' && args){

            let isGoodToGo = false;
            let filteredIndex;
            const usermention = message.mentions.members.first();
            
            if ( (args.length >=2) && usermention ){
                isGoodToGo = true
            filteredIndex = args.filter((value, index) =>{
                return index >= 1
            }) 
            } else return message.channel.send('no nickname');



     if(isGoodToGo){
             
             let firstMsg = await message.channel.send(`ubah nama ${usermention} ke ${filteredIndex.join(' ')} (15 detik)`)
             let poolPositive = 0;
             let poolNegative = 0;
            
             const filterPositive = (reaction , user) =>{ return reaction.emoji.name === '✅' && user.id }
            const filterNegative = (reaction, user) => { return reaction.emoji.name === '❌' && user.id }
            
            const collectorPositive = message.createReactionCollector(filterPositive , { time : 15000});
            collectorPositive.options.dispose = true
            collectorPositive.on('collect', (r , user) => {
                poolPositive++;
                console.log(`collected positive pool from ${user.tag} and ${poolPositive}`)});
            collectorPositive.on('remove', (r , user)=>{
                poolPositive--;
                console.log(`removed positive pool from ${user.tag} and ${poolPositive}`)
            });
            collectorPositive.on('end', () => console.log(`${poolPositive} positive items have been collected`) );

            const collectorNegative = message.createReactionCollector(filterNegative , { time : 15000});
            collectorNegative.options.dispose = true
            collectorNegative.on('collect', (r , user) => {
                poolNegative++;
                console.log(`collected negative pool from ${user.tag} and ${poolNegative}`)});
            collectorNegative.on('remove', (r , user)=>{
                poolNegative--;
                console.log(`removed positive pool from ${user.tag} and ${poolNegative}`)
            });
            collectorNegative.on('end', () => console.log(`${poolNegative} negative items have been collected`)  );
            
            
            message.react('✅');
            message.react('❌');


        
            setTimeout(() =>{
                
                if (poolPositive > poolNegative){
                
                usermention.setNickname(filteredIndex.join(' '));

                firstMsg.edit(`nickname ${usermention} dirubah(${poolPositive} upvotes and ${poolNegative} downvotes)`);
                }
                else firstMsg.edit(`nickname ${usermention} tidak dirubah(${poolPositive} upvotes and ${poolNegative} downvotes)`);
              
              
            }, 15000);

     }

         }
 //----------------------------------------------------------------------------------------------------------------------------------------------------------------
             if ((command.toLowerCase() === 'createemoji' && args[0]) && message.attachments.find( image => image.size < 10000000)){
            const color1 = Math.random() * 255;
            const color2 = Math.random() * 255;
            const color3 = Math.random() * 255;

            const embed = new MessageEmbed()
            .setDescription(`${message.author.username} mau bikin emote baru :${args[0]}: (1 menit)`)
            .setImage(message.attachments.last().url)
            .setColor([color1 , color2 , color3]);

            const embedSuccess = new MessageEmbed()
            .setDescription(`${message.author.username} berhasil membuat emote :${args[0]}:`)
            .setImage(message.attachments.last().url)
            .setColor([color1 , color2 , color3]);

            const embedFailed = new MessageEmbed()
            .setDescription(`${message.author.username} gagal membuat emote, FeelsBadMan`)
            .setImage('https://cdn.discordapp.com/attachments/748362014652367001/757187050200891479/pepehands.jpg')
            .setColor([color1 , color2 , color3]);
            
            // let firstMsg = await message.channel.send(`${message.author.username} mau bikin emote baru`);
            let sentEmbed = await message.channel.send(embed);
            let voted;
            console.log(message.attachments);
             let poolPositive = 0;
             let poolNegative = 0;
            
             const filterPositive = (reaction , user) =>{ return reaction.emoji.name === '✅' && user.id }
            const filterNegative = (reaction, user) => { return reaction.emoji.name === '❌' && user.id }
            
            const collectorPositive = sentEmbed.createReactionCollector(filterPositive , { time : 60000});
            collectorPositive.options.dispose = true
            collectorPositive.on('collect', (r , user) => {
                poolPositive++;
                console.log(`collected positive pool from ${user.tag} and ${poolPositive}`)});
            collectorPositive.on('remove', (r , user)=>{
                poolPositive--;
                console.log(`removed positive pool from ${user.tag} and ${poolPositive}`)
            });
            collectorPositive.on('end', () => console.log(`${poolPositive} positive items have been collected`) );

            const collectorNegative = sentEmbed.createReactionCollector(filterNegative , { time : 60000});
            collectorNegative.options.dispose = true
            collectorNegative.on('collect', (r , user) => {
                poolNegative++;
                console.log(`collected negative pool from ${user.tag} and ${poolNegative}`)});
            collectorNegative.on('remove', (r , user)=>{
                poolNegative--;
                console.log(`removed positive pool from ${user.tag} and ${poolNegative}`)
            });
            collectorNegative.on('end', () => console.log(`${poolNegative} negative items have been collected`)  );
            
            
            sentEmbed.react('✅');
            sentEmbed.react('❌');


        
            setTimeout(() =>{
                
                if (poolPositive > poolNegative){

                   voted = true;
 
                }

                if (voted){
                    const image = message.attachments.last().url;
                    message.guild.emojis.create(image , args[0]).then((emoji) =>{
                       sentEmbed.edit(embedSuccess.setDescription(`${message.author.username} berhasil membuat emote :${args[0]}: (${poolPositive} upvotes and ${poolNegative} downvotes)`));
                    }).catch( (error)=>{
                   message.channel.send(`filenya kyknya kegedean bre <256kb / jangan pake special character ya bre`);
                    });
                  //   console.log(message.attachments.last().url);
                } 
                else {
                    sentEmbed.edit(embedFailed.setDescription(`${message.author.username} gagal membuat emote, FeelsBadMan (${poolPositive} upvotes and ${poolNegative} downvotes)`));
                 sentEmbed.react("🇫")
                     }
              
            }, 60000);


         
        };
 //----------------------------------------------------------------------------------------------------------------------------------------------------------------
    

        if (command.toLowerCase() === 'reverse' && args){

           const original = args.join(' ');
           const originaLength = original.length;
           var reverse = '';

           for ( i = originaLength - 1; i>=0; i-- ){
              reverse = reverse + original.charAt(i);
           }
           
           message.channel.send(reverse);
        }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
        if(command.toLowerCase() === 'cut' && args[1]){
            const parsed = parseInt(args);
            const floattwo = `0.${args[1]}`
            const parsedtwo = parseFloat(floattwo);
            const result = parsed - (parsed * parsedtwo) ;

            message.reply(result);

        } else if (command.toLowerCase() === 'cut' && args == false){

            message.reply(`
cth = *cut 10000 20

`)}


       if (command.toLowerCase() === 'itung' && args[0]){
        const operators = ['/' , '*' , '%' , '+' , '-']
        const joined = args.join(' ');
         if (operators.some( pass => joined.includes(pass))){
          
            const result = eval(joined);
            message.reply(result);

         } else{ message.reply('aduh gmn ya bre') }
          
        };
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
        // if (command.toLowerCase() === 'testcommand' && args.length >= 3){
        //     const filteredindex = args.filter((value , index) =>{
        //               return index >=2
        //     })
    
        //      console.log(args.length);
        //      console.log(filteredindex);
        // };
//-------------------------------------------------------------------------------Translate---------------------------------------------------------------------------------
            if (command.toLowerCase() === 'terjemah' && args[0]){
                const stringized = args.join(' ');
                const translate = require('@vitalets/google-translate-api');
                translate(stringized, {from: 'id', to: 'en'}).then((res) =>{
                message.reply(res.text);
                }).catch((err) =>{ 
                message.reply(err);
                })

            }else if (command.toLowerCase() === 'terjemah'){
                message.reply(`
eng - id = *translate
id - eng = *terjemah
all - eng = *autotranslate`);
                
                }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
            if (command.toLowerCase() === 'autotranslate' && args[0]){
                const stringized = args.join(' ');
                const translate = require('@vitalets/google-translate-api');
                translate(stringized, {to: 'en'}).then((res) =>{
                message.channel.send(res.from.language.iso);
                message.reply(res.text);
                }).catch((err) =>{ 
                message.reply(err);
                })
              }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
           if (command.toLowerCase() === 'translate' && args[0]){
            const stringized = args.join(' ');
            const translate = require('@vitalets/google-translate-api');
            translate(stringized, {from: 'en', to: 'id'}).then((res) =>{
               message.reply(res.text);
            }).catch((err) =>{ 
               message.reply(err);
            })

         }else if (command.toLowerCase() === 'translate'){
            message.reply(`
eng - id = *translate
id - eng = *terjemah
all - eng = *autotranslate`);
            
            }
        
//-------------------------------------------------------------------------------Translate---------------------------------------------------------------------------------       
    
        const umpatan = ['kontol' , 'anjing' , 'memek' , 'titit' , 'goblog' , 'bego' , 'kontit', 
        'bangsat' , 'entot' , 'tolol' , 'idiot' , 'tai' , 'brengsek' , 
        'monyet', 'babi' , 'anjeng' , 'bajingan' , 'geblek' , 'gila', 'kontil' , 'durjana', 'peki', 'peju']

        if (command.toLowerCase() === 'hina' && args[0].startsWith('<@')){
        const replaced = args[0].replace('<@!', '').replace('>' , '').replace('<@', '')
        let randomizednumber = Math.floor(Math.random() * 23 +  0);
        if(replaced.length === 18 && replaced != client.user.id ){
            
            message.channel.send(`${umpatan[randomizednumber]} lo ${args.join(' ')}`)

        } else { message.reply('loe kira gw tolol?')};

        

        } 

        if (command.toLowerCase() === 'nista' && args[0].startsWith('<@')){
        const replaced = args[0].replace('<@!', '').replace('>' , '').replace('<@', '')
        let randomizednumber = Math.floor(Math.random() * 23 +  0);
        let randomizednumber2 = Math.floor(Math.random() * 23 +  0);
        if(replaced.length === 18 && replaced != client.user.id ){
            
            message.channel.send(`${umpatan[randomizednumber]} ${umpatan[randomizednumber2]} lo ${args.join(' ')}`)

        } else { message.reply('loe kira gw tolol?')};

        

        } 
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
      
} else return;




});



