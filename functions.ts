
function minhaFuncao (a:number, b:number){
    console.log(a + b)
}

minhaFuncao (4,3)

function letras (a:string, b:string, c:string) {
    console.log(`Letra ${a}\nLetra ${b}\nLetra ${c}`)
}
letras('A', 'B', 'C')


// função com lista
function numeroImpares (a:number[]):number{
    return  a[1] 
}

const minhaLista: Array<number> = [1,2,3,4,5,6,7,8,9]

console.log(numeroImpares(minhaLista))

//função com objeto
function coordenadas(coord: {x:number, y:number}): void {
    console.log(`X tem a coordenada: ${coord.x}`)
    console.log(`Y tem a coordenada: ${coord.y}`)
}

const objetoCoord = {x:10, y:20}
coordenadas(objetoCoord)

//função com argumentos opcionais
function minhasIniciais(a:string,b?:string,c?:string,d?:string,e?:string):void {
    console.log(`Minhas iniciais são: ${a}${b}${c}${d}${e}`)
}

minhasIniciais('U','C')
minhasIniciais('M','A','T','M','C')

// Union Type:
let cpf:string | number
cpf = '125.203.033-21'
cpf = 12332143509

let userApi: string[] | number[] = []
userApi = [12345,2,34]
userApi = ['Aline','Costa']


//Literal Type: resumindo essenão é good
let teste:'testando'
teste = 'testando'
console.log(teste)
