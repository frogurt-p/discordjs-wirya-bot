//require('dotenv').config();

//const { Client, MessageAttachment, VoiceChannel } = require("discord.js");
//const client = new Client();

//client.login(process.env.DISCORDJS_WIRYA_TOKEN); 

client.on('ready' ,() => {

 client.user.setActivity('toa,walkietalkie,strobo,*commands');

});


    const prefix = "*";

client.on('message', (message) => {

    if (message.content.startsWith(prefix) && message.author.bot === false ){
        const [command, ...args] = message.content
        .trim()
        .substring(prefix.length)
        .split(' ');
        
        console.log(command);
        console.log(args);
   

    }
     

    
    if (message.content.toLowerCase() === '*commands') {

        message.reply('halo , pap dong wir , cepu , ijin lewat ndan , *toa , *gelud , *usir')
    };
    
    if (message.content.toLowerCase() === 'halo' && message.author.bot === false) {

        message.reply('halo bre')
    };

    if (message.content.toLowerCase() === 'pap dong wir' && message.author.bot === false ) {

        const pap = new MessageAttachment('https://cdn.discordapp.com/attachments/426214215750254604/748890227904610476/Screenshot_2020-07-07-22-58-46-89.jpg');
        message.channel.send(pap);
    };


    if (message.content.toLowerCase() === 'cepu' && message.author.bot === false ){

       const cepu = new MessageAttachment('https://cdn.discordapp.com/attachments/748362014652367001/748380268234014811/20200827_100848.jpg');

       message.channel.send(cepu);
       message.reply('gw gk cepu ajg');
    };
    
   if (message.content.toLowerCase() === 'ijin lewat ndan' && message.author.bot === false ){

     message.reply('siap ndan');


   };

   if (message.content === '*usir' && message.member.voice.channel && message.author.bot === false){

    message.member.voice.channel.leave(); 
    
    

   }else return;

 


});

client.on('message', async (message) => {

    const ytdl = require('ytdl-core');

    if (message.content === '*toa' && message.author.bot === false ){

        
    
        if (message.member.voice.channel) {
          
            const connection = await message.member.voice.channel.join();
            
            connection.play(ytdl('https://www.youtube.com/watch?v=cX6z1X1AcwU', { filter: 'audioonly' }));


            
            message.reply('ijin lewat ndan');
   
        } else { message.reply('msk channel dulu bre...');}
    
    
    };
    
    if (message.content === '*gelud' && message.author.bot === false ){

        if (message.member.voice.channel){

            const connection = await message.member.voice.channel.join();
            
            
            connection.play(ytdl('https://www.youtube.com/watch?v=F314suqCA1c', { filter: 'audioonly' }));
      
            message.reply('GW GABAKAL NGE GAS KALO LU GA NGE GAS DI GRUP');


        } else {message.reply('msk channel dulu bre...');}
         

   
    };

    
});

//////////////////////////////////////

// else { message.reply(`
// ex = *cut 10000 20
// return 8000
//        `)}

if (command.toLowerCase() === 'halo' ) {
    
    message.reply('halo bre')
};

if (command.toLowerCase() === 'pap dong wir' ) {

    const pap = new MessageAttachment('https://cdn.discordapp.com/attachments/426214215750254604/748890227904610476/Screenshot_2020-07-07-22-58-46-89.jpg');
    message.channel.send(pap);
};


if (command.toLowerCase() === 'cepu' ){

   const cepu = new MessageAttachment('https://cdn.discordapp.com/attachments/748362014652367001/748380268234014811/20200827_100848.jpg');

   message.channel.send(cepu);
   message.reply('gw gk cepu ajg');
};

if (command.toLowerCase() === 'ijin lewat ndan' ){

 message.reply('siap ndan');


};