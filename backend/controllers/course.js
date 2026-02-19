exports.getAllCourses = async (req, res) => {
  res.json([
    {
      _id: "1",
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript",
      price: 0,
    },
    {
      _id: "2",
      title: "React Basics",
      description: "Frontend with React",
      price: 499,
    },
  ]);
};
