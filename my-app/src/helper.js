

function choice(items){
  const foodItems = Math.floor(Math.random()*items.length);
  return items[foodItems];
}

function remove(items,item){
         for(let i in items){
             if(items[i]===item){
                 //return [items.filter(item)];
                 return [...items.slice(0,i), ...items.slice(i+1)];
             }
         }
}

export {choice,remove};