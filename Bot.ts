import { Bot, InlineKeyboard } from "grammy";
import dotenv from 'dotenv';

let converter = false;
dotenv.config();

const bot = new Bot (process.env.BOT_TOKEN!);

const convert = ["❗", " ", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗", ":", ";", "<", "=", ">", "❓", "@", "𝓐", "𝓑", "𝓒", "𝓓", "𝓔", "𝓕", "𝓖", "𝓗", "𝓘", "𝓙", "𝓚", "𝓛", "𝓜", "𝓝", "𝓞", "𝓟", "𝓠", "𝓡", "𝓢", "𝓣", "𝓤", "𝓥", "𝓦", "𝓧", "𝓨", "𝓩", "[", "\\", "]", "^", "_", "`", "𝓪", "𝓫", "𝓬", "𝓭", "𝓮", "𝓯", "𝓰", "𝓱", "𝓲", "𝓳", "𝓴", "𝓵", "𝓶", "𝓷", "𝓸", "𝓹", "𝓺", "𝓻", "𝓼", "𝓽", "𝓾", "𝓿", "𝔀", "𝔁", "𝔂", "𝔃", "{", "|", "}"];


const firstMenu = "First menù, use buttons";
const secondMenu = "Second menù, use buttons";

const convertButton = "Convert";
const backButton = "Back";
const helpButton = "Help";

const firstMenuMarkup = new InlineKeyboard().text(convertButton, convertButton).text(helpButton, helpButton);
const SecondMenuMarkup = new InlineKeyboard().text(backButton, backButton).text(helpButton, helpButton);

bot.command("start", async (ctx) => {
    await ctx.reply(firstMenu, {
        parse_mode: "HTML",
        reply_markup: firstMenuMarkup,
    });
});

bot.callbackQuery(convertButton, async (ctx) => {
    converter = true
    await ctx.editMessageText(secondMenu, {
        reply_markup: SecondMenuMarkup,
        parse_mode: "HTML"
    });
});

bot.callbackQuery(backButton, async (ctx) => {
    converter = false;
    await ctx.editMessageText(firstMenu, {
        reply_markup: firstMenuMarkup,
        parse_mode: "HTML"
        
    })
})
bot.on("message" , async(ctx) =>{
    console.log(
        `${ctx.from.username} ha scritto ${
          "text" in ctx.message ? ctx.message.text : ""
        }`,
    );
    
    if(converter && ctx.message.text) {
        let result =""
        for(let i=0; i<ctx.message.text.length; i++) {
            if(ctx.message.text.charAt(i) >= "!" && ctx.message.text.charAt(i)<="}") {
                result += convert[ctx.message.text.charCodeAt(i) - "!".charCodeAt(0)];
            } else if (ctx.message.text.charAt(i) === " ") {
                result += " "; 
            }
        }
        await ctx.reply(result), {
            entities: ctx.message.entities,
        }
    }
})
bot.start();