let questions = ["Вы были в Италии?","Вы знакомы с Джони Деппом?","У вас есть друзья?","У вас полная семья?","Вы младший в семье?"];
let answers =[];
for(let i=0;i<5;i++) {
    answers[i] = prompt(questions[i]+"\n"+"Да/Нет");
}
for(let i=0;i<questions.length;i++) {
    alert(questions[i]+"\n"+answers[i]);
}