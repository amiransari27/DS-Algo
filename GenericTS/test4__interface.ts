interface Tab {
    id: string,
    position: number,
    data: any
}

interface Tab2<T> {
    id: string,
    position: number,
    data: T
}

type NumberTab = Tab2<number>
type StringTab = Tab2<string>


const myTab: Tab2<number> = {
    id: 'dkjdlk',
    position: 233,
    data: 50
}
const myTab2: Tab2<string> = {
    id: 'dkjdlk',
    position: 233,
    data: '50'
}


console.log(myTab, myTab2)