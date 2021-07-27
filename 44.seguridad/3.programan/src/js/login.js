const inputs = document.querySelectorAll("input")
const btnlogin= document.getElementById("login")
const URL_BACKEND = "http://localhost:3000"

btnlogin.addEventListener("click", ()=> {
    console.log(inputs[0].value)
    console.log(inputs[1].value)
    const data = {
        user:inputs[0].value,
        pass:inputs[1].value
    }
    login(data).then(data => {
        let user  = {
            token: data.token,
            user:nputs[0].value
        }
        localStorage.setItem("user",  JSON.stringify(user))
        window.location.href = ".."
        console.log(data)
    }).catch(e => {
        console.log(e)
    })
})


const login =  async (data) =>  {
    try {
        const result = await fetch(URL_BACKEND + "/login", {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json =  result.json()
        return json;
    } catch (e){
        console.log("ha ocurrido un error" + e)
    }

}