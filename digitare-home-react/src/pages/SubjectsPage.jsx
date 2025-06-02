import React from "react";
import SubjectRow from "../components/SubjectRow";
import subjectData from "../data/subjects";    

/**
 * @component SubjectsPage
 * @description Page that displays all subjects with scrollable book carousels organized by category. Uses SubjectRow to render each section.
 * @author Matthew Folefac <matthewfolefac98@gmail.com>
 * @returns {JSX.Element} The Subjects overview page
 */

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
