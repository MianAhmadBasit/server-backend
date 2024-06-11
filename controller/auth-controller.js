
const home  = async (req,res)=>{
try{
    res.status(200).send("welcome  to world of mern")

}
catch(error){
    console.log(error)
}

}


// for register

const register = async (req,res) =>{
    try {
    

        res.status(200).send("welcome to register page")
        
    } catch (error) {
        res.status(400).send({msg:"page not found"})
    }
}

module.exports = {home , register}