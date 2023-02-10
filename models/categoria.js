const {Schema,model}= require('mongoose');

const CategoriaSchema= Schema({
    nombre:{
        type: String,
        required: [true, 'nombre Obligatorio']
    },
    descripcion:{
        type: String,
        required: [true,'descrip obligatoria']
    },
    estado:{
        type:Boolean,
        default: true
    }
});

module.exports = model('Categoria', CategoriaSchema);