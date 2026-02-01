const assignments = [
  {
    title: "Linear Regression from Scratch",
    subject: "Machine Learning",
    problem: "Predict continuous values using supervised learning.",
    implementation:
      "Implemented regression using mathematical formulation and NumPy.",
    tools: "Python, NumPy, Matplotlib",
    outcome: "Accurate predictions with clear visualizations.",
    // ✅ Direct PDF preview
    pdf: "https://raw.githubusercontent.com/Neardy11coder/linear-regression-from-scratch/main/linear-regression.pdf",

    // ✅ Correct GitHub repository
    code: "https://github.com/Neardy11coder/linear-regression-from-scratch",
  },
];

const AcademicWork = () => {
  return (
    <section className="c-space mt-20 md:mt-28" id="academic-work">
      <h2 className="text-heading mb-8">Academic Work</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {assignments.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gradient-to-b from-storm to-indigo transition hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-neutral-400">{item.subject}</p>

            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li><b>Problem:</b> {item.problem}</li>
              <li><b>Implementation:</b> {item.implementation}</li>
              <li><b>Tools:</b> {item.tools}</li>
              <li><b>Outcome:</b> {item.outcome}</li>
            </ul>

            <div className="mt-4 flex gap-4 text-sm">
              <a href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition">
                View PDF
              </a>
              <a href={item.code}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicWork;
