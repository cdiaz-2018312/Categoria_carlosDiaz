//importacion de express
const {response, request} = require('express'); 
//importacion de categoria(modelo)
const Categoria = require ('../models/categoria.js');

const getCategoria = async(req = request, res = response)=>{
    //condición del get
    const query = {estado:true};

    const listaCategoria = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);

    res.json ({
            msg: 'get Api - controlador categoria',
            listaCategoria
        });   
    }

    const postCategoria = async (req= request, res = response)=>{
        //desestructuración
        const { nombre, descripcion } = req.body;

        const categoriaGuardada = new Categoria ({nombre, descripcion});
        //guardar en la bd
        await categoriaGuardada.save();

        res.json({
            msg: 'controlador categoria post',
            categoriaGuardada

        });
    };

    const putCategoria = async (req=request, res= response)=> {
        const { id } = req.params;
        const{_id, ...resto}=req.body;

        const categoriaEditada = await Categoria.findByIdAndUpdate(id,resto);
        res.json ({
            msg: 'put editar categoria',
            id,
            categoriaEditada
        });
    }

    const deleteCategoria = async (req= request, res= response) =>{
        const {id}=req.params;

        const categoriaEliminada = await Categoria.findByIdAndUpdate(id, {estado: false})

        res.json({
            msg: 'Delete cambiar de estado categoria (false)',
            categoriaEliminada
        });

    }

    module.exports = {
        getCategoria,
        postCategoria,
        putCategoria,
        deleteCategoria
    }
    

