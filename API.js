let h1 = document.getElementsByTagName('q')[0];


let btn = document.getElementsByTagName('button')[0];


// let Q1 = "This is how God loved the world: He gave His one and only Son, so that everyone who believes in Him will not perish but have eternal life. God sent His Son into the world not to judge the world, but to save the world through Him."
// let Q2 = "God Loves You More than You Can Imagine."
// let Q3 = "God Loves and Cares About Your Daily Needs."
// let Q4 = "God Loves You Enough to Search for You When You are Lost."
// let Q5 = "God’s Love will Never Leave You."
// let Q6 = "God’s Love Lightens Life’s Burdens."
// let Q7 = "God’s Love is Preparing a Place(In Heaven) for You and Me."
// let Q8 = "Love for God and Others is the Most Important Commandment."
// let Q9 = "Love for God Looks Like Obedience."
// let Q10 = "Love is the Identity of the Follower of Jesus."




// function Quotes(Q){
//     this.q = Q
// }

// let QUOTES1 = new Quotes(Q1);
// let QUOTES2 = new Quotes(Q2);
// let QUOTES3 = new Quotes(Q3);
// let QUOTES4 = new Quotes(Q4);
// let QUOTES5 = new Quotes(Q5);
// let QUOTES6 = new Quotes(Q6);
// let QUOTES7 = new Quotes(Q7);
// let QUOTES8 = new Quotes(Q8);
// let QUOTES9 = new Quotes(Q9);
// let QUOTES10 = new Quotes(Q10);


// let JSONOBJ1 = JSON.stringify(QUOTES1);
// let JSONOBJ2 = JSON.stringify(QUOTES2);
// let JSONOBJ3 = JSON.stringify(QUOTES3);
// let JSONOBJ4 = JSON.stringify(QUOTES4);
// let JSONOBJ5 = JSON.stringify(QUOTES5);
// let JSONOBJ6 = JSON.stringify(QUOTES6);
// let JSONOBJ7 = JSON.stringify(QUOTES7);
// let JSONOBJ8 = JSON.stringify(QUOTES8);
// let JSONOBJ9 = JSON.stringify(QUOTES9);
// let JSONOBJ10 = JSON.stringify(QUOTES10);

// console.log(JSONOBJ1);

// let arr = [JSONOBJ1, JSONOBJ2, JSONOBJ3, JSONOBJ4, JSONOBJ5, JSONOBJ6, JSONOBJ7, JSONOBJ8, JSONOBJ9, JSONOBJ10]

// let y = new Promise((quotesres,errorres)=>{
//     let a = 10;
//     if (a===10){
//         quotesres(`${arr}`);
//         // console.log(quotesres);
//         // console.log(arr);
//     }
//     else{
//         errorres("error")
//     }
// })
// .then((res)=>{
//     console.log(res);
//     return res;
//     console.log('HELLo');
// })
// .then((V)=>{
//     console.log(JSON.parse(V[0]));
// })

// console.log(y);

// y.then((res)=>{
//     console.log(res);
// })
// .catch(()=>{
//     console.log('error');
// })


let num = document.getElementById('num');

btn.addEventListener('click',()=>{
    let x = fetch('https://type.fit/api/quotes')
    // console.log(x);


    x.then((res)=>{
        // console.log(res);
        return res.json();
    })
    .then((data)=>{
        // console.log(data);
       
        fname()

        function fname(){
            let m = Math.floor((Math.random()*100));
            num.textContent = m+1;
            if(m<16){
                // console.log(m);
                h1.textContent = data[m]['text'];
            }
            else{
                fname()
            }
        }
    })

})
