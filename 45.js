function carInfo(manufacturer, model, color=null, engine_power=null)
{
    let car;

    if(color === null && engine_power === null)
    {
        car = {
            manufacturer: manufacturer,
            model: model,
        }
    }
    else if(color == null)
    {
        car = {
            manufacturer: manufacturer,
            model: model,
            engine_power:engine_power
        }
    }
    else if(engine_power === null)
    {
        car = {
            manufacturer: manufacturer,
            model: model,
            color:color
        }
    }
    else
    {
        car = {
            manufacturer: manufacturer,
            model: model,
            color:color,
            engine_power: engine_power
        }
    }

    return car;
}

let car1 = carInfo('Honda', 2013)
let k = Object.keys(car1);
console.log('\n-----------------Car 1 info------------------------------\n')
for(i=0; i<k.length; i++)
{
    console.log(`${k[i]}: ${car1[k[i]]}`);
}

let car2 = carInfo('Toyota', 2019,'Black')
k = Object.keys(car2);
console.log('\n-----------------Car 2 info------------------------------\n')
for(i=0; i<k.length; i++)
{
    console.log(`${k[i]}: ${car2[k[i]]}`);
}