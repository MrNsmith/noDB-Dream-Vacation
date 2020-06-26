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

    }
}