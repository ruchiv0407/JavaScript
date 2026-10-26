const student ={
    name:"aman",
    marks:95,
    prop:this,//globalscope
    getName: function() {
        console.log(this);
    return this.name;
    },
    getMarks: ()=> {
        console.log(this);//parent's object-window
        return this.marks;
    },
    getInfo1: function() {
        setTimeout(()=> {
        console.log(this);//student
    },2000 );
    },
     getInfo2: function() {
        setTimeout(function()  {
        console.log(this);//window
    },2000 );
    },
}