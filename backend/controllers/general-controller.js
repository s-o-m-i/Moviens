const Home = async(req,res) => {
res.status(200).json({message:"Welcome To Home Page..."})
}

const About = async(req,res) => {
    res.status(200).json({message:"Welcome To About Page"})
}

module.exports= {
    Home,
    About
}