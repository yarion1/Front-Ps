export default (URI,Options)=> new Promise((resolve,reject)=>{
    fetch(`http://localhost:3000/${URI}`,Options)
    .then(response=>response.json())
    .then(result => {
        resolve(result)
    })
    .catch(err=>{
        reject(err);
    })
});