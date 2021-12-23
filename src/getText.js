export default () =>{
    const texts = [
        "Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you",
        "Hladno je, januar Ja sam svako jutro mamuran Ti si s njim, a ja sam sâm Dao sam ti celog sebe, a ti gram"
        ,"U ruci volan od sto hiljada Da mogu s tobom da se vozim miljama Satima da pričamo bez pitanja Pogledima igramo do svitanja"
        ,""
    ];



    return texts[Math.floor(Math.random()*texts.length)];
}
