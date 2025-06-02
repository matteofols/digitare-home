import React from "react";
import SubjectRow from "../components/SubjectRow";
import subjectData from "../data/subjects";    

const SubjectsPage = () => {
  return (
    <section className="min-h-screen px-4 md:px-8 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {Object.entries(subjectData).map(([subject, books]) => (
          <SubjectRow key={subject} subject={subject} books={books} />
        ))}
      </div>
    </section>
  );
};

export default SubjectsPage;
