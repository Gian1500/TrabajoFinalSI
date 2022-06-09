let xs = [
    [0,0],
    [0,1],
    [1,0],
    [1,1]
]

let ys = [
    [0],
    [1],
    [1],
    [1]
];


let entradas = tf.tensor2d(xs);
let salidas = tf.tensor2d(ys);

async function createModel() {
    
    const modelo = tf.sequential();

    const capaOculta = tf.layers.dense({
        units: 10,
        inputShape: [2],
        activation: "tanh"
    });

    modelo.add(capaOculta);

    const salidaEsperada = tf.layers.dense({
        units: 1,
        inputShape: [10],
        activation: "tanh"
    });

    modelo.add(salidaEsperada);

    modelo.compile({
        optimizer:"sgd",
        loss: "meanSquaredError"

    });

    const aprendizaje ={
        epochs: 500,
    };


    const resultado = await modelo.fit(entradas,salidas,aprendizaje);


    const prediccion = modelo.predict(tf.tensor2d(xs));
    prediccion.print();
    salidas.print();

    let pred=document.getElementById('resultado')
    pred.innerText=`${prediccion}`;

    let entrenamiento= document.getElementById('tablaRes')
    entrenamiento.innerText=`${entradas}`
    let entrenamiento2= document.getElementById('tablaRes2')
    entrenamiento2.innerText=`${salidaEsperada}`
   


}
createModel();
        
