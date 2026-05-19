const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');
console.log(dataFolder);

if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('Data folder created');
    
}

const filePath = path.join(dataFolder, 'example.txt');
console.log(filePath);

//synchronous way of creating file
fs.writeFileSync(filePath, 'Hello from node js');
console.log('file created successfully');


const readContentFromFile = fs.readFileSync(filePath, 'utf8');
console.log(readContentFromFile);

fs.appendFileSync(filePath, "\nThis is a new line added to that file")
console.log('new file content added');


//Asynchronous way of creating file
const asyncFilePath = path.join(dataFolder, 'async-example.txt')
console.log(asyncFilePath);

fs.writeFile(asyncFilePath, 'Hello, Async node js', (err)=> {
    if (err) throw err;
    console.log('Async file is created successfully');
    
    fs.readFile(asyncFilePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Async file content: ', data);
        
        fs.appendFile(asyncFilePath, '\nThis is another line added', (err)=>{
            if (err) throw err;
            console.log("New line added to async file");
            
            fs.readFile(asyncFilePath, 'utf8', (err, updatedData) => {
                if(err) throw err;
                console.log('Updated file content', updatedData);
                
            })
        })
    })
})




































