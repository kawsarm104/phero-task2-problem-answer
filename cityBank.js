const cardDistribution=(user_list)=>{
    if(user_list.length==0){
        return []
    }
    let output=[]
    user_list.forEach(o => {
        let cardNumber,gift,priority;
        cardNumber=o.district.toUpperCase().slice(0,2)+o.currentYear.toString().slice(-2)+o.postNo.toString().slice(0,2)+o.birthDay+"00000"+o.priority
        if(o.priority%2==0){
            gift="R"
        }else{
            gift="W"
        }
        priority=o.priority
        output.push({cardNumber,gift,priority})
    });
    output.sort((a, b) => a.priority - b.priority);
    return output;
}
 
 
const output=cardDistribution([
    {name:"Mr Rashed",birthDay:1995,currentYear:2022,district:"Dhaka",postNo:1200,priority:2},
    {name:"Mr Rashed",birthDay:1999,currentYear:2022,district:"Dhaka",postNo:1200,priority:1},
])
 
console.log(output)
