const path = require('path');
const fs = require('fs');

const dataFolder = path.join(__dirname, 'data2');
console.log(dataFolder);

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('Data2 folder created');   
} 

const filePath = path.join(dataFolder, 'example.txt')
console.log(filePath);

fs.writeFileSync(filePath, 'Hi this is node.js');
console.log('file created successfully');

const readContentFromFile = fs.readFileSync(filePath, 'utf-8');
console.log(readContentFromFile);

fs.appendFileSync(filePath, "\nThis is a ew line added to that file")
console.log('added a new line successfully');


// Async way
const asyncFilePath = path.join(dataFolder, 'async-example.txt');
console.log(asyncFilePath);

fs.writeFile(asyncFilePath, 'hello, Async node.js', (err) => {
    if(err) throw err;
    console.log('file is created');
    
    fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
        if(err) throw err;
        console.log('async file data:', data);
        
        fs.appendFile(asyncFilePath, '\nThis is new line added', (err) => {
            if(err) throw err;
            console.log('new line added');
            
            fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
                if (err) throw err;
                console.log('async file data:', data);
                
            })
        })
    })
})