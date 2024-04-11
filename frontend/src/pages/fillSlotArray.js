export const fillSlotArray = ()=>{
    const types = [
        {name: 1, value: 2, amount: 40, effect:null, imgUrl:1, id:1},
        {name: 2, value: 2.2, amount: 20, effect:null, imgUrl:2, id:2},
        {name: 3, value: 2.5, amount: 10, effect:null, imgUrl:3, id:3},
        {name: 4, value: 4, amount: 5, effect:null, imgUrl:4, id:4}
    ]
    let array = []
        types.map((type)=>{
            let i = 0
            while(type.amount>i){
                i++
                array.push(type)
            }
        })

        const shuffle= (array) =>{
            let currentIndex = array.length;
            while (currentIndex != 0) {

                let randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
        }

        shuffle(array);
    return array
}