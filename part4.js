const classInfo={
    aman: {
        grade:'A+',
        city:'pune'
    },
    ruhi:{
        grade:'A',
        city:'mumbai'
    },
    karan:{
        grade:'B',
        city:'delhi'
    }
}

console.log(classInfo);
console.log(classInfo.ruhi);
console.log(classInfo.karan.grade);
classInfo.aman.city="gurgaon";
console.log(classInfo);
