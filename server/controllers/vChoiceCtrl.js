const choiceDest = [];
let id = 1;

module.exports = {
    getChoice:(req, res) => {
        res.status(200).send(choiceDest)

    },
    postDest:(req, res) => {
        const{dest} = req.body;
        dest.id = id;
        id++;

        choiceDest.push(dest);
        res.status(200).send(choiceDest);

    },
    changeRating:(req,res) => {
        const{id} = req.params;
        const {rating} = req.body

        const index = choiceDest.findIndex(choiceDests => choiceDests.id ===+id)
        choiceDest[index].rating = rating;
        res.status (200).send(choiceDest);

    },
    deleteVaca: (req, res) => {
        const {id} = req.params
        const  index =  choiceDest.findIndex(choiceDests => choiceDests.id === +id)
        choiceDest.splice(index, 1);
        res.status(200).send(choiceDest);
    }
    
}