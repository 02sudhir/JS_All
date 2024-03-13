


function calculate()
{
    let day;
    let month;
    let year;
    let currentDay = parseInt(cd.value.slice(8,10),10);
    let currentMonth = parseInt(cd.value.slice(5,7),10);
    let currentYear = parseInt(cd.value.slice(0,4),10);
    console.log(currentYear,currentMonth,currentDay);


    let BirthDay = parseInt(dob.value.slice(8,10),10);
    let BirthtMonth = parseInt(dob.value.slice(5,7),10);
    let Birthyear = parseInt(dob.value.slice(0,4),10);
    console.log(Birthyear,BirthtMonth,BirthDay);



    if(currentDay>=BirthDay)
    {
        day = currentDay - BirthDay;
    }
    else
    {
        day = currentDay + new Date(currentYear,currentMonth).getDate() -BirthDay;
        currentMonth -- ;
    }


    if(currentMonth>= BirthtMonth)
    {
        month = currentMonth - BirthtMonth;
        year --;

    }

    else
    {
        month = currentMonth + 12 -BirthtMonth;
        currentYear --;
    }


    year = currentYear  - Birthyear;

    if(year<0)
    {
        age.innerHTML = "kya majak kar rahe ho  Maqsood bhai";

    }
    else{
        age.innerHTML = year + "Year," + month + "month," +  day +  "days"; 
    }

}