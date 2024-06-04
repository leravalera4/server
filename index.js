const express = require('express')
const storesRouter = require('./routes/stores');
const locations = require('./routes/locations');
const sale = require('./routes/sale');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors()); 

app.use('/api/stores', storesRouter);
app.use('/api/updateLocation', locations);
app.use('/api/sale', sale);


app.get('/',(req,res)=>res.json({massage:'Hello'}))

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.listen(process.env.PORT || 8080);

