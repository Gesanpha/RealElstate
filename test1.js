function rabit(name,breed,color,weigth){
    this.name= name;
    this.breed= breed;
    this.color= color;
    this.weigth= weigth;
    this.talk = function(){ 
        console.log(this.name +',oung oung');
     }
    }


let rabit1 = new rabit('guu','usa','red',1.2);

rabit1.talk();
    
