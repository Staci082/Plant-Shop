async function IncludeJavascript(filename){
    var script = await document.createElement('script');
    // <script src=""
    script.src = await filename;
    return new Promise((resolve,reject)=>{
        script.onload = ()=>{
            resolve()
        }
        document.body.appendChild(script);
    })
}

IncludeJavascript('variables.js') // import 
IncludeJavascript('functions.js') // import 
IncludeJavascript('style.js') // import

window.onload = ()=>{ // html event
    
}

