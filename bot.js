require('dotenv').config();

const { Client, MessageAttachment, VoiceChannel, User, GuildMember, MessageEmbed, Guild } = require("discord.js");
const guild = new Guild();
const client = new Client();
const memberguild = new GuildMember();

client.login(process.env.DISCORDJS_WIRYA_TOKEN); 

client.on('ready' ,() => {

 client.user.setActivity('toa,walkietalkie,strobo,*commands');

});


    const prefix = "*";
     


client.on('message', async (message) => {

    const globalcommand = message.content.startsWith(prefix) && message.author.bot === false;

    if (message.content.toLowerCase() === 'halo' && message.author.bot === false) {

        message.reply('halo bre')
        
    };
//----------------------------------------------------------------------------------------------------------------------------------------------------------------    
    if (message.content.toLowerCase() === 'pap dong wir' && message.author.bot === false ) {

        const pap = new MessageAttachment('https://cdn.discordapp.com/attachments/426214215750254604/748890227904610476/Screenshot_2020-07-07-22-58-46-89.jpg');
        message.channel.send(pap);
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (message.content.toLowerCase().includes('cepu') && message.author.bot === false ){

       const cepu = new MessageAttachment('https://cdn.discordapp.com/attachments/748362014652367001/748380268234014811/20200827_100848.jpg');

       message.channel.send(cepu);
       message.reply('gw gk cepu ajg');
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
cepu 
ijin lewat ndan 
*usir
*hina
*translate
*itung
*cut
*reverse
*nick`)};
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
        if (command.toLowerCase() === 'usir' && message.member.voice.channel){

           message.member.voice.channel.leave();
           
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
       'monyet', 'babi' , 'anjeng' , 'bajingan' , 'geblek' , 'gila', 'kontil' , 'durjana']
       
       if (command.toLowerCase() === 'hina' && args[0].startsWith('<@')){
       const replaced = args[0].replace('<@!', '').replace('>' , '').replace('<@', '')
       let randomizednumber = Math.floor(Math.random() * 21 +  0);
        if(replaced.length === 18 && replaced != client.user.id ){
            
            message.channel.send(`${umpatan[randomizednumber]} lo ${args}`)
    
        } else { message.reply('loe kira gw tolol?')};
    
    } else return;
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
      
} else return;




});



