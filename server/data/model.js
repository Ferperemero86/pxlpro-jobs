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
      icon: "icon_email.svg",
      title: "Get instant job alerts",
      subtitle: "Personalised job recommendations sent straight to your email.",
    },
    {
      icon: "icon_profile.svg",
      title: "Create an account for free",
      subtitle:
        "Shortlist jobs, manage your job alerts and receive special offers.",
    },
    {
      icon: "icon_upload.svg",
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
  featuredEmployers: [
    { img: "citi.png" },
    { img: "agstar.png" },
    { img: "ford.png" },
    { img: "ioxus.png" },
    { img: "nike.png" },
    { img: "oracle.png" },
  ],
  blogArticles: [
    {
      img: "article1.png",
      title: "An introduction and the mobile revolution",
      subtitle:
        "There are many ways to market a product or a service and providing the potential clients and customers with testimonials is one of the best",
    },
    {
      img: "article2.png",
      title: "The pros and cons of taking a digital detox in the modern age",
    },
    {
      img: "article3.png",
      title: "Why should your company value user experience research?",
    },
    {
      img: "article4.png",
      title:
        "We're in the age of big data. But it's what you do with it what matters",
    },
    {
      img: "article5.png",
      title: "INdustry focus: A look inside Invision's studio in California",
    },
  ],
  featuredCampaigns: [
    { title: "Jobs in the United States" },
    { title: "Management jobs in New York" },
    { title: "Graduate Jobs" },
    { title: "Engeneering jobs in Chicago" },
    { title: "Jobs in California" },
  ],
};
