const host = document.querySelector("#evidence-preview");
const make = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};
try {
  const response = await fetch("/data/design-examples.json");
  if (!response.ok) throw new Error("Example data unavailable");
  const data = await response.json();
  if (!Array.isArray(data.metrics) || !Array.isArray(data.schools))
    throw new Error("Invalid example data");
  const metrics = make("div", "proof-metrics");
  for (const metric of data.metrics) {
    const card = make("article", "proof-metric");
    card.append(
      make("span", "small-label", "EXAMPLE FIGURE"),
      make("strong", "", metric.value),
      make("span", "", metric.label),
      make("p", "", metric.note),
    );
    metrics.append(card);
  }
  const schools = make("div", "school-card-grid");
  for (const school of data.schools) {
    const card = make("article", "school-story-card");
    card.append(
      make("span", "small-label", "EXAMPLE SCHOOL / NOT A CUSTOMER"),
      make("h2", "", school.name),
      make("p", "", `${school.board} · ${school.location}`),
      make(
        "strong",
        "school-count",
        `${school.students.toLocaleString("en-IN")} students`,
      ),
      make("p", "", "Illustrative school size, not GyanMirai adoption."),
      make(
        "div",
        "quote-reservation",
        "Space reserved for a genuine, approved school quote.",
      ),
    );
    schools.append(card);
  }
  host.replaceChildren(metrics, schools);
} catch {
  host.replaceChildren(
    make(
      "p",
      "preview-notice",
      "The example layouts could not be loaded. Reload this page to try again. No customer evidence is published on the homepage.",
    ),
  );
}
