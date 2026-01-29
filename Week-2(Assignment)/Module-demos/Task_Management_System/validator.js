function validateTitle(title) {
    if(title.length<3)
        return false;
    return true;    
}

function validatePriority(priority) {
    const priorities=['low','medium','high'];
    return priorities.includes(priority.toLowerCase())?true:false;
}

function validateDueDate(date) {
    let currentDate= new Date();
    if(new Date(date)>=currentDate)
        return true;
    else
        return false;
}

export{validateDueDate,validatePriority,validateTitle};
