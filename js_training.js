/*
Exercise #1
Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
console.log("This should appear in our console when inspecting the page.");

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(names,sentence){
    //split dog_string into array of words to compare them 1 to 1
    sentence=sentence.toLowerCase().replace(',','').replace(',','').replace('!','').split(" ");
    console.log(sentence);
    for (let i=0;i<names.length;i++){
        names[i]=names[i].toLowerCase();
    };
    console.log(names);
    for(let i=0;i<names.length;i++){
        var x=0
        for(let j=0;j<=sentence.length;j++){
            if(names[i]==sentence[j]){
                console.log('"%s" : Matched dog_names ',names[i]);
                x=1
            }
        };
        if(x==0){
            console.log('"%s" : No matches.',names[i])
        }
    }
}
//Call method here with parameters
findWords(dog_names,dog_string);

// ============================================================== \\
/*
Exercise #2
Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index"
*/

givin_arr =["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        arr.splice(i, 1, "even index");
        i++;
        }
        console.log(arr);
}
replaceEvens(givin_arr)