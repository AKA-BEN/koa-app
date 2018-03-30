
var fn_index = async(ctx,next)=>{
    ctx.response.body = `<h1>index page</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="eddie"></P>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

var fn_signin = async(ctx,next)=>{
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`sigin in with name: ${name},password: ${password}`);
    if(name === 'eddie' && password === '123123'){
        ctx.response.body = `<h1>Welcome, ${name}!</h1>
            <p><a href="/temp/1">进入模板页面</a></p>`;
    }else{
        ctx.response.body = `<h1>Login failed</h1>
            <p><a href="/">Try again</a></p>`;
    }
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
}