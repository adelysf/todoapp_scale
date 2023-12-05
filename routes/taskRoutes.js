// defining a router to organise routes
const router = require("express").Router();
const Task = require("../Task");

// route to add a task
router.post("/add/task", (req, res) => {
  const { task } = req.body;
  const newTask = new Task({ task });

  newTask.save().then(() => {
      console.log("The task has been added to the list.");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
})


// route to delete a task
router.get("/delete/task/:_id", (req, res) => {
  const { _id } = req.params;
  Task.deleteOne({ _id }).then(() => {
      console.log("The task has been deleted.");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
})

//route to update a task
router.get("/update/task/:_id",(req,res)=>{
    const {_id}=req.params;
    Task.updateOne({_id}, { isCompleted:"1"}).then(()=>{
        console.log("The task has been completed")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
});

module.exports = router;
