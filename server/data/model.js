const pkg = require("../../package.json");

module.exports = {
  appVersion: pkg.version,
  assetPath: "/public",
  pageTitle: "PxlPro Jobs",
  navItems: [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Find a job",
      href: "#find-a-job",
    },
    {
      label: "Careers advice",
      href: "#careers",
    },
    {
      label: "Job alert",
      href: "#job-alert",
    },
    {
      label: "Your Jobs",
      href: "#your-jobs",
    },
  ],
  heroMessage: "Search 1,570 jobs.",
  ctas: [
    {
      icon: "job-alerts",
      title: "Get instant job alerts",
      subtitle: "Personalised job recommendations sent straight to your email.",
    },
    {
      icon: "create-account",
      title: "Create an account for free",
      subtitle:
        "Shortlist jobs, manage your job alerts and receive special offers.",
    },
    {
      icon: "upload-resume",
      title: "Upload your resume",
      subtitle:
        "Upload your resume so our employers can match your details to the best jobs.",
    },
  ],
  jobSectors: [
    { title: "Accountancy & Finance", quantity: 41 },
    { title: "Architecture, Building & Planning", quantity: 71 },
    { title: "Art & Design", quantity: 59 },
    { title: "Building & Construction", quantity: 49 },
    { title: "Business & Management", quantity: 247 },
    { title: "Catering & Hospitality", quantity: 14 },
    { title: "Computers & IT", quantity: 55 },
    { title: "Education", quantity: 193 },
    { title: "Engineering", quantity: 47 },
    { title: "Media & Journalism", quantity: 123 },
    { title: "Retail & Wholesale", quantity: 100 },
    { title: "Sales", quantity: 29 },
    { title: "Sciences", quantity: 79 },
    { title: "Sports & Fitness", quantity: 72 },
  ],
  featuredJobs: [
    {
      img: "microsoft.png",
      title: "Business Systems Analyst",
      location: "New York City",
      salary: "$30000-$40000",
    },
    {
      img: "amex.png",
      title: "Paralegal Positions",
      location: "Newton, MA",
      salary: "Competitive salary",
    },
    {
      img: "nasa.png",
      title: "Operations Director",
      location: "Cape Canaveral, FL",
      salary: "Up to $100,000",
    },
  ],
};
