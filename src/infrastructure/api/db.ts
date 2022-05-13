import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/testcleanarchitecture';

export default () => {
    
    mongoose.connect(url, () => {
        console.log('Base de datos ok')
    });

}
