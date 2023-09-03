const stars = 6;
let price;
if (stars === 1) {
    price = 10; 
    console.log(`Hotel ${stars} stars and price = ${price}`);   
} else if (stars === 2) {
    price = 20; 
    console.log(`Hotel ${stars} stars and price = ${price}`);  
}else if (stars === 3) {
    price = 30;  
    console.log(`Hotel ${stars} stars and price = ${price}`); 
}
else if (stars === 4) {
    price = 50;  
    console.log(`Hotel ${stars} stars and price = ${price}`); 
}
else if (stars === 5) {
    price = 120; 
    console.log(`Hotel ${stars} stars and price = ${price}`);  
}
else {
    console.log(`Where is not hotel  in ${stars} stars and price ${price}`);
}

switch (stars) {
    case 1: 
        price = 10; 
        console.log(`Hotel ${stars} stars and price = ${price}`);  
        break;
    case 2: 
        price = 20; 
        console.log(`Hotel ${stars} stars and price = ${price}`);  
        break;
    case 3: 
        price = 30; 
        console.log(`Hotel ${stars} stars and price = ${price}`);  
        break;
    case 4: 
        price = 50; 
        console.log(`Hotel ${stars} stars and price = ${price}`);  
        break;
    case 5: 
        price = 120; 
        console.log(`Hotel ${stars} stars and price = ${price}`);  
        break;    
    default:
        console.log(`Where is not hotel  in ${stars} stars and price ${price}`);
}

if (stars === 1 || stars === 2) {
    price = 10; 
    console.log(`Hotel ${stars} stars and price = ${price}`);   
} 
else if (stars === 3 || stars === 4) {
    price = 30;  
    console.log(`Hotel ${stars} stars and price = ${price}`); 
}
else if (stars === 5) {
    price = 120; 
    console.log(`Hotel ${stars} stars and price = ${price}`);  
}
else {
    console.log(`Where is not hotel  in ${stars} stars and price ${price}`);
}

switch (stars) {
    case 1:        
    case 2: 
        price = 10; 
        console.log(`Hotel ${stars} stars and price = ${price}`);  
        break;
    case 3:
    case 4: 
        price = 30; 
        console.log(`Hotel ${stars} stars and price = ${price}`);  
        break;
    case 5: 
        price = 120; 
        console.log(`Hotel ${stars} stars and price = ${price}`);  
        break;    
    default:
        console.log(`Where is not hotel  in ${stars} stars and price ${price}`);
}