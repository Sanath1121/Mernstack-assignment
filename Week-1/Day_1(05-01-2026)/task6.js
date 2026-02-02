// Created: 05-Jan-26 03:18:30 PM
let skills=['react','angular','nodejs','java']
function findSkill(skills,skillName)
{
    let a=0;
    for(let i=0;i<skills.length;i++)
    {
        if(skills[i]==skillName)
        {
            a=i;
        }
    }
    if(a>0)
    {
        console.log(a);
    }
    else
    {
            console.log('Skill not found')
    }

}
let result=findSkill(skills,"java");
