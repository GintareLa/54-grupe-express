
import express from 'express';
import { pageHome } from './pages/home.js';
import { pageAbout } from './pages/about.js';
import { pageUser } from './pages/user.js';
import { page404 } from './pages/404.js';
const app = express();
const port = 3000;

app.use(express.static('public'));

/* function logika() {}
app.get('/labas', logika);
app.post('/labas', logika);
app.put('/labas', logika);
app.delete('/labas', logika);

app.get('/labas', logika)
   .post('/labas', logika)
   .put('/labas', logika)
   .delete('/labas', logika);
   
app.all('/labas', logika);
*/
app.get('/', pageHome); 
app.get('/about', pageAbout);   
app.get('/users/:userId', pageUser); 
app.get('*error', page404);
 
// app.get();   // gauti informacija
// app.post()   //postinti
// app.put();   //pakoreguoti
// app.patch;   //pakoreguoti viena savybe
// app.delete() // trinti


app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}/`);
});
