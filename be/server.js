const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const testRoutes = require('./routes/testRoutes'); ///  import routes vao` . ở đây là import vào "testRoutes" 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/cofeeShop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Kết nối MongoDB thành công!'))
.catch((err) => console.error('❌ Lỗi kết nối MongoDB:', err));

// Dùng routes ......
app.use('/', testRoutes); //// Ở đây khi import ở trên xong thì phải khai báo ở dưới đây để dùng. "tesroutes" .

// Chạy server
app.listen(3000, () => {
    console.log('🚀 Server chạy tại http://localhost:3000');
});