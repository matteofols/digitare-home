import React from "react";
import SubjectRow from "../components/SubjectRow";

const subjectData = {
  Math: [
    {
      title: "Calculus Vol. 1",
      subject: "Math",
      price: "Free",
      image: "/images/library.jpg",
    },
    {
      title: "Algebra Essentials",
      subject: "Math",
      price: "Free",
      image: "/images/libraryofbooks.jpg",
    },
  ],
  Science: [
    {
      title: "Biology",
      subject: "Science",
      price: "Free",
      image: "/images/biology-AP.png",
    },
    {
      title: "Chemistry",
      subject: "Science",
      price: "Free",
      image: "/images/groupsstudying.jpg",
    },
  ],
  Business: [
    {
      title: "Entrepreneurship",
      subject: "Business",
      price: "Free",
      image: "/images/entrepreneurship.png",
    },
  ],
};

const SubjectsPage = () => {
  return (
    <div className="px-2 py-10">
      {Object.entries(subjectData).map(([subject, books]) => (
        <SubjectRow key={subject} subject={subject} books={books} />
      ))}
    </div>
  );
};

export default SubjectsPage;