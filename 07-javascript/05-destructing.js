const destructItems = (input) =>{
    const {first,last} = input;
    const {mother,father} = input.allegiance.parents;

  const result = `${first} ${last}
    daughter of
    ${mother} and ${father}`;

    return result;
}

const sansa={
    first:'Sansa',
    last:'Stark',
    allegiance:{
        house:'Winterfall',
        parents:
        {
            mother:'Catelyn Tully',
            father: 'Eddard Stark',
        },
        animals:{
            direwolf:'Lady',
        },
    },
};

const daenerys={
    first:'daenerys',
    last:'Targaryen',
    allegiance:{
        house:'Targaryen',
        parents:
        {
            mother:'Queen Rhaella ',
            father: 'King Aerys II Targaryen',
        },
        animals:{
            dragons:'Drogon',
        },
    },
};

console.log(destructItems(sansa));
console.log(destructItems(daenerys));
