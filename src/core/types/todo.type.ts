
export interface Todo {
    text: string
    checked: boolean
}

const sum = (num1: number, num2:number): number => num1 + num2

type SumFuncType = typeof sum


const someObj = {
    red: 'red',
    blue: 'blue',
    someColor: '#fff'
}

type Status = keyof typeof someObj

function some(status: Status) {
    return 'some'
}

some('someColor')