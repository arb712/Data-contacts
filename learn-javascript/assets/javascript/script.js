const Data = [{
        id: 1,
        name: 'Ariq Bimantoro',
        phone: '+62 821 8564 7628',
        email: 'ariqbimantoro@gmail.com',
        favorite: true,
        rating: 10,
        tags: ['popular', 'cool']
    },
    {
        id: 2,
        name: 'John Doe',
        phone: '+1 123 456 78',
        email: 'johndoe@john.com',
        favorite: false,
        rating: 5,
        tags: ['wise', 'not cool']
    },
    {
        id: 3,
        name: 'Raju',
        phone: '+1 122 436 758',
        email: 'raju@vatefak.com',
        favorite: false,
        rating: 4,
        tags: ['vatefak', 'nengeneng']
    }
]

// console.log(Data);
// console.log(Data[1].name);

// SHOW DATA
if (Data != null) {
    console.log(Data);
}
// ADD DATA
const newData = {
    id: 4,
    name: 'Daniel',
    phone: '+1 125 436 728',
    email: 'daniel@cdr.com',
    favorite: false,
    rating: 7,
    tags: ['oof', 'flick']
}
Data.push(newData);
console.log(Data);
// FILTER
const cari = Data.filter((main) => {
    if (main.name == "Ariq Bimantoro")
        return true;
    return false;
});
console.log(cari);
// DELETE
if(Data != null) {
    Data.splice(1,1);
    console.log(Data);
}